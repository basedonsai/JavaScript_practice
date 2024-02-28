function add() {
    var a = document.getElementById('uno').value;
    var b = document.getElementById('duo').value;
    var r = +a + +b;
    document.getElementById("res").innerHTML = r;
}
function sub() {
    var a = document.getElementById('uno').value;
    var b = document.getElementById('duo').value;
    var r = +a - +b;
    document.getElementById("res").innerHTML = r;
}
function mul() {
    var a = document.getElementById('uno').value;
    var b = document.getElementById('duo').value;
    var r = +a * +b;
    document.getElementById("res").innerHTML = r;
}
function divide() {
    var a = document.getElementById('uno').value;
    var b = document.getElementById('duo').value;
    var r = +a / +b;
    document.getElementById("res").innerHTML = r;
}
function mod() {
    var a = document.getElementById('uno').value;
    var b = document.getElementById('duo').value;
    var r = +a % +b;
    document.getElementById("res").innerHTML = r;
}
