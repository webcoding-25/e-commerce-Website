let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.querySelector('.cart').innerHTML = `Cart (${cartCount})`;
        alert('Product added to cart');
    });
});
