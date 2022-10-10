
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

          function onClick() {
            alert("click");
          }
          
          window.addEventListener('DOMContentLoaded', function (onClick1) {
            console.log("Nan");
            let b = document.getElementById("button1");
            b.addEventListener("Неверные данные", onClick);
          });

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
