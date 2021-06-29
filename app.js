var a = document.getElementById('num1')
var b = document.getElementById('num2')
var c = document.getElementById('num3')
var result = document.getElementById('result')
var h2 = document.getElementById('h2')

function plus() {
    result.innerHTML = ((Math.sqrt((b.value * b.value) - 4 * (a.value) * (c.value))) - (b.value)) / (2 * a.value);
}

function minus() {
    h2.innerHTML = (0 - (Math.sqrt((b.value * b.value) - 4 * (a.value) * (c.value))) - (b.value)) / (2 * a.value);
}