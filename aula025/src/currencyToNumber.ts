/**
 * Recebe string e retorna number.
 * Exemplo: '1.200,50' => 1200.50
 */

const coinToNumber = (coin: string): number | null => {
    const number = Number(coin.replaceAll('.', "").replace(',', '.'));
    return isNaN(number) ? null : number
}

export default coinToNumber;