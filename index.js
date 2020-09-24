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
* Corrections
*/

// Exercice 1
var ar = [1, 2, 3, 5, 8];
for(var key in ar){
   for(var i = 0; i <= 10; i++) {
     var result = ar[key] * i
     console.log(i + " x " + ar[key] + " = " + result);
    }
}

/* Exercice 2 */

    var multiplyList = document.createElement('ul');
    for(var i = 1; i <= 10; i++){
        var listElement = document.createElement('li');
        listElement.textContent = 5 + " x " + i + " = " + 5 * i;
        multiplyList.appendChild(listElement);
        document.querySelector('body').appendChild(multiplyList);
    }

/**
* Exercice 3
*/

/** Le moyen d'arreter la boucle infinie c'est de le
* kill en retrouvant son PID dans le terminal
*/


/**
*  Exercice 4
*/

var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multi5 = table.map(function(x) {
    return x * 5;
});
console.log(multi5);

/**
*  Exercice 5
*/

var obj = {
    'name': 42,
    'age': 42
}
var compute = 1;
for (var key in obj){
    compute *= obj[key];
}
console.log(compute)

/**
*  Exercice 6
*/

var nbr = [45, 86, 1, 4, -9];
for (var i = 0; i < nbr.length; i++) {
    for (var j = 0; j < nbr.length; j++) {
        if (nbr[i] < nbr[j]) {
            var tmp = nbr[i];
            nbr[i] = nbr[j];
            nbr[j] = tmp;
            j = 0;
        }
    }
}
console.log(nbr);

/**
* Les conditions
Corrigé
/**
*Les corrigé
*/

// Exercice 1
var ar = [1, 2, 3, 5, 8];
for(var key in ar){
   for(var i = 0; i <= 10; i++) {
     var result = ar[key] * i
     console.log(i + " x " + ar[key] + " = " + result);
    }
}

/* Exercice 2 */
    var multiplyList = document.createElement('ul');
    for(var i = 1; i <= 10; i++){
        var listElement = document.createElement('li');
        listElement.textContent = 5 + " x " + i + " = " + 5 * i;
        multiplyList.appendChild(listElement);
        document.querySelector('body').appendChild(multiplyList);
    }


// Exercies4
var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multi5 = table.map(function(x) {
    return x * 5;
});
console.log(multi5);


/* Exercice 5 */
    var obj = {
        'name': 42,
        'age': 42
    }
    var compute = 1;
    for (var key in obj){
        compute *= obj[key];
    }
    console.log(compute);


/**
* Exercice 6
*/

var nbr = [45, 86, 1, 4, -9];
for (var i = 0; i < nbr.length; i++) {
    for (var j = 0; j < nbr.length; j++) {
        if (nbr[i] < nbr[j]) {
            var tmp = nbr[i];
            nbr[i] = nbr[j];
            nbr[j] = tmp;
        }
    }
}
console.log(nbr);

/**
* Exercice 7
*/




/**
* Les fonctions
*/

/**
* Exercice 1
*/

/**
*  @myPutStr
*/


 
 function myPutStr(){
  var nbr = 54;
  //var test= prompt("type something");
  if(typeof nbr=='number'){
  console.log("et pourquoi pas 42 ?");
  }else{
  console.log('What you want');
  }
  return typeof nbr;
}

myPutStr();




/**
* Exercice 2
*/



/**
* @myPutStr
* @parameter{float}x
* @parameter{float}y
*/


function computeSurfaceM2(x,y){
  var result = x*y;
  return result;
}
    
var coterX = prompt("longueur");
var coterY = prompt("largeur");

computeSurfaceM2(coterX,coterY);

/**
* Exercice 3
*/



/**
* @detectMyAgeByNigh
*/
function detectMyAgeByNight(){

var age = prompt('Quel âge avez vous ? ');
var clubEntry = (age >= 18 ) ? "Vous pouvez entrer vous êtes majeur vous avez " :
 "Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez";

if(age > 42){
alert("Patron");
}else{
alert(`${clubEntry}`+ ' '+ `${age} ans`);
}
}

 
// {
  function createButton(){
 var button = document.createElement("button");
 button.innerHTML = "Do Something";
 var body = document.getElementsByTagName("body")[0];
 body.appendChild(button);
  }

 createButton.addEventListener("click", detectMyAgeByNight()); 


/**
* Exercice 4
*/


