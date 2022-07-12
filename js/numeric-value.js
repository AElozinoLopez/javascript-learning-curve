var price;
var quantity;
var total;

price = 894;
quantity = 15;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;