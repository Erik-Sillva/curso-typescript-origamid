// interface Produto {
//     nome: string;
//     preco: number;
//     novo: boolean;
// }

// let chave: keyof Produto;

// chave = 'nome'

// function coordenadas(x: number, y: number) {
//     return {x, y};
// }

// let coord: typeof coordenadas;

// coord = (x: number, y: number) => {
//     return {x, y}
// }

interface Elements {
    a: HTMLAnchorElement;
    audio: HTMLAudioElement;
    body: HTMLBodyElement;
    div: HTMLDivElement;
    video: HTMLVideoElement;
}

function select<K extends keyof Elements>(selector: K): Elements[K] | null {
    return document.querySelector(selector)
}

select('a')?.href;
select('video')?.volume;