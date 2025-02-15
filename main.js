// create an object person
let person = {
    name:"",
    fullname:"",
    age:null,
    email:"",
};

// Resquest name
person.name = prompt("Enter your name: ");

// Verification
while (!person.name) {
    person.name = prompt("Enter your valid name: ");
}

// Request fullname
person.fullname = prompt("Enter your full name: ");

// Verification
while (!person.fullname) {
    person.fullname = prompt("Enter your  valid fullname: ");
}

// Request email
person.email = prompt("Enter a email");

// Verification
while (!person.email) {
    person.email = prompt("Enter your valid email: ");
}

// Request age
person.age = Number(prompt("Enter your age: "));

// Verification
while (isNaN(person.age) || !person.age) {
    person.age = Number(prompt("Enter your valid age: "));
}


// Displaying sentence
console.log(`Your name is ${person.name}, and your fullname is ${person.fullname}, you have ${person.age} years old and your email is ${person.email}`)

