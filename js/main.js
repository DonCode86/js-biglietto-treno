//quanti chilomentri vuoi percorrere?
const userKm = Number(prompt("Quanti chilometri vuoi percorrere?"));
//quanti anni hai?
const userAge = Number(prompt("Quanti anni hai?"));
//calcolo prezzo totale del viaggio (0.21€/km)
let totalPrice = userKm * 0.21;
console.log(totalPrice);
//se userAge<18 sconto del 20%
let totalPriceWithDiscount;
if ( userAge < 18 ) {
    totalPriceWithDiscount = totalPrice - totalPrice * 0.20;
    console.log(totalPriceWithDiscount.toFixed(2)+" "+ "€");
    //se userAge>=65 sconto del 40%
} else if ( userAge >= 65 ) {
    totalPriceWithDiscount = totalPrice - totalPrice * 0.40;
    console.log(totalPriceWithDiscount.toFixed(2)+" "+ "€");
}
//prezzo finale (max 2 decimali)
