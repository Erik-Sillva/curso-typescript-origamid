"use strict";
const button = document.querySelector('button');
function handleClick(event) {
    if (event.currentTarget instanceof HTMLElement) {
        console.log(event.currentTarget.innerText);
    }
}
button?.addEventListener('click', handleClick);
//# sourceMappingURL=script.js.map