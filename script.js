let a = document.getElementById("a");
let b = document.getElementById("b");
let ok = document.getElementById("ok");
let res = document.getElementById("result");

function isNumeric(x) {
    return (/^[\d]+$/g).test(x);
}

ok.addEventListener("click", function() {
    let x = a.value;
    let y = b.value;
    if (!isNumeric(x)) {
        alert("Введено некорректное значение");
        return;
    }
    if (!isNumeric(y)) {
        alert("Введено некорректное значение");
        return;
    }
    let sum = parseInt(x) * parseInt(y);
    res.textContent = sum;
});
window.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    let button = document.getElementById("ok");
    button.addEventListener("click", ok);
});
