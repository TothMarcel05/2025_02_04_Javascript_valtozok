
let nap = 15;
let napNev = "";
let osztas = nap % 7;
if (osztas == 0)
{
    osztas = 7
}
switch (osztas) {
    case 1:
        napNev = "hétfő";
        break;
    case 2:
        napNev = "kedd";
        break;
    case 3:
        napNev = "szerda";
        break;
    case 4:
        napNev = "csütörtök";
        break;
    case 5:
        napNev = "péntek";
        break;
    case 6:
        napNev = "szombat";
        break;
    case 7:
        napNev = "vasárnap";
        break;
    default:
        napNev = "ismeretlen";
}
console.log(napNev);


