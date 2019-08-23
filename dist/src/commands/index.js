"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 主的流程控制
var applyCommand = function (action) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    require("./" + action).apply(void 0, args);
};
exports.default = applyCommand;
//# sourceMappingURL=index.js.map