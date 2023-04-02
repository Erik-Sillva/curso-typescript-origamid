"use strict";
function arredondar(valor) {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString();
    }
}
console.log(arredondar(200.32).toFixed());
console.log(arredondar('203.32').toLowerCase());
//# sourceMappingURL=script.js.map