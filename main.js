// create an object person
let person = {
    name:"",
    fullname:"",
    age:null,
    email:"",

};

// Resquest name
person.name = prompt("Enter your name: ");

while (!person.name) {
    person.name = prompt("Enter your valid name: ");
}

// Request fullname
person.fullname = prompt("Enter your full name: ");

while (!person.fullname) {
    person.fullname = prompt("Enter your  valid fullname: ");
}

// Request email
person.email = prompt("Enter a email");

while (!person.email) {
    person.email = prompt("Enter your valid email: ");
}

// Request age
person.age = Number(prompt("Enter your age: "));

while (isNaN(person.age) || !person.age) {
    person.age = Number(prompt("Enter your valid age: "));
}
