// Tuple = Um tipo de dadp que contem outros diversos tipos de dados. No caso do TS o Tuple é básicamente um array com valores fixos, onde você determina quais tipos de daos irá receber em cada index especifico

const produto1 = ['Notebook', 2500] // Array normal
const produto2: [string, number] = ['Notebook', 2500] // Tuple
produto2[0].toLowerCase()
produto2[1].toFixed()

if (typeof produto1[0] === 'string') {
    console.log(produto1[0].toLowerCase() )
}

const [nome, preco] = produto2
console.log([nome, preco])

const getText = (selector: string) => {
    const el = document.querySelector<HTMLElement>(selector);
    if (el) {
        return [el, el.innerText] as const;
    } else {
        return null
    }
}

const btnElement = getText('button')
console.log(btnElement)
if (btnElement) {
    btnElement[0].classList
}