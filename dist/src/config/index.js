"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var path = require('path');
var filePath = path.resolve(__dirname, '../../package.json');
var version = JSON.parse(fs.readFileSync(filePath)).version;
// 当前版本
exports.VERSION = version;
// 用户的根目录
var HOME = process.platform === 'win32' ? 'USERPROFILE' : 'HOME';
// 配置文件目录
exports.RC = HOME + "/.wxmp-app-taro";
//# sourceMappingURL=index.js.map