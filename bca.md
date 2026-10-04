//closure

function outer(){
    let counter = 0;
    return function(){
        counter++; // counter = counter+ 1
        console.log(counter); //1
    }
}


let count = outer();
console.log(count);

count();
count();
count();

