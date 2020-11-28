"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.open = void 0;
const open = (object, key) => {
    let current = object;
    key.split(".").forEach((subkey) => {
        if (!current)
            return undefined;
        current = current[subkey];
    });
    return current;
};
exports.open = open;
