console.log('4. Változó típuskonvezió');

console.log("dog" + "house"); // összekapcsolta a két karakterláncot
console.log("dog" + 4); // a számot átalakította
console.log(4 + "4"); // karakterlánccá
console.log(4 + 4); // összeadta a két számot
console.log(23 - "17"); // a karakterláncot átalakította számmá

console.log(Math.PI); //3.141592653589793
console.log(Math.abs(-23)); //23
console.log(Math.ceil(3.21)); //4
console.log(Math.ceil(-3.21)); //-3
console.log(Math.floor(3.67)); //3
console.log(Math.floor(-3.67)); //-4
console.log(Math.round(3.45)); //3
console.log(Math.round(3.5)); 
console.log(Math.round(3.67)); //4
console.log(Math.trunc(3.21)); //3
console.log(Math.trunc(-3.21)); //-3

let input = prompt('Kérek egy számot: ', 0); 
console.log (parseInt(input) + 6);