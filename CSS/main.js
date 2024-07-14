console.log(num_of_digits(123));  // Hoesting

function num_of_digits(num) {
    const len = Math.abs(num);
    const result = len.toString().length;
    return result;
}
// console.log(num_of_digits(-123456789));


function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};
function greetPerson(person, greet) {
    greet();
}
const john = new Person("John");

greetPerson(john, john.greet);


