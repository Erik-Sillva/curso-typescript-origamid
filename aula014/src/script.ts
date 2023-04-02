// interface Produto {
//     nome: string;
//     preco: number;
// }

// async function fecthProduto() {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     return response.json() 
// }

// async function handleProduto() {
//     const produto = await fetchProduct();
//     produto as Produto
//     console.log(produto.nome)
// }

// handleProduto();

const video1 = document.querySelector('.player') as HTMLVideoElement;
const video2 =<HTMLVideoElement>document.querySelector('.player');
const video3 = document.querySelector<HTMLVideoElement>('.player');
const video4 = document.querySelector('.player');

(video4 as HTMLVideoElement).volume