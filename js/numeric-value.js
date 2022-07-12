// Script to use a variable to store a number
var price;        // Variable declaration
var quantity;      // Variable declaration
var total;         // Variable declaration

price = 894;                     //Variable assignment
quantity = 15;                  //Variable assignment
total = price * quantity;       // Calculate the total by multiplying the price by quantity.

// Get the element with an id of cost.
var el = document.getElementById('cost');  
el.textContent = '$' + total;

// Note: textContent does not work in IE8 or earlier