export function subtotal() {
     const items = document.querySelectorAll('.product-item');
     let subtotal = 0;

    items.forEach(item => {
        const priceTag = item.querySelector('.priceTagShoppingList');
        const quantityTag = item.querySelector('.quantity-input');
        const price = parseFloat(priceTag.textContent.replace('$',''));
        const quantity = parseFloat(quantityTag.value);
         console.log('Price:', price, '| Quantity:', quantity);
        subtotal += price*quantity;
     });
     return subtotal;
}
