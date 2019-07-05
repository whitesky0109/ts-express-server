'use strict';
import "reflect-metadata";
import './polyfills';

import { useContainer, useExpressServer } from "routing-controllers";
import { useContainer as useContainerSocket, useSocketServer } from "socket-controllers";
import { Container, } from 'typedi';

import http from "http";
import express from "express";
import socketIO from "socket.io";
const morgan = require('morgan');
const figlet = require('figlet');
const cors = require("cors");

import './controllers';
import {
  // System Services
  SettingSrv, StorageSrv, 
  // node-opcua Services
  SocketManagerSrv,
  // Data Processing Services
  LoggerSrv,
} from "./services";
import { IService } from "../models";
import StorageMigrationSrv from "./services/system/StorageMigration.service";
import { EventEmitter } from "events";

export default class MainServer extends EventEmitter {
  /* app에 대한 타입 설정 */
  private port: number;

  private io: socketIO.Server;
  private app: express.Express;

  private server: http.Server;

  constructor(port?: string) {
    super();
    /* setter */
    useContainer(Container);
    useContainerSocket(Container);

    /* create Server */
    this.app = express();
    this.app.use(cors());
    useExpressServer(this.app);
    this.server = http.createServer(this.app);

    /* create websocket listener */
    this.io = socketIO(this.server, { serveClient: false });
    useSocketServer(this.io);

    /* create System Logger */
    const loggerSrv = Container.get(LoggerSrv);
    loggerSrv.info(`\n${figlet.textSync("Sample")}`);

    /* register logger Service */
    this.app.use(morgan('combined', { stream: loggerSrv }));

    /* register service instance */
    this.addServices();
    this.port = port ? parseInt(port) : Container.get(SettingSrv).getPort();
  }

  public addMiddleware(middleware: any): void {
    this.app.use(middleware);
  }

  public async addServices(): Promise<void> {
    const etcInstances = [
      { name: "socketIO", instance: this.io },
    ];
    const loggerSrv = Container.get(LoggerSrv);
    for (const { name, instance } of etcInstances) {
      Container.set(name, instance);
      loggerSrv.info(`[init] DI Registered ${name}`);
    }

    const registerServices = [
      /* System Services */
      SettingSrv,
      StorageSrv,
      StorageMigrationSrv,
      SocketManagerSrv,
    ]
    // register system services
    for (const service of registerServices) {
      try {
        const instance: IService = Container.get(service as any);
        await instance.init();
        
        loggerSrv.info(`[Serivce Initialize] DI Registered ${service.name}`);
      } catch (e) {
        console.log(e.stack);
        loggerSrv.error(e);
      }
    }
    this.emit("ready");
  }

  public getApp(): express.Express {
    return this.app;
  }

  public runServ(): Promise<http.Server> {
    const loggerSrv = Container.get(LoggerSrv);
    return new Promise((resolve: any) => {
      this.once("ready", () => {
        resolve(this.server.listen(this.port, () => loggerSrv.info(`listening on port ${this.port}`) ));
      })
    });
  }
}