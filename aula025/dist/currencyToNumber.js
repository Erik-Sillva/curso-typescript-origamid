const coinToNumber = (coin) => {
    const number = Number(coin.replaceAll('.', "").replace(',', '.'));
    return isNaN(number) ? null : number;
};
export default coinToNumber;
//# sourceMappingURL=currencyToNumber.js.map