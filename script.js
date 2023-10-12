let cartItems = [];
let cartTotal = 0;

function addToCart() {
    // In a real application, you would add the selected product to the cart here.
    const productName = "Product Name";
    const productPrice = 550;
    
    cartItems.push({ name: productName, price: productPrice });
    cartTotal += productPrice;

    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    
    cartList.innerHTML = '';
    
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name}: ${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    cartTotalElement.textContent = cartTotal.toFixed(2);
}
