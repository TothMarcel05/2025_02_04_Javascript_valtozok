console.log(Math.floor(Math.random()*6)+1)
console.log(Math.ceil(Math.random()*6))
document.getElementById("dobas").innerHTML = `${dobas}`;

function dobas_mutat(){
    let dobas = Math.ceil(Math.random()*6);
    document.getElementById("dobas").innerHTML = dobas;
}

function lotto(){
    let lotto = Math.ceil(Math.random()*5);
    document.getElementById("lotto").innerHTML = lotto;
}