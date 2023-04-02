const button = document.querySelector('button');

function handleClick(event: MouseEvent) {
    if (event.currentTarget instanceof HTMLElement) {
        console.log(event.currentTarget.innerText)
    }
}

button?.addEventListener('click', handleClick)