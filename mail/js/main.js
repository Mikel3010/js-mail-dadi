'use strict'
const email = ['pippo@gmail.com','topolino@gmail.com','paperino@gmail.com','pluto@gmail.com']

const emailUser = prompt('inserisci la tua mail')
console.log(emailUser)

for (let i = 0; i < email.length; i++){
    if ( email[0] === emailUser){
     console.log('puoi accedere');
     break;
    }
    else if ( email[1] === emailUser){
     console.log('puoi accedere');
     break;
    }
    else if ( email[2] === emailUser){
     console.log('puoi accedere');
     break;
    }
    else if ( email[3] === emailUser){
     console.log('puoi accedere');
     break;
    }
    else{
     console.log('non puoi accedere')
     break;
    }
 } 


   



