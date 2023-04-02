const fetchVendas = async () => {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const data = await response.json();
    somarVendas(data);
}
fetchVendas()

interface ProdutoDetalhes {
    marca: string;
    cor: string;
}

type Venda = [string, number, string, ProdutoDetalhes]

const somarVendas = (vendas: Venda[]) => {
    document.body.innerHTML += `<p>Total de vendas: ${vendas.length}<p>`
    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1]
    }, 0);
    document.body.innerHTML += `<p>Lucro: ${total2}<p>`
}

// Captura dois valores e guarda o primeiro em "anterior" e o segundo em "atual"
// O primeiro valor de "anterior" será 0 (pois é o ponto de partida)
// Agora ele ira capturar o próximo valor do array "arr" (3), somar com o valor que tem em "anterior" (0) e guardar essa soma em "atual", assim, sucessivamente
const arr = [3, 5, 10, 20, 30]
const somarVendas2 = arr.reduce((anterior, atual) => {
    return anterior + atual
}, 0);