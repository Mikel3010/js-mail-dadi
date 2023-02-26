'use strict'

const user = prompt('inserisci il tuo nome')

const numberUser = Math.floor(Math.random() * 6);
const numberPc = Math.floor(Math.random() * 6);
console.log(numberUser)
console.log(numberPc)
 
if (numberUser > numberPc){
    console.log(user + ' hai vinto ')
}
else if(numberUser === numberPc){
    console.log(user + ' hai pareggiato ')
}
else{
    console.log(user + ' hai perso ')
}