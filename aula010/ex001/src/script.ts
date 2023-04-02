// Functions Overload: Neste exercicio primeiro declaramos que vamos ter uma função chamada "arredodar" que vai receber um number e retornar o mesmo
// Em seguida fazemos o mesmo só que agora com string
// E por fim declaramos a função em sí, dizendo que ela recebe e retorna um number ou string novamente


function arredondar(valor: number): number;
function arredondar(valor: string): string;
function arredondar(valor: number | string): number | string {
    if (typeof valor === 'number') {
        return Math.ceil(valor)
    } else {
        return Math.ceil(Number(valor)).toString()
    }
}

console.log(arredondar(200.32).toFixed())
console.log(arredondar('203.32').toLowerCase())