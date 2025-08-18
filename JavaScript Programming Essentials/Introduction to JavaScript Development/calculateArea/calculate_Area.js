let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;
    document.getElementById("result").innerHTML = `The area of the rectangle is: ${area}`;
}

function calculateGroceryTotal() {
    let item1 = parseFloat(document.getElementById("grocery1").value);
    let item2 = parseFloat(document.getElementById("grocery2").value);
    let item3 = parseFloat(document.getElementById("grocery3").value);

    let total = item1 + item2 + item3;

    document.getElementById("groceryResult").innerHTML = `The total cost of groceries is: $${total.toFixed(2)}`;
}