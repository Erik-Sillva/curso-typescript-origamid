"use strict";
const fetchVendas = async () => {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const data = await response.json();
    somarVendas(data);
};
fetchVendas();
const somarVendas = (vendas) => {
    document.body.innerHTML += `<p>Total de vendas: ${vendas.length}<p>`;
    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    document.body.innerHTML += `<p>Lucro: ${total2}<p>`;
};
const arr = [3, 5, 10, 20, 30];
const somarVendas2 = arr.reduce((anterior, atual) => {
    return anterior + atual;
}, 0);
//# sourceMappingURL=script.js.map