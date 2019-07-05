import "reflect-metadata";
import {Controller, Param, Body, Get, Post, Put, Delete, Req, Patch, ContentType, } from "routing-controllers";
import { LoggerSrv } from "../../services";

@Controller("")
export class RootController {

    constructor(private loggerSrv: LoggerSrv,) {
        this.loggerSrv.info("created RootController");
    }

    @Get("/")
    @ContentType("application/json")
    helloServer() {
        return [
            { hello: "Hello Node.js Express Server" },
        ];
    }

    @Get("/api")
    getApi() {
        return [
            { hello: "Hello Node.js Express Server" },
        ];
    }
}