//1. Egy beolvasott számról döntse el a program, hogy -30 és 40 között van-e!
let szam = 23;
if (szam > -30 && szam < 40) console.log("-30 és 40 között van")
else console.log("-30 és 40 között nincs")

//2. Két beolvasott szám közül írassuk ki a nagyobbikat! Azt is írassuk ki, ha egyenlők
let szam1 = 4;
let szam2 = 2;
if (szam1 > szam2) console.log("Az első szám a nagyobb")
else if (szam1 < szam2) console.log("Az második szám a nagyobb")
else console.log("A két szám egyenlő")

//3. Egy beolvasott X számnak írjuk ki az előjelét (pozitív, negatív vagy nulla)!
let szamelojel = -2;
if (szamelojel > 0) console.log("pozitív")
else if (szamelojel < 0) console.log("negatív")
else console.log("nulla")

//4. Kérjünk be egy számot és döntsük el, hogy egész szám-e! Csak ebben az esetben írassuk ki!
let egeszszame = 3.34;
if (egeszszame % 1 == 0) console.log("egesz szám")
else console.log("nem egesz szám")

//5. A program kérdezzen két számot, s utána írja ki a köztük lévő relációt. Például, ha a két szám 3 és -6.12, akkor az eredmény: 3 > -6.12.
let szamrel1 = 2;
let szamrel2 = 4;
if (szamrel1 > szamrel2) console.log(`${szamrel1} > ${szamrel2}`)
else if (szamrel1 < szamrel2) console.log(`${szamrel1} < ${szamrel2}`)
else console.log(`${szamrel1} = ${szamrel2}`)   

//6. Írj programot, ami egy életkor alapján eldönti, hogy gyerek (0-6 év), iskolás (7-18), dolgozó (19-60), illetve nyugdíjas-e az illető!
let eletkor = 18;
if (eletkor >= 0 && eletkor<= 6) console.log("gyerek")
else if (eletkor >= 7 && eletkor<= 18) console.log("iskolás")
else if (eletkor >= 19 && eletkor<= 60) console.log("dolgozó")
else console.log("nyugdíjas")

//1. Egy beolvasott számról döntse el a program, hogy -30 és 40 között van-e!


function elso() {

let fszam = parseFloat(document.getElementById("fszam").value);
if (fszam > -30 && fszam < 40)
    {document.getElementById("eredmeny1").innerHTML = "-30 és 40 között van"}
else 
{document.getElementById("eredmeny1").innerHTML = "-30 és 40 között nincs"}
}



