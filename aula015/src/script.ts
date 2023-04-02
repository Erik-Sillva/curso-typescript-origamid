// Sintaxe destructuring

// const {body}: {body: HTMLElement} = document;
// console.log(body)

// interface Produto {
//     nome: string;
//     preco: number
// }

// function handleDataProduct({nome, preco}: Produto) {
//     nome.includes('book');
//     preco.toFixed();
// }

// handleDataProduct({
//     nome: 'Notebook',
//     preco: 2000,
// })

function handle_Click({currentTarget, pageX, pageY}: {currentTarget: EventTarget | null; pageX: number; pageY: number}) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML =
        `<h1>
            Mouse Click em X: ${pageX} e em Y: ${pageY}
        </h1>`
    }
}

document.documentElement.addEventListener('click', handle_Click);

// ...rest

function comparar(tipo: 'menor' | 'maior', ...numeros: number[]) {
    if (tipo === 'menor') {
        return Math.min(...numeros);
    }
    if (tipo === 'maior') {
        return Math.max(...numeros);
    }
}

console.log(comparar('menor', 3, 4, 5, 6, 7, 30, 10, 20, 1))
console.log(comparar('maior', 3, 4, 5, 6, 7, 30, 10, 20, 1))