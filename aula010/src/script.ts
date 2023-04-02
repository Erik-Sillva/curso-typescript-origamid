function somar(a: number, b: number, c?: number): number {
    return a+b+(c ? c: 0)
}

somar(10, 20)

const subtrair = (a: number, b: number) => a - b;

subtrair(4, 3)

type Callback = (event: MouseEvent) => void;

// ATENÇÃO: Uma função que não tem retorno não deve ser usada para fazer verificações boleanas, pois sempre retornam void.
// Exemplo:

// function pintarTela(cor: string) {
//     document.body.style.background = cor
// }

// if (pintarTela('black')) {
//     console.log('Pintou a tela')
//     // resultado = undefined
// } else {
//     console.log('Não pintou a tela')
// }

// function abortar(mensagem: string) {
//     throw new Error(mensagem);
// }

// abortar('Um erro ocorreu')
// console.log('Tente novamente')

// interface Quadrado {
//     lado: number;
//     perimetro(lado: number): number
// }

// function calcular(forma: Quadrado) {
//     forma.lado
//     forma.perimetro(4)
// }

// Funcões Overload //

function normalizar(valor: string[]): string[]; //Se o valor for array de string, será retornado array de string
function normalizar(valor: string): string; //Se o valor for de string, será retornado string
function normalizar (valor: string | string[]): string | string[] {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase()
    } else {
        return valor.map((item) => item.trim().toLowerCase())
    }
}

console.log(normalizar('  ProduTO  ').toLowerCase())
console.log(normalizar(['  ProduTO  ', '  NOTEbook  ', 'celular']).filter)

// function $(seletor: 'a'): HTMLAnchorElement | null
// function $(seletor: 'video'): HTMLVideoElement | null
// function $(seletor: string): Element | null
// function $(seletor: string): Element | null {
//     return document.querySelector(seletor)
// }

// $('a')
// $('video')
// $('.item')