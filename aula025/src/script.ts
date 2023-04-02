import { CountList } from "./countBy.js";
import fetch_Data from "./fetchData.js";
import normalizeTransaction from "./normalizeTransaction.js";
import Statistics from "./statistics.js";

// Chama a função de fetch passando sua interface e a URL da API, guardando o return na const data
// Faz um map em data, chamando a função 'normalizeTransaction' e passando como parametro cada item do array

const handleData = async () => {
    const data = await fetch_Data<TransactionAPI[]>('https://api.origamid.dev/json/transacoes.json?');
    
    if (!data) return;
    
    const transactions = data.map(normalizeTransaction);
    fillTable(transactions);
    fillStatistics(transactions);
    
}

const fillList = (list: CountList, containerId: string): void => {
    const containerElement = document.getElementById(containerId);
    if (containerElement) {
        Object.keys(list).forEach(key => {
            containerElement.innerHTML += `<p>${key}: ${list[key]}</p>`
        });
    }
}

const fillStatistics = (transactions: Transaction[]): void => {
    const data = new Statistics(transactions);
    fillList(data.payment, 'payment');
    fillList(data.status, 'status');
    console.log(data)

    const totalElement = document.querySelector('#total span');
    if (totalElement && totalElement instanceof HTMLElement) {
        totalElement.innerText = data.total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    }

    const dayElement = document.querySelector('#bestDay span');
    if (dayElement && dayElement instanceof HTMLElement) {
        dayElement.innerText = data.bestDay[0]
    }
}

const fillTable = (transactions: Transaction[]): void => {
    const table = document.querySelector('#transactions tbody');
    if (!table) return;
    transactions.forEach(transaction => {
        table.innerHTML += `
            <tr>
                <td class = "item">${transaction.name}</td>
                <td class = "item">${transaction.email}</td>
                <td class = "item">R$ ${transaction.coin}</td>
                <td class = "item">${transaction.payment}</td>
                <td class = "item">${transaction.status}</td>
            </tr>
        `
    })
}

handleData()