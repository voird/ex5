var a = document.getElementById('a');
var b = document.getElementById('b');
var ok = document.getElementById('ok');
var res = document.getElementById('result');

ok.addEventListener('click', function(){
  var x = a.value; 
  var y = b.value; // Это еще строки, не числа
  
  var sum = +x * +y; // Плюсик перед строкой - превращает её в число.
  
  /* Перед тем, как вывести результат - идет проверка условия
  && - значит 'И'. А NaN или пустая "" строка в логическом контексте будут false 
  Чтобы оно выплнилось, и sum не должен быть NaN, и строки не должны быть пустыми. 
  использована функция isNaN, потому что иначе 0 + 0 будет false */
  res.textContent = ( !isNaN(sum) && x && y ) ? sum : 'Введите числа!';
});
