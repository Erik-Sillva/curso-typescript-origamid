import coinToNumber from "./currencyToNumber.js";
import stringToDate from "./stringToDate.js";
const normalizeTransaction = (transaction) => {
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
    };
};
export default normalizeTransaction;
//# sourceMappingURL=normalizeTransaction.js.map