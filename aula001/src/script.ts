// Função

import { transform } from "../node_modules/typescript/lib/typescript";

function somar(a:number, b:number) {
    return a+b
}

somar(20, 30)

// Objeto

const car: {
    marca: string;
    modelo: string;
    preco: number;
} = {
    marca: 'BMW',
    modelo: 'I8',
    preco: 800.0000
}

// ATENÇÃO: Não é recomendado ficar tipando tudo, o próprio TypeScript faz isso por padrão. O recomendado é tipar variáveis ou parâmetros em casos de funções onde você não sabe qual será o tipo  de valor recebido.

const produto: {
    nome: string;
    preco: string;
} = {
    nome: 'Whatch Dogs 2',
    preco: '100'
}

function trasnformarPreco(produto: { nome: string, preco: string}) {
    produto.preco = 'R$' + produto.preco
    return produto
}

let verProduto = trasnformarPreco(produto)
console.log(verProduto)