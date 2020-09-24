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

   /**
* Exercice 3
*/
  var date = new Date();
  var day = date.getDay();

  switch (day) {
	case 1:
		alert("it's Monday");
	case 2:
		alert("it's Tuesday");
	break;
    case 3:
		alert("it's Wednesday");
	break;
	case 4:
		alert("it's Thursday");
	break;
	case 5:
		alert("it's Friday");
	break;
	case 6:
		alert("it's Saturday");
	break;
	case 1:
		alert("it's Sunday");
	break;

	default:
		alert("None");
}

/**
* Les conditons
*/

/**
* Exercices 1
*/

var tab = [1,2,3,5,8];

tab.forEach(myFunction);

function myFunction(value, index, array) {
  for(i=0;i<=10;i++){
  	var result = i*value;
  	console.log(result);
  }
}

/**
* Exercices 2
*/


*/
var tab = [1,2,3,5,8];

tab.forEach(myFunction('','4',''));

function myFunction(value, index, array) {
  for(i=0;i<=10;i++){
  	var result = i*value;
  	result.toString;
  }
}
