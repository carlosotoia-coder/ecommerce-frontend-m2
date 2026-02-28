let cartCount = 0;

const cartBadge = document.querySelector('#cart-count');
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartBadge.textContent = cartCount;
    });
});