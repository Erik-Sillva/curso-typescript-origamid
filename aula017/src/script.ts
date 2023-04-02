const form = document.querySelector<HTMLElement>('#form');

interface UserData {
    nome?: string;
    email?: string;
    cpf?: string;
}

interface Window {
    UserData: any;
}

window.UserData = {}

// Valida o objeto e sua interface esperada
function isUserData(obj: unknown): obj is UserData {
    if (obj && typeof obj === 'object' && ('nome'  in obj || 'email' in obj || 'cpf' in obj)) {
        return true
    } else {
        return false
    }
}

// Valida o JSON para evitar erros no console
function validJSON(str: string) {
    try {
        JSON.parse(str)
    } catch (e) {
        return  false
    }
    return true
}

// Captura o JSON no localStorage e seta para a validJSON fazer a validação
function loadLocalStorage() {
    const localUserData = localStorage.getItem('userData');
    if (localUserData && validJSON(localUserData)) {
        const userData = JSON.parse(localUserData);
        if (isUserData(userData)) {
            const retorno = Object.entries(userData).forEach(([key, value]) => {
                const input = document.getElementById(key)
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
            console.log(retorno)
        }
    }
}

loadLocalStorage()

function handleInput({ target }: KeyboardEvent) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('userData', JSON.stringify(window.UserData))
    }
}
form?.addEventListener('keyup', handleInput);