"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(10, 20);
const subtrair = (a, b) => a - b;
subtrair(4, 3);
function normalizar(valor) {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar('  ProduTO  ').toLowerCase());
console.log(normalizar(['  ProduTO  ', '  NOTEbook  ', 'celular']).filter);
//# sourceMappingURL=script.js.map