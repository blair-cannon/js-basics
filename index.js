console.log('Hello World');

let name = "Blair";
console.log('name');

//Variables should be meaningful, 
//cannot be a reserved keyword (let, if)
//Cannot start with a number
//cannot contain a space of hyphen (-)
//they are case sensitive!!
//best practice is to define each var on its own line

let newWeight = 0.3;
newWeight = 1;
console.log(newWeight);

//will print 1 on console because variables
//are not constant, they can keep being redefined
//constants on the other hand, cannot

const interestRate = 0.3;
intersetRate = 1;
console.log(interestRate);
//syntaxerror in console because you cannot redefine constant
//SO if you need a variable than needs to be redefined, use let


let firstName = "Blair"; //string literal
let age = 30; //number literal
let isApprove = true; //boolean literal (can be true or false)
let lastName = undefined;
let selectedColor = null; //use null as a holding place for a value if there isn't one yet

let person = {
    name, age
};
//person is considered an object, its properties are name and age

//changing an object property using dot notation:
person.name = 'John'
console.log(person.name);

//changing an object property using bracket notation:
person['name'] = 'Mary'
console.log(person.name);

//arrays store lists
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
//if the console is expanded, it shows
//red as index (spot) 1 and blue as index 2
//so arrays start at index zero

console.log(selectedColors[0]);

//length of array is dynamic, can add at any point
selectedColors[2] = 'green';
// #2 being the third object in the array
console.log(selectedColors[2]);

selectedColors[3] = 1;
//arrays can have multiple types within it, 
//in this case three strings and a number
console.log(selectedColors);


//arrays are objects themseves and have built
//in properties (like the person example with age and name as properties)
//to see properties console.log(selectedColors.___) and then a
//menu will come up with all of the properties

console.log(selectedColors.length);
//will give you the number of objects within array

//to define a function have the following layout
function greet() {
    console.log('Hello World');
}
//greet is the new function we are defining
//then comes the (), then the curly brackets that open to the body,
//this is where we define the logic of the application of "greet"

greet();
//calls the function to run

//can have parameters within a function that are variables
//that are only meaningful inside the function
function greet(name) {
    console.log('Hello ' + name);
}
greet('John');
//'john' is an argument and name is a parameter
//so argument is that value supplied for that parameter

//there is a space after 'Hello ' intentionally to spread out the words

function greet(name, lastName) {
    console.log('Hello ', name, '', lastName);
}

greet('John', 'Smith');


//so the function we created 'greet' performs the task of displaying
//something on the console

//we can also calculate a value


function square(number) {
    return number * number;
}
let number = square(2);
    console.log(number);
//can make it a variable as  where we store square of 2 into number
//or can do the following

console.log(square(3));
