"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    if (fastest) {
        blueShirtSpeeds.sort((a, b) => b - a);
    }
    else {
        blueShirtSpeeds.sort((a, b) => a - b);
    }
    let total = 0;
    let i = 0;
    while (redShirtSpeeds.length > i) {
        total += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
        i++;
    }
    return total;
}
tandemBicycle([3, 6, 7, 2, 1], [5, 5, 3, 9, 2], false);
//# sourceMappingURL=tendemBicycle.js.map