var a = document.getElementById('a');
var b = document.getElementById('b');
var ok = document.getElementById('ok');
var res = document.getElementById('result');

ok.addEventListener('click', function(){
  var x = a.value; 
  var y = b.value; 
  var sum = +x * +y; 
  res.textContent = ( !isNaN(sum) && x && y ) ? sum : 'Введите числа!';
});
