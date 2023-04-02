const numeros = [10, 20, 30, 40, 50, 3]
const valores = [10, 'Produto', 30, 'Taxas', 50, 3]
const filmes_Series_Ou_Jogos = [
    ['The Last Of Us', 69.90],
    ['Senhor Dos Aneis', 80],
    ['Hogwarts Legacy', 334.10]
]
type StringOrNumber = string | number

const maiorQue10 = (data: number[]) => {
    return data.filter(n => n > 10)
}

const filtrarValores = (data:(StringOrNumber)[]) => {
    return data.filter(item => typeof item === 'number')
}

const filtrar = (data: Array<number>) => {
    return data.filter(item => typeof item === 'number')
}

console.log(filtrarValores(valores))
console.log(maiorQue10(numeros))