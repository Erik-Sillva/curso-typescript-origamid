"use strict";
function handle_Click({ currentTarget, pageX, pageY }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML =
            `<h1>
            Mouse Click em X: ${pageX} e em Y: ${pageY}
        </h1>`;
    }
}
document.documentElement.addEventListener('click', handle_Click);
function comparar(tipo, ...numeros) {
    if (tipo === 'menor') {
        return Math.min(...numeros);
    }
    if (tipo === 'maior') {
        return Math.max(...numeros);
    }
}
console.log(comparar('menor', 3, 4, 5, 6, 7, 30, 10, 20, 1));
console.log(comparar('maior', 3, 4, 5, 6, 7, 30, 10, 20, 1));
//# sourceMappingURL=script.js.map