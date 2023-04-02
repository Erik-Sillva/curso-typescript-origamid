import countBy from "./countBy.js";

// Diz que o type TransactionValue tera a mesma interface de Transaction, mas modificando a propriedade value de number | null para somente number
type TransactionValue = Transaction & {value: number}

// Filtra somente a propriedade value que não for null e modifica sua interface para o type TransactionValue retornando true ou false
const fillterValue = (transaction: Transaction): transaction is TransactionValue => {
    return transaction.value !== null;
}

export default class Statistics {
    private transactions;
    total;
    payment;
    status;
    week;
    bestDay;
    constructor(transactions: Transaction[]) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payment = this.setPayment();
        this.status = this.setStatus();
        this.week = this.setWeek();
        this.bestDay = this.setBestDay();
    }

    // Filtro as transações passando cada uma como argumento para a fillterValue e em seguida dando um reduce para pegar cada valor em somar (começando por 0)
    private setTotal() {
        return this.transactions.filter(fillterValue).reduce((acc, item) => {
            return acc + item.value
        }, 0);
    }

    private setPayment() {
        return countBy(this.transactions.map(({payment}) => payment))
    }

    private setStatus() {
        return countBy(this.transactions.map(({status}) => status))
    }

    private setWeek() {
        const week = {
            ['Domingo']: 0,
            ['Segunda']: 0,
            ['Terça']: 0,
            ['Quarta']: 0,
            ['Quinta']: 0,
            ['Sexta']: 0,
            ['Sábado']: 0,
        }
        
        for (let i = 0; i < this.transactions.length; i++) {
            const day = this.transactions[i].date.getDay()
            if (day === 0) week['Domingo'] += 1
            if (day === 1) week['Segunda'] += 1
            if (day === 2) week['Terça'] += 1
            if (day === 3) week['Quarta'] += 1
            if (day === 4) week['Quinta'] += 1
            if (day === 5) week['Sexta'] += 1
            if (day === 6) week['Sábado'] += 1
        }
        console.log(week)
        return week;
    }

    private setBestDay() {
        return Object.entries(this.week).sort((a, b) => {
            return b[1] - a[1]
        })[0];
    }
}