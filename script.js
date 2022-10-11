var a = document.getElementById('a');
var b = document.getElementById('b');
var ok = document.getElementById('ok');
var res = document.getElementById('result');

function isNumeric( x ) {
  return (/^[\d]+$/g).test( x );
}

ok.addEventListener('click', function(){
  var x = a.value; 
  var y = b.value; 
  if( !isNumeric(x) ) {
    alert( "Введено некорректное значение" );
    return;
  }
  if( !isNumeric(y) ) {
    alert( "Введено некорректное значение" );
    return;
  }
  var sum = parseInt(x)*parseInt(y);
  res.textContent = sum;
});
window.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  let button = document.getElementById("ok");
  button.addEventListener("click", ok);
  });

