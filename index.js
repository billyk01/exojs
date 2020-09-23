'use strict';

/* Exo 1 */

/* My Digital School Forever */

/**
* My Digital School forever every day
**/

/* Exo 3 */

var string = '42';
var number = 42
var float = 42.0;
var boolean = true; 
var array = [42];
var date = new Date[4241, 12, 24,42,42] ;
var objet = {'42' : 42};
var undefined;
var empty=null;


/* Exo 4 */

var my42count = 'quarante-deux';
var count = my42count.length;
console.log(count);



/**
* Les conditions
*/


/**
*Exo 1
*/


var age = prompt('How old are you?');
var clubEntry = (age >= 18 ) ? "Vous pouvez entrer vous êtes majeur vous avez " :
 "Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez";

if(age > 42){
alert("Patron");
}else{
alert(`${clubEntry}`+ ' '+ `${age} years old!`);
}


/**
*  Exercice 2
*/


   var rand = Math.floor((Math.random() * 30) + 1);
  
  if(rand>=0&&rand<=10){alert(`${rand}` +"° is that is Cool");
  }else if(rand>=11&&rand<=19){
    alert(`${rand}` +"° is that is Tepid");
   }else if(rand>=20&&rand<=30){
   alert(`${rand}` +"° is that is Warm");
   }else{ alert("none")
   }


