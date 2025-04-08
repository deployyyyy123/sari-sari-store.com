let cartItems = [];
let totalPrice = 0;

function addToCart(item, price) {
    let quantity = parseInt(document.getElementById(item + "Qty").value);
    for (let i = 0; i < quantity; i++) {
        cartItems.push(item);
        totalPrice += price;
    }
    document.getElementById("cart").innerText = cartItems.join(", ");
    document.getElementById("totalPrice").innerText = totalPrice;
}

function pay(method) {
    alert("Payment method selected: " + method);
}

function calculateChange() {
    let payment = parseFloat(document.getElementById("paymentAmount").value);
    let change = payment - totalPrice;
    document.getElementById("change").innerText = change >= 0 ? change : "Insufficient amount";
}

function checkInventory() {
    alert("Checking inventory... All items are sufficiently stocked.");
}
