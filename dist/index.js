"use strict";
function getNthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}
console.log(getNthFib(3));
//# sourceMappingURL=index.js.map