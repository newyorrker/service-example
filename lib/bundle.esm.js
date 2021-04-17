import inversify from 'inversify';
import express from 'express';
import 'reflect-metadata';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var types = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES = void 0;
const TYPES = {
    ApiService: Symbol.for("ApiService"),
    AnotherService: Symbol.for("AnotherService")
};
exports.TYPES = TYPES;

});

var ApiService_1 = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (commonjsGlobal && commonjsGlobal.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const express_1 = __importDefault(express);



let ApiService = class ApiService {
    constructor(anotherService) {
        this._anotherService = anotherService;
        this.app = express_1.default();
        this.SetRoutes();
    }
    Listen() {
        this.app.listen(3003, () => {
            const computed = this._anotherService.Compute(5, 6);
            console.log(`Example app listening on port 3000! and computed = ${computed}`);
        });
    }
    SetRoutes() {
        this.app.get('/', (req, res) => {
            const computed = this._anotherService.Compute(5, 6);
            res.send(`Hello World! and computed = ${computed}`);
        });
    }
};
ApiService = __decorate([
    inversify.injectable(),
    __param(0, inversify.inject(types.TYPES.AnotherService))
], ApiService);
exports.ApiService = ApiService;

});

var AnotherService_1 = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnotherService = void 0;

let AnotherService = class AnotherService {
    Compute(a, b) {
        return a + b;
    }
};
AnotherService = __decorate([
    inversify.injectable()
], AnotherService);
exports.AnotherService = AnotherService;

});

var inversifyConfig = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.myContainer = void 0;




const myContainer = new inversify.Container();
exports.myContainer = myContainer;
myContainer.bind(types.TYPES.ApiService).to(ApiService_1.ApiService);
myContainer.bind(types.TYPES.AnotherService).to(AnotherService_1.AnotherService);

});

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


const api = inversifyConfig.myContainer.get(types.TYPES.ApiService);
api.Listen();

});

export default dist;
