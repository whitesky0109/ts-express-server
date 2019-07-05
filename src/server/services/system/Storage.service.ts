/* 
    sqlite3 node libraries 
    ref: https://db-migrate.readthedocs.io/en/latest/API/SQL/#migrations-api-sql
*/
const driver = require("db-migrate-sqlite3");
const { dataType } = require('db-migrate-shared');

import "reflect-metadata";
import { Service } from "typedi";
import { SettingSrv, LoggerSrv } from ".";
import { EventEmitter } from "events";
import { IService } from "../../../models";

@Service()
export default class StorageSrv extends EventEmitter implements IService {

    public db: any;
    private dbname: string;

    constructor(
        private logger: LoggerSrv,
        private settingSrv: SettingSrv,
    ) {
        super();
        this.logger.info("created StorageSrv");
        this.dbname = this.settingSrv.getSystemDbName();
    }

    public init(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connect(this.dbname).then((db: any) => {
                this.db = db;
                this.logger.info(`Connected to the ${this.dbname} database.`);
                resolve();
            }, (error: Error) => {
                reject(error);
            });
        })
    }

    private connect(dbname: string): Promise<any> {
        this.logger.info(`try load sqlite : ${dbname}`);
        (this.logger as any)['sql'] = this.sqlLogger.bind(this);

        return new Promise((resolve, reject) => {
            /* if not exist then create database file */
            const internals = {
                mod: {
                    log: this.logger,
                    type: dataType,
                },
                interfaces: {
                    SeederInterface: {},
                    MigratorInterfrace: {},
                }
            }
            driver.connect({ driver: "sqlite3", filename: this.dbname }, internals, (err: Error, db: any) => {
                if (err) { reject(err); } else {
                    db.all("PRAGMA foreign_keys=ON");
                    resolve(db);
                }
            });
        });
    }

    private sqlLogger() {
        // this.logger.debug(arguments[0], { meta: { __filename, __function: (global as any).__function, __line: (global as any).__line } } );
    }
}