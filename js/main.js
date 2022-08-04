//quanti chilomentri vuoi percorrere?
const userKm = Number(prompt("Quanti chilometri vuoi percorrere?"))
//quanti anni hai?
const userAge = Number(prompt("Quanti anni hai?"))
if (!isNaN(userKm) && !isNaN(userAge)) {
  //calcolo prezzo totale del viaggio (0.21€/km)
  let totalPrice = userKm * 0.21
  //se userAge<18 sconto del 20%
  if (userAge < 18) {
    totalPrice = totalPrice - totalPrice * 0.2
    //se userAge>=65 sconto del 40%
  } else if (userAge >= 65) {
    totalPrice = totalPrice - totalPrice * 0.4
  }
  console.log(`il prezzo del biglietto è: ${totalPrice.toFixed(2) + " " + "€"}`)
}
//prezzo finale (max 2 decimali)
