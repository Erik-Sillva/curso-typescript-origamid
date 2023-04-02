interface Produto {
    nome: string;
    ano: number;
}

interface Jogo extends Produto {
    desenvolvedora: string[];
    plataformas: string;
}

interface Livro extends Produto {
    autor: string;
    paginas: number;
}

function checkInterface<T>(obj: unknown, key: keyof T): obj is T {
    if (obj && typeof obj === 'object' && key in obj) {
        return true
    } else {
        return false
    }
}

async function fetchData<T>(url:string): Promise<T> {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json()
}

async function handleDatas() {
    const jogo = await fetchData('/jogo.json')
    if (checkInterface<Jogo>(jogo, 'desenvolvedora')) {
        console.log(jogo.ano)
    }

    const livro = await fetchData('/livro.json')
    if (checkInterface<Livro>(livro, 'autor')) {
        console.log(livro.autor)
    }
}

handleDatas()