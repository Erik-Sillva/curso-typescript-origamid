// function retorno<variavel>(a:variavel): variavel {
//     return a;
// }

// console.log(retorno<string>('string'))
// console.log(retorno<number>(200))
// console.log(retorno<boolean>(true))

//--------------------------------------------------//--------------------------------------------------------//

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const fruits = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão', 'Maçã']

// function firstFive<T>(lista:T[]): T[] {
//     return lista.slice(0.5)
// }

// console.log(firstFive(numbers))
// console.log(firstFive(fruits).map(item => item))

// O primeiro 'T' indica qual vai ser o tipo dessa lista, o segundo indica oque ele recebe, já o terceiro e último é oque ele irá retornar

//--------------------------------------------------//--------------------------------------------------------//

// function notNull<T>(arg: T) {
//     if (arg !== null) return arg;
//     else return null
// }

// notNull('Erik')?.toLocaleLowerCase();
// notNull(7)?.toFixed()

//--------------------------------------------------//--------------------------------------------------------//

function dataType<T>(a:T) {
    const res = {
        dado: a,
        tipo: typeof a,
    };
    console.log(res)
    return res
}

dataType('Teste')
dataType(7)