/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(__webpack_require__(/*! ./server */ "./src/server/index.ts"));
const serv = new server_1.default(process.env.PORT);
serv.runServ();


/***/ }),

/***/ "./src/server/config/config.json":
/*!***************************************!*\
  !*** ./src/server/config/config.json ***!
  \***************************************/
/*! exports provided: port, sqlite, default */
/***/ (function(module) {

module.exports = {"port":4000,"sqlite":"database.db","default":{"destinations":[{"receiver":"websocket","info":{}}]}};

/***/ }),

/***/ "./src/server/controllers/index.ts":
/*!*****************************************!*\
  !*** ./src/server/controllers/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./rest/RootController */ "./src/server/controllers/rest/RootController.ts");
__webpack_require__(/*! ./websocket/WsMessageController */ "./src/server/controllers/websocket/WsMessageController.ts");


/***/ }),

/***/ "./src/server/controllers/rest/RootController.ts":
/*!*******************************************************!*\
  !*** ./src/server/controllers/rest/RootController.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const routing_controllers_1 = __webpack_require__(/*! routing-controllers */ "routing-controllers");
const services_1 = __webpack_require__(/*! ../../services */ "./src/server/services/index.ts");
let RootController = class RootController {
    constructor(loggerSrv) {
        this.loggerSrv = loggerSrv;
        this.loggerSrv.info("created RootController");
    }
    helloServer() {
        return [
            { hello: "Hello Node.js Express Server" },
        ];
    }
    getApi() {
        return [
            { hello: "Hello Node.js Express Server" },
        ];
    }
};
__decorate([
    routing_controllers_1.Get("/"),
    routing_controllers_1.ContentType("application/json"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RootController.prototype, "helloServer", null);
__decorate([
    routing_controllers_1.Get("/api"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RootController.prototype, "getApi", null);
RootController = __decorate([
    routing_controllers_1.Controller(""),
    __metadata("design:paramtypes", [services_1.LoggerSrv])
], RootController);
exports.RootController = RootController;


/***/ }),

/***/ "./src/server/controllers/websocket/WsMessageController.ts":
/*!*****************************************************************!*\
  !*** ./src/server/controllers/websocket/WsMessageController.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_controllers_1 = __webpack_require__(/*! socket-controllers */ "socket-controllers");
const services_1 = __webpack_require__(/*! ../../services */ "./src/server/services/index.ts");
let WsMessageController = class WsMessageController {
    constructor(sockMgrSrv, loggerSrv) {
        this.sockMgrSrv = sockMgrSrv;
        this.loggerSrv = loggerSrv;
        this.loggerSrv.info("created WsMessageController");
    }
    connection(socket) {
        this.sockMgrSrv.addSocket(socket);
        this.loggerSrv.info("client connected");
    }
    disconnect(socket) {
        const { id } = socket;
        this.sockMgrSrv.delSocket(id);
    }
};
__decorate([
    socket_controllers_1.OnConnect(),
    __param(0, socket_controllers_1.ConnectedSocket()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WsMessageController.prototype, "connection", null);
__decorate([
    socket_controllers_1.OnDisconnect(),
    __param(0, socket_controllers_1.ConnectedSocket()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WsMessageController.prototype, "disconnect", null);
WsMessageController = __decorate([
    socket_controllers_1.SocketController("/ws"),
    __metadata("design:paramtypes", [services_1.SocketManagerSrv,
        services_1.LoggerSrv])
], WsMessageController);
exports.WsMessageController = WsMessageController;


/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
__webpack_require__(/*! ./polyfills */ "./src/server/polyfills.ts");
const routing_controllers_1 = __webpack_require__(/*! routing-controllers */ "routing-controllers");
const socket_controllers_1 = __webpack_require__(/*! socket-controllers */ "socket-controllers");
const typedi_1 = __webpack_require__(/*! typedi */ "typedi");
const http_1 = __importDefault(__webpack_require__(/*! http */ "http"));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const socket_io_1 = __importDefault(__webpack_require__(/*! socket.io */ "socket.io"));
const morgan = __webpack_require__(/*! morgan */ "morgan");
const figlet = __webpack_require__(/*! figlet */ "figlet");
const cors = __webpack_require__(/*! cors */ "cors");
__webpack_require__(/*! ./controllers */ "./src/server/controllers/index.ts");
const services_1 = __webpack_require__(/*! ./services */ "./src/server/services/index.ts");
const StorageMigration_service_1 = __importDefault(__webpack_require__(/*! ./services/system/StorageMigration.service */ "./src/server/services/system/StorageMigration.service.ts"));
const events_1 = __webpack_require__(/*! events */ "events");
class MainServer extends events_1.EventEmitter {
    constructor(port) {
        super();
        /* setter */
        routing_controllers_1.useContainer(typedi_1.Container);
        socket_controllers_1.useContainer(typedi_1.Container);
        /* create Server */
        this.app = express_1.default();
        this.app.use(cors());
        routing_controllers_1.useExpressServer(this.app);
        this.server = http_1.default.createServer(this.app);
        /* create websocket listener */
        this.io = socket_io_1.default(this.server, { serveClient: false });
        socket_controllers_1.useSocketServer(this.io);
        /* create System Logger */
        const loggerSrv = typedi_1.Container.get(services_1.LoggerSrv);
        loggerSrv.info(`\n${figlet.textSync("Sample")}`);
        /* register logger Service */
        this.app.use(morgan('combined', { stream: loggerSrv }));
        /* register service instance */
        this.addServices();
        this.port = port ? parseInt(port) : typedi_1.Container.get(services_1.SettingSrv).getPort();
    }
    addMiddleware(middleware) {
        this.app.use(middleware);
    }
    addServices() {
        return __awaiter(this, void 0, void 0, function* () {
            const etcInstances = [
                { name: "socketIO", instance: this.io },
            ];
            const loggerSrv = typedi_1.Container.get(services_1.LoggerSrv);
            for (const { name, instance } of etcInstances) {
                typedi_1.Container.set(name, instance);
                loggerSrv.info(`[init] DI Registered ${name}`);
            }
            const registerServices = [
                /* System Services */
                services_1.SettingSrv,
                services_1.StorageSrv,
                StorageMigration_service_1.default,
                services_1.SocketManagerSrv,
            ];
            // register system services
            for (const service of registerServices) {
                try {
                    const instance = typedi_1.Container.get(service);
                    yield instance.init();
                    loggerSrv.info(`[Serivce Initialize] DI Registered ${service.name}`);
                }
                catch (e) {
                    console.log(e.stack);
                    loggerSrv.error(e);
                }
            }
            this.emit("ready");
        });
    }
    getApp() {
        return this.app;
    }
    runServ() {
        const loggerSrv = typedi_1.Container.get(services_1.LoggerSrv);
        return new Promise((resolve) => {
            this.once("ready", () => {
                resolve(this.server.listen(this.port, () => loggerSrv.info(`listening on port ${this.port}`)));
            });
        });
    }
}
exports.default = MainServer;


/***/ }),

/***/ "./src/server/polyfills.ts":
/*!*********************************!*\
  !*** ./src/server/polyfills.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** reflect-metadata **/
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
// /** fetch **/
// import 'isomorphic-fetch';
/** Symbol.asyncIterator **/
// import 'core-js/es7/symbol'


/***/ }),

/***/ "./src/server/services/index.ts":
/*!**************************************!*\
  !*** ./src/server/services/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
// System Services
const system_1 = __webpack_require__(/*! ./system */ "./src/server/services/system/index.ts");
exports.SettingSrv = system_1.SettingSrv;
exports.StorageSrv = system_1.StorageSrv;
exports.LoggerSrv = system_1.LoggerSrv;
exports.SocketManagerSrv = system_1.SocketManagerSrv;


/***/ }),

/***/ "./src/server/services/system/Logger.service.ts":
/*!******************************************************!*\
  !*** ./src/server/services/system/Logger.service.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const winston_1 = __webpack_require__(/*! winston */ "winston");
const typedi_1 = __webpack_require__(/*! typedi */ "typedi");
let LoggerSrv = class LoggerSrv {
    constructor() {
        this.logger = winston_1.createLogger({
            // level: 'info',
            format: winston_1.format.combine(winston_1.format.timestamp({ format: `YYYY-MM-DD HH:mm:ss` }), winston_1.format(info => {
                if (info.level === "error") {
                    return Object.assign({}, info, {
                        message: `${info.timestamp} ${info.stack}`,
                    });
                }
                return info;
            })(), winston_1.format.printf(info => (info.meta)
                ? `${info.timestamp} ${info.level} [${info.meta.filename}:${info.meta.line}]: ${info.message}`
                : `${info.timestamp} ${info.level} ${info.message}`)),
            transports: [
                new winston_1.transports.Console({ level: 'debug', handleExceptions: true, }),
                new winston_1.transports.File({ filename: 'error.log', level: 'error' }),
                new winston_1.transports.File({ filename: 'system.log' })
            ],
            exitOnError: false
        });
    }
    init() {
        this.logger.info("created LoggerSrv");
    }
    write(message, encoding) { this.logger.info(message); }
    alert(msg, index = 3) { this.logger.alert(msg); }
    crit(msg, index = 3) { this.logger.crit(msg); }
    data(msg, index = 3) { this.logger.data(msg); }
    debug(msg, index = 3) { this.logger.debug(msg); }
    error(msg, index = 3) { this.logger.error(msg); }
    help(msg, index = 3) { this.logger.help(msg); }
    input(msg, index = 3) { this.logger.input(msg); }
    info(msg, index = 3) { this.logger.info(msg); }
    log(level, msg, index = 3) { this.logger.log(level, msg); }
    notice(msg, index = 3) { this.logger.notice(msg); }
    sql(msg, index = 3) { this.debug(msg, index); }
    prompt(msg, index = 3) { this.logger.prompt(msg); }
    silly(msg, index = 3) { this.logger.silly(msg); }
    verbose(msg, index = 3) { this.logger.verbose(msg); }
    warn(msg, index = 3) { this.logger.warn(msg); }
    warning(msg, index = 3) { this.logger.warning(msg); }
};
LoggerSrv = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], LoggerSrv);
exports.default = LoggerSrv;


/***/ }),

/***/ "./src/server/services/system/Setting.service.ts":
/*!*******************************************************!*\
  !*** ./src/server/services/system/Setting.service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const node_opcua_1 = __webpack_require__(/*! node-opcua */ "node-opcua");
const typedi_1 = __webpack_require__(/*! typedi */ "typedi");
const _1 = __webpack_require__(/*! . */ "./src/server/services/system/index.ts");
let SettingSrv = class SettingSrv {
    constructor(logger) {
        this.logger = logger;
        this.defaultAttributeIds = [
            node_opcua_1.AttributeIds.NodeId,
            node_opcua_1.AttributeIds.NodeClass,
            node_opcua_1.AttributeIds.BrowseName,
            node_opcua_1.AttributeIds.DisplayName,
            node_opcua_1.AttributeIds.Description,
            node_opcua_1.AttributeIds.WriteMask,
            node_opcua_1.AttributeIds.UserWriteMask,
            node_opcua_1.AttributeIds.EventNotifier,
            node_opcua_1.AttributeIds.Value
        ];
        this.defaultSubscriptionOpts = {
            requestedPublishingInterval: 200,
            requestedMaxKeepAliveCount: 1000 * 60 * 10,
            requestedLifetimeCount: 60,
            maxNotificationsPerPublish: 100,
            publishingEnabled: true,
            priority: 10,
        };
        this.defaultOPCUAClientOpts = {
            connectionStrategy: {
                maxRetry: 5,
                initialDelay: 2000,
                maxDelay: 3000,
            },
            endpoint_must_exist: false,
            keepSessionAlive: true,
        };
        this.logger.info("created SettingSrv");
        this.settings = this.loadSettingFile();
    }
    init() {
        return Promise.resolve();
    }
    /**
     * Create a `uid`
     *
     * @param { Number } len
     * @return { String } uid
     */
    uid(len) {
        // create uuid
        len = len || 7;
        return Math.random().toString(35).substr(2, len);
    }
    loadSettingFile() {
        const config = __webpack_require__(/*! ../../config/config.json */ "./src/server/config/config.json");
        return config;
    }
    getPort() {
        return this.settings["port"];
    }
    getTestEndpoint() {
        return this.settings.testEndpointUrl;
    }
    getSystemDbName() {
        return this.settings.sqlite;
    }
    get CertifivateFilePath() {
        return this.settings.certificateFilePath;
    }
    set CertifivateFilePath(v) {
        throw Error("not implemented");
    }
    getSettings() {
        return this.settings;
    }
};
SettingSrv = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [_1.LoggerSrv])
], SettingSrv);
exports.default = SettingSrv;


/***/ }),

/***/ "./src/server/services/system/SocketManager.service.ts":
/*!*************************************************************!*\
  !*** ./src/server/services/system/SocketManager.service.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const typedi_1 = __webpack_require__(/*! typedi */ "typedi");
const _1 = __webpack_require__(/*! . */ "./src/server/services/system/index.ts");
let SocketManagerSrv = class SocketManagerSrv {
    constructor(logger) {
        this.logger = logger;
        this.sockets = {};
        this.logger.info("created SocketMangerSrv");
    }
    init() {
        return Promise.resolve();
    }
    addSocket(socket) {
        const { id } = socket;
        this.sockets[id] = socket;
        this.logger.info(`registerd ${id}`);
    }
    delSocket(id) {
        this.logger.info(`unregisterd ${id}`);
        delete this.sockets[id];
    }
    getSocket(id) {
        return this.sockets[id];
    }
    isExistSocket(id) {
        return !!this.sockets[id];
    }
    getAll() {
        return this.sockets;
    }
    emitAll(event, message) {
        for (const id in this.sockets) {
            const socket = this.sockets[id];
            socket.emit(event, message);
        }
    }
};
SocketManagerSrv = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [_1.LoggerSrv])
], SocketManagerSrv);
exports.default = SocketManagerSrv;


/***/ }),

/***/ "./src/server/services/system/Storage.service.ts":
/*!*******************************************************!*\
  !*** ./src/server/services/system/Storage.service.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
    sqlite3 node libraries
    ref: https://db-migrate.readthedocs.io/en/latest/API/SQL/#migrations-api-sql
*/
const driver = __webpack_require__(/*! db-migrate-sqlite3 */ "db-migrate-sqlite3");
const { dataType } = __webpack_require__(/*! db-migrate-shared */ "db-migrate-shared");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const typedi_1 = __webpack_require__(/*! typedi */ "typedi");
const _1 = __webpack_require__(/*! . */ "./src/server/services/system/index.ts");
const events_1 = __webpack_require__(/*! events */ "events");
let StorageSrv = class StorageSrv extends events_1.EventEmitter {
    constructor(logger, settingSrv) {
        super();
        this.logger = logger;
        this.settingSrv = settingSrv;
        this.logger.info("created StorageSrv");
        this.dbname = this.settingSrv.getSystemDbName();
    }
    init() {
        return new Promise((resolve, reject) => {
            this.connect(this.dbname).then((db) => {
                this.db = db;
                this.logger.info(`Connected to the ${this.dbname} database.`);
                resolve();
            }, (error) => {
                reject(error);
            });
        });
    }
    connect(dbname) {
        this.logger.info(`try load sqlite : ${dbname}`);
        this.logger['sql'] = this.sqlLogger.bind(this);
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
            };
            driver.connect({ driver: "sqlite3", filename: this.dbname }, internals, (err, db) => {
                if (err) {
                    reject(err);
                }
                else {
                    db.all("PRAGMA foreign_keys=ON");
                    resolve(db);
                }
            });
        });
    }
    sqlLogger() {
        // this.logger.debug(arguments[0], { meta: { __filename, __function: (global as any).__function, __line: (global as any).__line } } );
    }
};
StorageSrv = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [_1.LoggerSrv,
        _1.SettingSrv])
], StorageSrv);
exports.default = StorageSrv;


/***/ }),

/***/ "./src/server/services/system/StorageMigration.service.ts":
/*!****************************************************************!*\
  !*** ./src/server/services/system/StorageMigration.service.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const typedi_1 = __webpack_require__(/*! typedi */ "typedi");
const events_1 = __webpack_require__(/*! events */ "events");
const Migration_log_repository_1 = __importDefault(__webpack_require__(/*! ./repositories/Migration_log.repository */ "./src/server/services/system/repositories/Migration_log.repository.ts"));
const Storage_service_1 = __importDefault(__webpack_require__(/*! ./Storage.service */ "./src/server/services/system/Storage.service.ts"));
const _1 = __webpack_require__(/*! . */ "./src/server/services/system/index.ts");
let StorageMigrationSrv = class StorageMigrationSrv extends events_1.EventEmitter {
    constructor(logger, storageSrv, 
    /* sqlite3 table reposiotries */
    migrationLogRepository) {
        super();
        this.logger = logger;
        this.storageSrv = storageSrv;
        this.migrationLogRepository = migrationLogRepository;
        this.migrations = [];
        this.logger.info("created StorageMigrationSrv");
    }
    init() {
        let migrationLogs = {};
        return this.migrationLogRepository.getMigrationLog().then((logs) => {
            for (const log of logs) {
                if (log.success) {
                    migrationLogs[log.migration_id] = log;
                }
            }
            return migrationLogs;
        }).then((migrationLogs) => {
            this.addMigrations();
            this.dbMigration(migrationLogs);
        });
    }
    addMigration(migration_id, action, args) {
        this.migrations.push({ migration_id, action, args });
    }
    addMigrations() {
        const arr = [
            this.migrationLogRepository.migrations(),
        ];
        for (const migration of arr) {
            this.migrations = this.migrations.concat(migration);
        }
    }
    dbMigration(migrationLogs) {
        for (const { migration_id, action, args } of this.migrations) {
            if (!migrationLogs[migration_id]) {
                this.logger.info(`execute ${migration_id}`);
                /* change callback function */
                const callback = args[args.length - 1];
                args[args.length - 1] = (...params) => {
                    const [err] = params;
                    const success = !err ? true : false;
                    /* double quatation이 들어간 경우 오류 발생 */
                    const error = err ? err.message.replace(/\"/gi, "'") : "";
                    const arg = JSON.stringify(args.slice(0, args.length - 1)).replace(/\"/gi, "'");
                    /* write migration_log */
                    this.storageSrv.db["insert"]("migration_log", ["migration_id", "action", "success", "error", "params",], [migration_id, action, success, error, arg], (err) => {
                        if (err) {
                            this.logger.error(err);
                        }
                    });
                    callback.apply(this.storageSrv.db, params);
                };
                try {
                    this.storageSrv.db[action].apply(this.storageSrv.db, args);
                }
                catch (err) {
                    this.logger.error(err);
                }
            }
        }
    }
};
StorageMigrationSrv = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [_1.LoggerSrv,
        Storage_service_1.default,
        Migration_log_repository_1.default])
], StorageMigrationSrv);
exports.default = StorageMigrationSrv;


/***/ }),

/***/ "./src/server/services/system/index.ts":
/*!*********************************************!*\
  !*** ./src/server/services/system/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_service_1 = __importDefault(__webpack_require__(/*! ./Logger.service */ "./src/server/services/system/Logger.service.ts"));
exports.LoggerSrv = Logger_service_1.default;
const Setting_service_1 = __importDefault(__webpack_require__(/*! ./Setting.service */ "./src/server/services/system/Setting.service.ts"));
exports.SettingSrv = Setting_service_1.default;
const SocketManager_service_1 = __importDefault(__webpack_require__(/*! ./SocketManager.service */ "./src/server/services/system/SocketManager.service.ts"));
exports.SocketManagerSrv = SocketManager_service_1.default;
const Storage_service_1 = __importDefault(__webpack_require__(/*! ./Storage.service */ "./src/server/services/system/Storage.service.ts"));
exports.StorageSrv = Storage_service_1.default;


/***/ }),

/***/ "./src/server/services/system/repositories/Migration_log.repository.ts":
/*!*****************************************************************************!*\
  !*** ./src/server/services/system/repositories/Migration_log.repository.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const typedi_1 = __webpack_require__(/*! typedi */ "typedi");
const Storage_service_1 = __importDefault(__webpack_require__(/*! ../Storage.service */ "./src/server/services/system/Storage.service.ts"));
const __1 = __webpack_require__(/*! .. */ "./src/server/services/system/index.ts");
const { dataType } = __webpack_require__(/*! db-migrate-shared */ "db-migrate-shared");
let Migration_logRepository = class Migration_logRepository {
    constructor(logger, storageSrv) {
        this.logger = logger;
        this.storageSrv = storageSrv;
        this.tableName = "migration_log";
        this.logger.info("created Migration_logRepository");
    }
    init() {
        return Promise.resolve();
    }
    /* ref: https://db-migrate.readthedocs.io/en/latest/API/SQL/#migrations-api-sql */
    migrations() {
        return [{
                migration_id: "create table migration_log", action: "createTable", args: [this.tableName, {
                        id: { type: dataType.INTEGER, primaryKey: true, autoIncrement: true, notNull: true },
                        migration_id: { type: dataType.STRING, length: 255, },
                        action: { type: dataType.STRING, notNull: true, length: 20, },
                        params: { type: dataType.TEXT, notNull: true, defaultValue: "", },
                        success: { type: dataType.BOOLEAN, notNull: true, },
                        error: { type: dataType.TEXT, defaultValue: "", },
                        timestamp: { type: dataType.DATE_TIME, defaultValue: new String('CURRENT_TIMESTAMP'), },
                    },
                    (err) => {
                        if (err) {
                            this.logger.error(err);
                        }
                    }],
            },
        ];
    }
    getMigrationLog() {
        return new Promise((resolve, reject) => {
            this.storageSrv.db["all"]("select * from migration_log", (err, logs) => {
                if (err) {
                    resolve([]);
                }
                else {
                    resolve(logs);
                }
            });
        });
    }
};
Migration_logRepository = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [__1.LoggerSrv,
        Storage_service_1.default])
], Migration_logRepository);
exports.default = Migration_logRepository;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "db-migrate-shared":
/*!************************************!*\
  !*** external "db-migrate-shared" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("db-migrate-shared");

/***/ }),

/***/ "db-migrate-sqlite3":
/*!*************************************!*\
  !*** external "db-migrate-sqlite3" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("db-migrate-sqlite3");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "figlet":
/*!*************************!*\
  !*** external "figlet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("figlet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "node-opcua":
/*!*****************************!*\
  !*** external "node-opcua" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-opcua");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "routing-controllers":
/*!**************************************!*\
  !*** external "routing-controllers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("routing-controllers");

/***/ }),

/***/ "socket-controllers":
/*!*************************************!*\
  !*** external "socket-controllers" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket-controllers");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "typedi":
/*!*************************!*\
  !*** external "typedi" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typedi");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map