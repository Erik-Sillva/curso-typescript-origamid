import coinToNumber from "./currencyToNumber.js";
import stringToDate from "./stringToDate.js";

// Declara que tudo que estiver dentro de declare global sera global e podera ser usado em todos os documentos sem a necessidade de import ou export

declare global {
    type TransactionPayment = 'Boleto' | 'Cartão de Crédito'
    type TransactionStatus = 'Paga' | 'Recusada pela operadora de cartão' | 'Aguardando pagamento' | 'Estornada'

    interface TransactionAPI {
        Nome: string;
        ID: number;
        Data: string;
        Status: TransactionStatus;
        Email: string;
        ['Valor (R$)']: string
        ['Forma de Pagamento']: TransactionPayment;
        ['Cliente Novo']: number
    }

    interface Transaction {
        name: string;
        id: number;
        date: Date;
        status: TransactionStatus;
        email: string;
        coin: string;
        value: number | null;
        payment: TransactionPayment;
        new: boolean;
    }
}

// Normaliza a interface TransactionAPI para a Transaction, formatando todas as keys para letras minusculas e sem caracteres especiais

const normalizeTransaction = (transaction: TransactionAPI): Transaction => {
    return {
        name: transaction.Nome,
        id: transaction.ID,
        date: stringToDate(transaction.Data),
        status: transaction.Status,
        email: transaction.Email,
        coin: transaction["Valor (R$)"],
        value: coinToNumber(transaction["Valor (R$)"]),
        payment: transaction["Forma de Pagamento"],
        new: Boolean(transaction["Cliente Novo"]),
    }
}

export default normalizeTransaction;