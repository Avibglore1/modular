// const empl1 = {
//     name: "Rabin",
//     age: 22,
//     salary: 20000
// }

// const empl2 = {
//     name: "Rabin",
//     age: 22,
//     salary: 20000
// }

function Emp(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.calculate = function(){
        return this.salary * 12;
    }
}

const emp1 = new Emp("Rabin",22,20000);
const emp2 = new Emp("Rabin",22,20000);

console.log(emp1.name);
console.log(emp2.salary);

console.log(emp1.calculate());




