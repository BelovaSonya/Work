'use strict'

/* сделать запрос на https://dummyjson.com/products/cotegories
   получить список категорий и отобразить <select> выбора категорий
 */

const createSelect = (array) => {
    const el = document.querySelector('.filter');
    el.innerHTML = `<select>
       ${array.map(arrEl => `<option value=${arrEl}>${arrEl}</option>`)}
    </select>`
}

const getCategories = () => {
    fetch('https://dummyjson.com/products/cotegories')
    .then(response => response.json())
    .then(data => createSelect(data))
    .catch(error => console.error(`Ошибка: ${error}`))
}

getCategories();

