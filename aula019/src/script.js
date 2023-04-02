"use strict";
const produto1 = ['Notebook', 2500];
const produto2 = ['Notebook', 2500];
produto2[0].toLowerCase();
produto2[1].toFixed();
if (typeof produto1[0] === 'string') {
    console.log(produto1[0].toLowerCase());
}
const [nome, preco] = produto2;
console.log([nome, preco]);
const getText = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
};
const btnElement = getText('button');
console.log(btnElement);
if (btnElement) {
    btnElement[0].classList;
}
//# sourceMappingURL=script.js.map