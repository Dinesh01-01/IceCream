let iceCreamInventory = [];

function addNewIceCream() {
    const flavor = document.getElementById('flavor').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    if (flavor && price && quantity) {
        const iceCream = { flavor, price, quantity };
        iceCreamInventory.push(iceCream);
        alert(`${flavor} ice cream added!`);
        clearAddFields();
    } else {
        alert("Please fill in all fields.");
    }
}

function clearAddFields() {
    document.getElementById('flavor').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
}

function showInventoryValue() {
    let totalValue = 0;
    iceCreamInventory.forEach(item => {
        totalValue += item.price * item.quantity;
    });
    document.getElementById('totalValue').textContent = `Total inventory value: Rupees-${totalValue.toFixed(2)}`;
}
