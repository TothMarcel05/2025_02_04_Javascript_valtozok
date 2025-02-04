let e = 2;
console.log('a=' + e + 'típusa' + typeof e);

const pi = 3.14;
console.log('a=' + pi + 'típusa' + typeof pi);

console.log(0.1+0.2);
console.log((0.1+0.2).toFixed(2));

console.log(1/0);
console.log(-1/0);
console.log(0/0);

//String
let firstname = 'John'; 
let lastname = 'Doe';
// Template literals (Template strings)
// backtick(`)
console.log(`Hello ${firstname} ${lastname}`);

let person = {
    name: 'Eminem',
    age: 39,
    isStudent: false
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.address); // undefined

let xy;
console.log(xy); // undefined

// Boolean
console.log('Boolean');
console.log(typeof true);
console.log(Boolean(0));  
console.log(Boolean(""));  
console.log(Boolean("a"));  
console.log(Boolean(1));  