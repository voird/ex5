
          // переменная, в которой хранится выбранное математическое действие
          var op; 
    
          // функция расчёта
          function func() {
              // переменная для результата
            var result;
            // получаем первое и второе число
            var num1 = Number(document.getElementById("num1").value);
            var num2 = Number(document.getElementById("num2").value);
            // смотрим, что было в переменной с действием и действуем исходя из этого
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
    
            // отправляем результат на страницу
            document.getElementById("result").innerHTML = result;
          }
          function click1() {
            let f1 = document.getElementsByName("field1");
            let f2 = document.getElementsByName("field2");
            let r = document.getElementById("result");
            r.innerHTML = f1[0].value + f2[0].value;
            return false;
          }

          function onClick1() {
            let f1 = document.getElementsByName("field1");
            let f2 = document.getElementsByName("field2");
            let r = document.getElementById("result");
            var result = parseInt(f1[0].value) * parseInt(f2[0].value)
            r.innerHTML = result;
            let с = document.getElementById("button1");
            return false;
        }
        
        function onClick2() {
            let f1 = document.getElementsByName("field1");
            let f2 = document.getElementsByName("field2");
            let r = document.getElementById("result");
            r.innerHTML = None;
            f1.innerHTML = None;
            f2.innerHTML = None;
            return false;
        }