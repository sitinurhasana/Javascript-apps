var number = 12.356;

//toString
document.getElementById('name').innerHTML = number.toString();

//toFixed
document.getElementById('name').innerHTML = number.toFixed();

//toFixed
document.getElementById('name').innerHTML = number.toFixed(1);

//GLOBAL METHOD
var txtNumber = "12.356";
document.getElementById('name').innerHTML = typeof Number(txtNumber);

document.getElementById('name').innerHTML = parseInt(txtNumber);