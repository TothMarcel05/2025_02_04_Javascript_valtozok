console.log(5 == "5"); //true, 5 is 5
console.log(typeof(5));
console.log(typeof("5"));

console.log(5 === "5"); //false, type difference
console.log(5 === 5); //true
console.log(5 !== "5"); //true
console.log(5 !== 5); //false

let a = "6";
console.log(`a: ${a}`)
console.log(!(a < 5));

console.log("LOGIKAI OPERÁTOR");
console.log(a > 5 && a < 20);
console.log("Check type")
console.log(a > 5 && typeof a === "number");
console.log(a === 3 || a === 6);


//Aritmetikai operátorok
let z;
z=3+4; // összeadás
console.log(z);

z=3-4; // kivonás
console.log(z);

z=2*3; // szorzás
console.log(z);

z=2/3; // osztás
console.log(z);

z=3%2; // modulo
console.log(z); 

z=3**2; // hatványképzés (hatványalap**hatványkitevő)
console.log(z);

// pre- és prosztinkremet
let x,y;
x=5;
console.log(`x=${x}`)
console.log(`y=${y}`)
y=++x; // preinkrement
console.log("PREINKREMENT")
console.log(`x=${x}, y=${y}`);
x=5;
y=x++; // posztinkrement
console.log("POSZTINKREMENT")
console.log(`x=${x}, y=${y}`);

console.log('Addig jár a korsó a kútra,'+' amíg be nem vezetik a vizet.');
let kocka = 'kocka';
kocka += 'has'; // x értéke így: 'kockahas'
console.log(kocka);

//Kapcsolati operátor:
const gyumolcs = { fa: 'alma', fajta: 'Starking', szin: 'piros' };
console.log('fajta' in gyumolcs); //true
console.log(gyumolcs instanceof Object); //true

function myFunction() {
    let valtozo = 5;
    var valtozo2 = 20;
    return "valtozo"; 
  }

console.log(myFunction());
// console.log(valtozo)
console.log(valtozo2)