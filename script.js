
          var op; 
          function func() {
            var result;
            var num1 = Number(document.getElementById("num1").value);
            var num2 = Number(document.getElementById("num2").value);
            switch (op) {
              case '+':
                result = num1 + num2;
                break;
              case '-':
                result = num1 - num2;
                break;
              case '*':
                result = num1 * num2;
                break;
              case '/':
                result = num1 / num2;
                break;
            }
               document.getElementById("result").innerHTML = result;
          }

          button1.addEventListener('click', function(){
            var x = a.value; 
            var y = b.value; // Это еще строки, не числа
            
            var sum = +x + +y; // Плюсик перед строкой - превращает её в число.
            
            /* Перед тем, как вывести результат - идет проверка условия
            && - значит 'И'. А NaN или пустая "" строка в логическом контексте будут false 
            Чтобы оно выплнилось, и sum не должен быть NaN, и строки не должны быть пустыми. 
            использована функция isNaN, потому что иначе 0 + 0 будет false */
            res.textContent = ( !isNaN(sum) && x && y ) ? sum : 'Введите числа!';
          });

          function onClick() {
            alert("click");
          }
          
          window.addEventListener('DOMContentLoaded', function (onClick1) {
            console.log("Nan");
            let b = document.getElementById("button1");
            b.addEventListener("Неверные данные", onClick);
          });

          ok.addEventListener('click', function(){
            var x = document.getElementsByName("field1");
            var y = document.getElementsByName("field2");
            var res = document.getElementsById("result");
            var sum = +x * +y;
            res.textContent = ( !isNaN(sum) && x && y ) ? sum : 'Введите числа!';
          });
