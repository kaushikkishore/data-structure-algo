"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const palindrom = (input) => {
    let start = 0;
    let end = input.length - 1;
    while (end >= start) {
        if (input[end] !== input[start]) {
            return false;
        }
        end = end - 1;
        start = start + 1;
    }
    return true;
};
console.log(palindrom("ABCBA"));
console.log(palindrom("ABCBERA"));
console.log(palindrom("AA"));
console.log(palindrom("A"));
console.log(palindrom(""));
//# sourceMappingURL=palindrom.js.map