export const Catalog = (harvestedFood) => {
    const container = document.querySelector(".container")

    for (const food of harvestedFood) {
        container.innerHTML += `<section class="plant">${food.type}</section>`
    }
}