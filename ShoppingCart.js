'use strist'
/* реализовать на функциях и прототипах корзину товаров с методами: 
   добавления товара, 
   увеличения числа товаров, 
уменьшение/удаление товаров */

const product = { id: 1, name: 'Bread', count: 1};

const Cart = function(){
    this.products = [];
}
Cart.prototype.addProduct = function(product){
    if (this.products.find(product => product.id === product.id)){
        return;
    }
    this.products.push(product);
}

Cart.prototype.increaseAmount = function(id){
    this.products = this.products.map(product => {
        if (product.id == id){
            product.count++;
            return product;
        }
        return product
    })
}

Cart.prototype.decreaseAmount = function(id){
    this.products = this.products
    .map(product => {
    if (product.id == id){
        product.count--;
        return product;
    }
    return product
    })
    .filter(product => product.count > 0);
}

const cart = new Cart();
cart.addProduct(product);
cart.increaseAmount(1);
console.log(cart);