// Script to use a variable to store a number
var price;        // Variable declaration
var quantity;      // Variable declaration
var total;         // Variable declaration

price = 894;                     //Variable assignment
quantity = 15;                  //Variable assignment
total = price * quantity;       //Variable assignment

var el = document.getElementById('cost');  
el.textContent = '$' + total;