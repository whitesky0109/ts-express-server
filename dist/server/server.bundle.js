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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./server/index.ts");

var serv = new _server__WEBPACK_IMPORTED_MODULE_0__["default"](process.env.PORT);
serv.runServ();


/***/ }),

/***/ "./server/config/config.json":
/*!***********************************!*\
  !*** ./server/config/config.json ***!
  \***********************************/
/*! exports provided: port, sqlite, default */
/***/ (function(module) {

module.exports = {"port":4000,"sqlite":"database.db","default":{"destinations":[{"receiver":"websocket","info":{}}]}};

/***/ }),

/***/ "./server/controllers/index.ts":
/*!*************************************!*\
  !*** ./server/controllers/index.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rest_RootController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest/RootController */ "./server/controllers/rest/RootController.ts");
/* harmony import */ var _websocket_WsMessageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket/WsMessageController */ "./server/controllers/websocket/WsMessageController.ts");




/***/ }),

/***/ "./server/controllers/rest/RootController.ts":
/*!***************************************************!*\
  !*** ./server/controllers/rest/RootController.ts ***!
  \***************************************************/
/*! exports provided: RootController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootController", function() { return RootController; });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var routing_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! routing-controllers */ "routing-controllers");
/* harmony import */ var routing_controllers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(routing_controllers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./server/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RootController = /** @class */ (function () {
    function RootController(loggerSrv) {
        this.loggerSrv = loggerSrv;
        this.loggerSrv.info('created RootController');
    }
    RootController.prototype.helloServer = function () {
    };
    RootController.prototype.getApi = function () {
        return [
            { hello: 'Hello Node.js Express Server' },
        ];
    };
    __decorate([
        Object(routing_controllers__WEBPACK_IMPORTED_MODULE_1__["Get"])('/'),
        Object(routing_controllers__WEBPACK_IMPORTED_MODULE_1__["Render"])('index.html'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "helloServer", null);
    __decorate([
        Object(routing_controllers__WEBPACK_IMPORTED_MODULE_1__["Get"])('/api'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getApi", null);
    RootController = __decorate([
        Object(routing_controllers__WEBPACK_IMPORTED_MODULE_1__["Controller"])(''),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])
    ], RootController);
    return RootController;
}());



/***/ }),

/***/ "./server/controllers/websocket/WsMessageController.ts":
/*!*************************************************************!*\
  !*** ./server/controllers/websocket/WsMessageController.ts ***!
  \*************************************************************/
/*! exports provided: WsMessageController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WsMessageController", function() { return WsMessageController; });
/* harmony import */ var socket_controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket-controllers */ "socket-controllers");
/* harmony import */ var socket_controllers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_controllers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./server/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var WsMessageController = /** @class */ (function () {
    function WsMessageController(sockMgrSrv, loggerSrv) {
        this.sockMgrSrv = sockMgrSrv;
        this.loggerSrv = loggerSrv;
        this.loggerSrv.info('created WsMessageController');
    }
    WsMessageController.prototype.connection = function (socket) {
        this.sockMgrSrv.addSocket(socket);
        this.loggerSrv.info('client connected');
    };
    WsMessageController.prototype.disconnect = function (socket) {
        var id = socket.id;
        this.sockMgrSrv.delSocket(id);
    };
    __decorate([
        Object(socket_controllers__WEBPACK_IMPORTED_MODULE_0__["OnConnect"])(),
        __param(0, Object(socket_controllers__WEBPACK_IMPORTED_MODULE_0__["ConnectedSocket"])()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WsMessageController.prototype, "connection", null);
    __decorate([
        Object(socket_controllers__WEBPACK_IMPORTED_MODULE_0__["OnDisconnect"])(),
        __param(0, Object(socket_controllers__WEBPACK_IMPORTED_MODULE_0__["ConnectedSocket"])()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WsMessageController.prototype, "disconnect", null);
    WsMessageController = __decorate([
        Object(socket_controllers__WEBPACK_IMPORTED_MODULE_0__["SocketController"])('/ws'),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["SocketManagerService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]])
    ], WsMessageController);
    return WsMessageController;
}());



/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var routing_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! routing-controllers */ "routing-controllers");
/* harmony import */ var routing_controllers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(routing_controllers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket-controllers */ "socket-controllers");
/* harmony import */ var socket_controllers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_controllers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typedi */ "typedi");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers */ "./server/controllers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "./server/services/index.ts");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_system_StorageMigration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/system/StorageMigration.service */ "./server/services/system/StorageMigration.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var morgan = __webpack_require__(/*! morgan */ "morgan");
var figlet = __webpack_require__(/*! figlet */ "figlet");
var cors = __webpack_require__(/*! cors */ "cors");
var path = __webpack_require__(/*! path */ "path");
var open = __webpack_require__(/*! open */ "open");




var MainServer = /** @class */ (function (_super) {
    __extends(MainServer, _super);
    function MainServer(port) {
        var _this = this;
        var rootPath = path.join('dist', 'public');
        _this = _super.call(this) || this;
        /* setter */
        Object(routing_controllers__WEBPACK_IMPORTED_MODULE_1__["useContainer"])(typedi__WEBPACK_IMPORTED_MODULE_3__["Container"]);
        Object(socket_controllers__WEBPACK_IMPORTED_MODULE_2__["useContainer"])(typedi__WEBPACK_IMPORTED_MODULE_3__["Container"]);
        /* create Server */
        _this.app = express__WEBPACK_IMPORTED_MODULE_5___default()();
        _this.app.use(cors());
        /* set Html View Render */
        _this.app.engine('html', __webpack_require__(/*! ejs */ "ejs").renderFile);
        _this.app.set('views', path.join(rootPath));
        _this.app.set('view engine', 'html');
        Object(routing_controllers__WEBPACK_IMPORTED_MODULE_1__["useExpressServer"])(_this.app);
        _this.server = http__WEBPACK_IMPORTED_MODULE_4___default.a.createServer(_this.app);
        _this.app.use('/public', express__WEBPACK_IMPORTED_MODULE_5___default.a.static(rootPath));
        /* create websocket listener */
        _this.io = socket_io__WEBPACK_IMPORTED_MODULE_6___default()(_this.server);
        _this.io.use(function (socket, next) {
            console.log('Custom middleware');
            next();
        });
        console.log(__dirname);
        Object(socket_controllers__WEBPACK_IMPORTED_MODULE_2__["useSocketServer"])(_this.io, {
            controllers: [path.join(__dirname, 'controllers', 'websocket', '*.js')],
        });
        /* create System Logger */
        var loggerSrv = typedi__WEBPACK_IMPORTED_MODULE_3__["Container"].get(_services__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]);
        loggerSrv.info("\n" + figlet.textSync('Sample'));
        /* register logger Service */
        _this.app.use(morgan('combined', { stream: loggerSrv }));
        /* register service instance */
        _this.addServices();
        _this.port = port ? parseInt(port, 10) : typedi__WEBPACK_IMPORTED_MODULE_3__["Container"].get(_services__WEBPACK_IMPORTED_MODULE_8__["SettingService"]).getPort();
        return _this;
    }
    MainServer.prototype.addMiddleware = function (middleware) {
        this.app.use(middleware);
    };
    MainServer.prototype.addServices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var etcInstances, loggerSrv, _i, etcInstances_1, _a, name_1, instance, registerServices, _b, registerServices_1, service, instance, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        etcInstances = [
                            { name: 'socketIO', instance: this.io },
                        ];
                        loggerSrv = typedi__WEBPACK_IMPORTED_MODULE_3__["Container"].get(_services__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]);
                        for (_i = 0, etcInstances_1 = etcInstances; _i < etcInstances_1.length; _i++) {
                            _a = etcInstances_1[_i], name_1 = _a.name, instance = _a.instance;
                            typedi__WEBPACK_IMPORTED_MODULE_3__["Container"].set(name_1, instance);
                            loggerSrv.info("[init] DI Registered " + name_1);
                        }
                        registerServices = [
                            /* System Services */
                            _services__WEBPACK_IMPORTED_MODULE_8__["SettingService"],
                            _services__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
                            _services_system_StorageMigration_service__WEBPACK_IMPORTED_MODULE_10__["default"],
                            _services__WEBPACK_IMPORTED_MODULE_8__["SocketManagerService"],
                        ];
                        _b = 0, registerServices_1 = registerServices;
                        _c.label = 1;
                    case 1:
                        if (!(_b < registerServices_1.length)) return [3 /*break*/, 6];
                        service = registerServices_1[_b];
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 5]);
                        instance = typedi__WEBPACK_IMPORTED_MODULE_3__["Container"].get(service);
                        return [4 /*yield*/, instance.init()];
                    case 3:
                        _c.sent();
                        loggerSrv.info("[Serivce Initialize] DI Registered " + service.name);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _c.sent();
                        console.log(e_1.stack);
                        loggerSrv.error(e_1);
                        return [3 /*break*/, 5];
                    case 5:
                        _b++;
                        return [3 /*break*/, 1];
                    case 6:
                        this.emit('ready');
                        return [2 /*return*/];
                }
            });
        });
    };
    MainServer.prototype.getApp = function () {
        return this.app;
    };
    MainServer.prototype.runServ = function () {
        var _this = this;
        var loggerSrv = typedi__WEBPACK_IMPORTED_MODULE_3__["Container"].get(_services__WEBPACK_IMPORTED_MODULE_8__["LoggerService"]);
        return new Promise(function (resolve) {
            _this.once('ready', function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            resolve(this.server.listen(this.port, function () {
                                return loggerSrv.info("listening on port " + _this.port);
                            }));
                            return [4 /*yield*/, open('http://localhost:4000')];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    return MainServer;
}(events__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]));
/* harmony default export */ __webpack_exports__["default"] = (MainServer);

/* WEBPACK VAR INJECTION */}.call(this, "server"))

/***/ }),

/***/ "./server/services/index.ts":
/*!**********************************!*\
  !*** ./server/services/index.ts ***!
  \**********************************/
/*! exports provided: StorageService, SocketManagerService, SettingService, LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system */ "./server/services/system/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return _system__WEBPACK_IMPORTED_MODULE_1__["StorageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketManagerService", function() { return _system__WEBPACK_IMPORTED_MODULE_1__["SocketManagerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return _system__WEBPACK_IMPORTED_MODULE_1__["SettingService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _system__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]; });


// System Services




/***/ }),

/***/ "./server/services/system/Logger.service.ts":
/*!**************************************************!*\
  !*** ./server/services/system/Logger.service.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typedi */ "typedi");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggerService = /** @class */ (function () {
    function LoggerService() {
        this.logger = Object(winston__WEBPACK_IMPORTED_MODULE_1__["createLogger"])({
            // level: 'info',
            format: winston__WEBPACK_IMPORTED_MODULE_1__["format"].combine(winston__WEBPACK_IMPORTED_MODULE_1__["format"].timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), Object(winston__WEBPACK_IMPORTED_MODULE_1__["format"])(function (info) {
                if (info.level === 'error') {
                    return Object.assign({}, info, {
                        message: info.timestamp + " " + info.stack,
                    });
                }
                return info;
            })(), winston__WEBPACK_IMPORTED_MODULE_1__["format"].printf(function (_a) {
                var timestamp = _a.timestamp, level = _a.level, message = _a.message, meta = _a.meta;
                return (meta)
                    ? timestamp + " " + level + " [" + meta.filename + ":" + meta.line + "]: " + message
                    : timestamp + " " + level + " " + message;
            })),
            transports: [
                new winston__WEBPACK_IMPORTED_MODULE_1__["transports"].Console({ level: 'debug', handleExceptions: true }),
                new winston__WEBPACK_IMPORTED_MODULE_1__["transports"].File({ filename: 'error.log', level: 'error' }),
                new winston__WEBPACK_IMPORTED_MODULE_1__["transports"].File({ filename: 'system.log' }),
            ],
            exitOnError: false,
        });
    }
    LoggerService.prototype.init = function () {
        this.logger.info('created LoggerSrv');
    };
    LoggerService.prototype.write = function (message, encoding) { this.logger.info(message); };
    LoggerService.prototype.alert = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.alert(msg);
    };
    LoggerService.prototype.crit = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.crit(msg);
    };
    LoggerService.prototype.data = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.data(msg);
    };
    LoggerService.prototype.debug = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.debug(msg);
    };
    LoggerService.prototype.error = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.error(msg);
    };
    LoggerService.prototype.help = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.help(msg);
    };
    LoggerService.prototype.input = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.input(msg);
    };
    LoggerService.prototype.info = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.info(msg);
    };
    LoggerService.prototype.log = function (level, msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.log(level, msg);
    };
    LoggerService.prototype.notice = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.notice(msg);
    };
    LoggerService.prototype.sql = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.debug(msg, index);
    };
    LoggerService.prototype.prompt = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.prompt(msg);
    };
    LoggerService.prototype.silly = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.silly(msg);
    };
    LoggerService.prototype.verbose = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.verbose(msg);
    };
    LoggerService.prototype.warn = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.warn(msg);
    };
    LoggerService.prototype.warning = function (msg, index) {
        if (index === void 0) { index = 3; }
        this.logger.warning(msg);
    };
    LoggerService = __decorate([
        Object(typedi__WEBPACK_IMPORTED_MODULE_2__["Service"])(),
        __metadata("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());
/* harmony default export */ __webpack_exports__["default"] = (LoggerService);


/***/ }),

/***/ "./server/services/system/Setting.service.ts":
/*!***************************************************!*\
  !*** ./server/services/system/Setting.service.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedi */ "typedi");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./server/services/system/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingService = /** @class */ (function () {
    function SettingService(logger) {
        this.logger = logger;
        this.logger.info('created SettingSrv');
        this.settings = this.loadSettingFile();
    }
    SettingService.prototype.init = function () {
        return Promise.resolve();
    };
    /**
     * Create a `uid`
     *
     * @param { Number } len
     * @return { String } uid
     */
    SettingService.prototype.uid = function (len) {
        // create uuid
        len = len || 7;
        return Math.random().toString(35).substr(2, len);
    };
    SettingService.prototype.loadSettingFile = function () {
        var config = __webpack_require__(/*! ../../config/config.json */ "./server/config/config.json");
        return config;
    };
    SettingService.prototype.getPort = function () {
        return this.settings['port'];
    };
    SettingService.prototype.getSystemDbName = function () {
        return this.settings.sqlite;
    };
    SettingService.prototype.getSettings = function () {
        return this.settings;
    };
    SettingService = __decorate([
        Object(typedi__WEBPACK_IMPORTED_MODULE_1__["Service"])(),
        __metadata("design:paramtypes", [___WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])
    ], SettingService);
    return SettingService;
}());
/* harmony default export */ __webpack_exports__["default"] = (SettingService);


/***/ }),

/***/ "./server/services/system/SocketManager.service.ts":
/*!*********************************************************!*\
  !*** ./server/services/system/SocketManager.service.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedi */ "typedi");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./server/services/system/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketManagerService = /** @class */ (function () {
    function SocketManagerService(logger) {
        this.logger = logger;
        this.sockets = {};
        this.logger.info('created SocketMangerSrv');
    }
    SocketManagerService.prototype.init = function () {
        return Promise.resolve();
    };
    SocketManagerService.prototype.addSocket = function (socket) {
        var id = socket.id;
        this.sockets[id] = socket;
        this.logger.info("registerd " + id);
    };
    SocketManagerService.prototype.delSocket = function (id) {
        this.logger.info("unregisterd " + id);
        delete this.sockets[id];
    };
    SocketManagerService.prototype.getSocket = function (id) {
        return this.sockets[id];
    };
    SocketManagerService.prototype.isExistSocket = function (id) {
        return !!this.sockets[id];
    };
    SocketManagerService.prototype.getAll = function () {
        return this.sockets;
    };
    SocketManagerService.prototype.emitAll = function (event, message) {
        for (var id in this.sockets) {
            var socket = this.sockets[id];
            socket.emit(event, message);
        }
    };
    SocketManagerService = __decorate([
        Object(typedi__WEBPACK_IMPORTED_MODULE_1__["Service"])(),
        __metadata("design:paramtypes", [___WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])
    ], SocketManagerService);
    return SocketManagerService;
}());
/* harmony default export */ __webpack_exports__["default"] = (SocketManagerService);


/***/ }),

/***/ "./server/services/system/Storage.service.ts":
/*!***************************************************!*\
  !*** ./server/services/system/Storage.service.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedi */ "typedi");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./server/services/system/index.ts");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
    sqlite3 node libraries
    ref: https://db-migrate.readthedocs.io/en/latest/API/SQL/#migrations-api-sql
*/
var driver = __webpack_require__(/*! db-migrate-sqlite3 */ "db-migrate-sqlite3");
var dataType = __webpack_require__(/*! db-migrate-shared */ "db-migrate-shared").dataType;




var StorageService = /** @class */ (function (_super) {
    __extends(StorageService, _super);
    function StorageService(logger, settingSrv) {
        var _this = _super.call(this) || this;
        _this.logger = logger;
        _this.settingSrv = settingSrv;
        _this.logger.info('created StorageSrv');
        _this.dbname = _this.settingSrv.getSystemDbName();
        return _this;
    }
    StorageService.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connect(_this.dbname).then(function (db) {
                _this.db = db;
                _this.logger.info("Connected to the " + _this.dbname + " database.");
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    StorageService.prototype.connect = function (dbname) {
        var _this = this;
        this.logger.info("try load sqlite : " + dbname);
        this.logger['sql'] = this.sqlLogger.bind(this);
        return new Promise(function (resolve, reject) {
            /* if not exist then create database file */
            var internals = {
                mod: {
                    log: _this.logger,
                    type: dataType,
                },
                interfaces: {
                    SeederInterface: {},
                    MigratorInterfrace: {},
                },
            };
            var val = { driver: 'sqlite3', filename: _this.dbname };
            driver.connect(val, internals, function (err, db) {
                if (err) {
                    reject(err);
                }
                else {
                    db.all('PRAGMA foreign_keys=ON');
                    resolve(db);
                }
            });
        });
    };
    StorageService.prototype.sqlLogger = function () {
        /*
        this.logger.debug(arguments[0], {
          meta: {
            __filename,
            __function: (global as any).__function,
            __line: (global as any).__line,
          },
        });
        */
    };
    StorageService = __decorate([
        Object(typedi__WEBPACK_IMPORTED_MODULE_1__["Service"])(),
        __metadata("design:paramtypes", [___WEBPACK_IMPORTED_MODULE_2__["LoggerService"],
            ___WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], StorageService);
    return StorageService;
}(events__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]));
/* harmony default export */ __webpack_exports__["default"] = (StorageService);


/***/ }),

/***/ "./server/services/system/StorageMigration.service.ts":
/*!************************************************************!*\
  !*** ./server/services/system/StorageMigration.service.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedi */ "typedi");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _repositories_migrationLog_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repositories/migrationLog.repository */ "./server/services/system/repositories/migrationLog.repository.ts");
/* harmony import */ var _Storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Storage.service */ "./server/services/system/Storage.service.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "./server/services/system/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StorageMigrationService = /** @class */ (function (_super) {
    __extends(StorageMigrationService, _super);
    function StorageMigrationService(logger, storageSrv, 
    /* sqlite3 table reposiotries */
    migrationLogRepository) {
        var _this = _super.call(this) || this;
        _this.logger = logger;
        _this.storageSrv = storageSrv;
        _this.migrationLogRepository = migrationLogRepository;
        _this.migrations = [];
        _this.logger.info('created StorageMigrationSrv');
        return _this;
    }
    StorageMigrationService.prototype.init = function () {
        var _this = this;
        var migrationLogs = {};
        return this.migrationLogRepository.getMigrationLog().then(function (logs) {
            for (var _i = 0, logs_1 = logs; _i < logs_1.length; _i++) {
                var log = logs_1[_i];
                if (log.success) {
                    migrationLogs[log.migration_id] = log;
                }
            }
            return migrationLogs;
        }).then(function (migrationLogs) {
            _this.addMigrations();
            _this.dbMigration(migrationLogs);
        });
    };
    // tslint:disable-next-line: variable-name
    StorageMigrationService.prototype.addMigration = function (migration_id, action, args) {
        this.migrations.push({ migration_id: migration_id, action: action, args: args });
    };
    StorageMigrationService.prototype.addMigrations = function () {
        var arr = [
            this.migrationLogRepository.migrations(),
        ];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var migration = arr_1[_i];
            this.migrations = this.migrations.concat(migration);
        }
    };
    StorageMigrationService.prototype.dbMigration = function (migrationLogs) {
        var _this = this;
        var _loop_1 = function (migration_id, action, args) {
            if (!migrationLogs[migration_id]) {
                this_1.logger.info("execute " + migration_id);
                /* change callback function */
                var callback_1 = args[args.length - 1];
                args[args.length - 1] = function () {
                    var params = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        params[_i] = arguments[_i];
                    }
                    var err = params[0];
                    var success = !err ? true : false;
                    /* double quatation이 들어간 경우 오류 발생 */
                    var error = err ? err.message.replace(/\"/gi, "'") : '';
                    var arg = JSON.stringify(args.slice(0, args.length - 1)).replace(/\"/gi, "'");
                    /* write migration_log */
                    _this.storageSrv.db['insert']('migration_log', ['migration_id', 'action', 'success', 'error', 'params'], [migration_id, action, success, error, arg], function (err) {
                        if (err) {
                            _this.logger.error(err);
                        }
                    });
                    callback_1.apply(_this.storageSrv.db, params);
                };
                try {
                    this_1.storageSrv.db[action].apply(this_1.storageSrv.db, args);
                }
                catch (err) {
                    this_1.logger.error(err);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.migrations; _i < _a.length; _i++) {
            var _b = _a[_i], migration_id = _b.migration_id, action = _b.action, args = _b.args;
            _loop_1(migration_id, action, args);
        }
    };
    StorageMigrationService = __decorate([
        Object(typedi__WEBPACK_IMPORTED_MODULE_1__["Service"])(),
        __metadata("design:paramtypes", [___WEBPACK_IMPORTED_MODULE_5__["LoggerService"],
            _Storage_service__WEBPACK_IMPORTED_MODULE_4__["default"],
            _repositories_migrationLog_repository__WEBPACK_IMPORTED_MODULE_3__["default"]])
    ], StorageMigrationService);
    return StorageMigrationService;
}(events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]));
/* harmony default export */ __webpack_exports__["default"] = (StorageMigrationService);


/***/ }),

/***/ "./server/services/system/index.ts":
/*!*****************************************!*\
  !*** ./server/services/system/index.ts ***!
  \*****************************************/
/*! exports provided: LoggerService, SettingService, SocketManagerService, StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger.service */ "./server/services/system/Logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _Logger_service__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Setting.service */ "./server/services/system/Setting.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return _Setting_service__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SocketManager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocketManager.service */ "./server/services/system/SocketManager.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketManagerService", function() { return _SocketManager_service__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage.service */ "./server/services/system/Storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return _Storage_service__WEBPACK_IMPORTED_MODULE_3__["default"]; });








/***/ }),

/***/ "./server/services/system/repositories/migrationLog.repository.ts":
/*!************************************************************************!*\
  !*** ./server/services/system/repositories/migrationLog.repository.ts ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typedi */ "typedi");
/* harmony import */ var typedi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typedi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Storage.service */ "./server/services/system/Storage.service.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./server/services/system/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var dataType = __webpack_require__(/*! db-migrate-shared */ "db-migrate-shared").dataType;
var MigrationLogRepository = /** @class */ (function () {
    function MigrationLogRepository(logger, storageSrv) {
        this.logger = logger;
        this.storageSrv = storageSrv;
        this.tableName = 'migration_log';
        this.logger.info('created Migration_logRepository');
    }
    MigrationLogRepository.prototype.init = function () {
        return Promise.resolve();
    };
    /* ref: https://db-migrate.readthedocs.io/en/latest/API/SQL/#migrations-api-sql */
    MigrationLogRepository.prototype.migrations = function () {
        var _this = this;
        return [{
                migration_id: 'create table migration_log',
                action: 'createTable',
                args: [this.tableName, {
                        id: { type: dataType.INTEGER,
                            primaryKey: true, autoIncrement: true, notNull: true },
                        migration_id: { type: dataType.STRING, length: 255 },
                        action: { type: dataType.STRING, notNull: true, length: 20 },
                        params: { type: dataType.TEXT, notNull: true, defaultValue: '' },
                        success: { type: dataType.BOOLEAN, notNull: true },
                        error: { type: dataType.TEXT, defaultValue: '' },
                        // tslint:disable-next-line: no-construct
                        timestamp: { type: dataType.DATE_TIME, defaultValue: new String('CURRENT_TIMESTAMP') },
                    },
                    function (err) {
                        if (err) {
                            _this.logger.error(err);
                        }
                    }],
            },
        ];
    };
    MigrationLogRepository.prototype.getMigrationLog = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var db = _this.storageSrv.db;
            db['all']('select * from migration_log', function (err, logs) {
                if (err) {
                    resolve([]);
                }
                else {
                    resolve(logs);
                }
            });
        });
    };
    MigrationLogRepository = __decorate([
        Object(typedi__WEBPACK_IMPORTED_MODULE_1__["Service"])(),
        __metadata("design:paramtypes", [___WEBPACK_IMPORTED_MODULE_3__["LoggerService"],
            _Storage_service__WEBPACK_IMPORTED_MODULE_2__["default"]])
    ], MigrationLogRepository);
    return MigrationLogRepository;
}());
/* harmony default export */ __webpack_exports__["default"] = (MigrationLogRepository);


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

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ejs");

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

/***/ "open":
/*!***********************!*\
  !*** external "open" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("open");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

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
//# sourceMappingURL=server.bundle.js.map