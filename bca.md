<!-- Build a live character counter for a textarea using the input event. -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character counter</title>
    <style>

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5;
            font-family: 'Poppins', sans-serif;
        }
        
        .container{
            text-align: center;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        textarea{
            width: 100%;
            height: 100px;
            margin: 10px 0;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        p{
            font-size: 16px;
            font-weight: bold;
        }

        span{
            color: #007bff;
        }
    </style>
</head>
<body>

    <div class="container">
       <h1>Character Counter</h1>
        <textarea id="textArea" cols="30" rows="10" maxlength="20"></textarea>

        <p>Counter: <span></span></p>
    </div>
    
    <script>
        let inputEl = document.querySelector("textArea");
        let spanEl = document.querySelector("span");
        inputEl.addEventListener("input", function(e){  
            
                      
            let text = e.target.value;


            spanEl.textContent = text.length;
        })
        
    </script>
    
</body>
</html>



<!-- Build a live character counter for a textarea using the input event. -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character counter</title>
    <style>

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5;
            font-family: 'Poppins', sans-serif;
        }
        
        .container{
            text-align: center;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        textarea{
            width: 100%;
            height: 100px;
            margin: 10px 0;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        p{
            font-size: 16px;
            font-weight: bold;
        }

        span{
            color: #007bff;
        }
    </style>
</head>
<body>

    <div class="container">
       <h1>Character Counter</h1>
        <textarea id="textArea" cols="30" rows="10" maxlength="20"></textarea>

        <p>Counter: <span></span></p>
    </div>
    
    <script>
        let inputEl = document.querySelector("textArea");
        let spanEl = document.querySelector("span");
        inputEl.addEventListener("input", function(e){  
            
                      
            let text = e.target.value;

              localStorage.setItem("counter", text.length)
            spanEl.textContent = text.length;
        })
       spanEl.textContent =  localStorage.getItem("counter");
    </script>
    
</body>
</html> 

<!-- hoisting only var and function declaration are hoisted -->

let age=30;

function test() {
var age = 25;
console.log(age); //25
}

test();

console.log(age);    


function greet() {
var a = 10;
let b = 20;
const c = 30;
}

greet()

console.log(a);  //10
console.log(b); 
console.log(c);

let c;
function outer() {
    let b = 20;

    function inner() {
        let c = 30;        
    }
    inner()
    console.log(c); 
}

outer();
