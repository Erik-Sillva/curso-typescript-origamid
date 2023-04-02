"use strict";
const links = document.querySelectorAll('.link');
function ativarElemento(element) {
    element.style.color = 'red';
    element.style.border = '2px solid blue';
}
links.forEach(link => {
    if (link instanceof HTMLElement) {
        ativarElemento(link);
    }
});
//# sourceMappingURL=script.js.map