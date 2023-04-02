const input = document.querySelector('input')

const calcularGanho = (value: number) => {
    const p = document.querySelector('p')
    if (p) {
        p.innerHTML = `Ganho total: ${value + 100 - value *0.2}`
    }
}

const total = localStorage.getItem('total')
if (input && total) {
    input.value = total
    calcularGanho(Number(input.value))
}

input?.addEventListener('keyup', () => {
    localStorage.setItem('total', input.value)
    calcularGanho(Number(input.value))
});