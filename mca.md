<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDoList</title>
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
            margin: 300px auto;
            background-color: greenyellow;
            width: 100vw;
            gap:0;
            font-style: italic;
            font-weight: 600
        }

        input{
            width: 300px;
            height: 40px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            border: none;
            outline: none;
            padding: 10px;
            font-size: 24px;
        }

        ul{
            width: 300px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            border: none;
            outline: none;
            
            font-size: 24px;
            text-align: center;
            list-style-type: none;
            
            background-color: yellow;
        }

        .checked{
            text-decoration: line-through;
            text-decoration-color: red;
            text-decoration-thickness: 4px;
            opacity: 0.5;
        }

        
    </style>
</head>
<body>
    <div class="container">
        <input type="text" placeholder="Enter your to-do" id="todo">
        <ul>
            
        </ul>
    </div>

    <script>
        let containerEl = document.querySelector("ul");
        let inputEl = document.querySelector("input");

        inputEl.addEventListener("change",function(){
            let value = inputEl.value;
            let liEl = document.createElement("li");
            containerEl.appendChild(liEl);

            let innerDivEl = document.createElement("div");
            liEl.appendChild(innerDivEl);

            let spanEl = document.createElement("span");
            innerDivEl.appendChild(spanEl);
            spanEl.textContent = value;;

            let buttonContainer = document.createElement("div");
            innerDivEl.appendChild(buttonContainer);

            let btnEl1 = document.createElement("button");
            btnEl1.textContent = "✅";
            buttonContainer.appendChild(btnEl1);

            let btnEl2 = document.createElement("button");
            btnEl2.textContent = "❌";
            buttonContainer.appendChild(btnEl2);


            innerDivEl.style.display = "flex";
            innerDivEl.style.flexDirection = "row";
            innerDivEl.style.justifyContent = "space-between";
            innerDivEl.style.alignItems = "center";

            btnEl1.addEventListener("click",function(){
                liEl.classList.toggle("checked")
            })

            btnEl2.addEventListener("click", function(e){
                liEl.remove()
            })



            
        })
    </script>
</body>
</html>


<!-- callbacks -->

import fs from "fs";

fs.writeFileSync("file.md", "Hello!! This is vijay");

console.log("file was created");


fs.unlinkSync("file.md")


console.log("file deleted");


// shallow and deep copy

const obj = {
    name: "Rahul",
    age: 25,
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
}

const copy = {...obj};

// console.log(copy);

copy.name="Avinash";

copy.address.city = "Jaipur";

console.log(obj);

<!-- handling asyncronous code -->

// const response = fetch("https://jsonplaceholder.typicode.com/posts");


async function fetchPosts() {

    try {
        const response = await fetch("https://jsonpceholder.typicode.com/posts");
    console.log(response);
    if(!response.ok){
        throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log(error.message)
    }
    
  
     
}

fetchPosts()





