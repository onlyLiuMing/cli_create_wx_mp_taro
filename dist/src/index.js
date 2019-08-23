"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var program = require('commander');
var index_1 = require("./config/index");
var actionMap_1 = __importDefault(require("./config/actionMap"));
program.version(index_1.VERSION);
// set program command
Object.keys(actionMap_1.default).forEach(function (actionName) {
    console.log(actionName);
});
// .parse(process.argv)
//# sourceMappingURL=index.js.map