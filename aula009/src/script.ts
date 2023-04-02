// function extractText<T extends HTMLElement>(el:T) {
//     return {
//         text: el.innerText,
//         el,
//     }
// }

// const a = document.querySelector('a');

// if (a) {
//     console.log(extractText(a).el.href);
// }

async function getData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return await response.json()
}

interface Notebook {
    nome: string,
    preco: number,
    descricao: string
}

const handleData = async () => {
    const notebook = await getData<Notebook>('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.descricao)
}

handleData()