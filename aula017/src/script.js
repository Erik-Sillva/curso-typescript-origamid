"use strict";
const form = document.querySelector('#form');
window.UserData = {};
function isUserData(obj) {
    if (obj && typeof obj === 'object' && ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true;
    }
    else {
        return false;
    }
}
function validJSON(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function loadLocalStorage() {
    const localUserData = localStorage.getItem('userData');
    if (localUserData && validJSON(localUserData)) {
        const userData = JSON.parse(localUserData);
        if (isUserData(userData)) {
            const retorno = Object.entries(userData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
            console.log(retorno);
        }
    }
}
loadLocalStorage();
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('userData', JSON.stringify(window.UserData));
    }
}
form?.addEventListener('keyup', handleInput);
//# sourceMappingURL=script.js.map