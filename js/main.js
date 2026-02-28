// Obtener carrito desde localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Elementos del DOM
const cartBadge = document.querySelector('#cart-count');
const buttons = document.querySelectorAll('.add-to-cart');

// Mostrar cantidad en navbar
if (cartBadge) {
    cartBadge.textContent = cart.length;
}

// Agregar producto al carrito
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: parseInt(button.dataset.price)
        };

        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        cartBadge.textContent = cart.length;
    });
});

// Mostrar productos en el carrito
const cartItems = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');

if (cartItems && cartTotal) {
    let total = 0;

    cart.forEach(product => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>1</td>
        `;

        cartItems.appendChild(row);
        total += product.price;
    });

    cartTotal.textContent = total;
}