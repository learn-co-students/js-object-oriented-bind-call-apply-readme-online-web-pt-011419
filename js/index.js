function greet() {
    console.log(`my name is ${this.name}, hi!`);
}
 
greet();
 
let person = {
    name: 'Bob',
    greet: greet
};
 
person.greet();

<p>"This is a test"</p>

let sally = { name: 'Sally' };
 
function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}
 
let newGreet = greet.bind(sally); // newGreet is context-bound to sally
 
newGreet('Bob');
// Hi Bob, my name is Sally!
// newGreet is bound to Sally if it is called
 
greet('Bob');
// Hi Bob, my name is !