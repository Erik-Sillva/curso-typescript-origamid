"use strict";
const btn = document.querySelector('#btn-mobile');
btn?.addEventListener('pointerdown', (event) => {
    const nav = document.querySelector('#nav');
    const button = event.currentTarget;
    if (button instanceof HTMLElement && nav) {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-label', 'Abrir Menu');
        }
        else {
            button.setAttribute('aria-expanded', 'true');
            button.setAttribute('aria-label', 'Fechar Menu');
        }
        console.log(event);
    }
});
//# sourceMappingURL=script.js.map