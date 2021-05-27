console.log("coucou depuis la console");
//commentaire sur une ligne
console.log("Ceci n'est pas un commentaire")
/* commentaire écrit sur 
plusieurs lignes*/
let data1 = "variable en let définie dans le bloc principal";

let myVariable = 5;
console.log(myVariable);
console.log(typeof myVariable);

let mySecondVariable = "pirate";
console.log(mySecondVariable);
console.log(typeof mySecondVariable);

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc";

} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"
//console.log(data3); // On aura une erreur : data3 n'est pas visible dans le bloc principal

let a = 1;
let b = 1;
a++
console.log(a);
console.log(b += 2);

let c = "Bonjour", d = "Monde";
console.log(c + " " + d);

let e = Number("5");
console.log(e);
console.log(typeof e);

//On peut convertir un string en number
let f = String(36);
console.log(f);
console.log(typeof f);

//les arrays
//créer un array
let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"];
//accèder à un élément de l'array
console.log(statusDeTHP[0])
//La taille d'un array
console.log(statusDeTHP.length);
//modifier la valeur d'une entrée
console.log(statusDeTHP[0] = "La moussaille")
//rajouter des entrées à la fin et au début
console.log(statusDeTHP.push("Flibustier"))
console.log(statusDeTHP.unshift("Pirate"))
//supp le premier élément
console.log(statusDeTHP.pop())
//supp le dernier élément
console.log(statusDeTHP.shift())
//supp 2 éléments à partir du 0
console.log(statusDeTHP.splice(0,2))
//retourne un array issue du array initial (une sorte de sous-array). Ses valeurs seront celles comprises entre l'index 2 (inclus) et 4 (exclus).
console.log(statusDeTHP.slice(2,4))
//effectuer des conversions implicites, par exemple en faisant number + string on obtient un string
let g = 3;
  console.log("Bonjour à tous les "+ g);
  console.log(g + "3");
//inclure la valeur d'une variable au sein d'un string
let numStudent = 4;
let statement = `Dans mon groupe on est ${numStudent} moussaillons`;
console.log(statement);
//longueur d'un mot
let h = "The Hacking Project";
console.log(h.length);
//ou directement 
console.log("The Hacking Project".length);
//recherche d'une lettre dans un mot
console.log("The Hacking Project"[0]);
//faire une recherche au sein du string
console.log("The Hacking Project".indexOf("Hack"));
//les fonctions suivantes permettent de passer en minuscule / majuscule un string
console.log("HACKING".toLowerCase());
console.log("hacking".toUpperCase());
//La fonction split(",") permet de découper un string en fonction d'un séparateur (la virgule ici) pour retourner un array de strings.
const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
const lesson = contentOfTHP.split("-");
console.log(lesson[0]); // "Git"
console.log(lesson[5]); // "JS"
//La fonction join(",") fait l'exact inverse de split(","), elle produit un string en concaténant tous les éléments d'un tableau et en rajoutant, entre chaque élément, un séparateur (une virgule ici)
const contentDeTHP = ["git", "ruby", "rails"];
console.log(contentDeTHP.join());

//On définit un objet JS de la façon suivante (exemple d'un objet comportant des infos sur la session 2 de THP)
let THPSessionNum2 = {
    numOfMouss: 80,
    cities: ["Paris", "Lyon", "Montpellier"],
    successRate: 0.80,
    sessionMoto: "keep pushing to the top"
  };

//Une fois définis, on peut accéder aux attributs d'un objet en faisant myObject.attribut. Exemple (à partir de l'objet ci-dessus) :
console.log(THPSessionNum2.numOfMouss);
console.log(THPSessionNum2.sessionMoto);

//On peut également modifier un attribut ou même en rajouter un avec myObject.attribut = xxxx. Exemple (à partir de l'objet ci-dessus):
THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir

//Tu peux également accéder aux attributs en utilisant la syntaxe myObject['attribut']. C'est très utile quand le nom de l'attribut est contenu dans une autre variable.
let attributName = "successRate";
console.log(THPSessionNum2[attributName]);

//>= signifie "supérieur ou égal à". > signifie strictement supérieur
//<= signifie "inférieur ou égal à". < signifie strictement inférieur
//!== signifie "contenu ou type différent de". Veuillez noter qu'il y a 2 signes "égal".
//=== signifie "contenu ET type égal à". Veuillez noter qu'il y a 3 signes "égal".

//En JS, il existe un opérateur == (deux signes "égal") et un opérateur === (trois signes "égal"). Ils sont très différents : == va comparer uniquement le contenu des deux variables alors que === va comparer le contenu et le type
console.log("36" == 36); // va retourner TRUE car le contenu est identique
console.log("36" === 36); // va retourner FALSE car d'un côté on a un string et de l'autre un number

//bloc if
let number1 = 34;
if(number1 > 0) 
    console.log("number1 est positif");
//bloc if + else
let number2 = 0; //fais ensuite le test avec d'autres valeurs (positives et négatives)
if(number2 > 0) {
  console.log("number2 est positif");
} else if(number2 === 0) {
  console.log("number2 est nul");
} else {
  console.log("number2 est négatif");
} 
//Les opérateurs logiques en JS sont les mêmes qu'en Ruby : && signifie ET, || signifie OU et ! signifie NON. Exemples :
if (true && true) {
    console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
  }
  if (true || false) {
    console.log("ce message s'affiche car avec un OU, si l'une des conditions est à TRUE, le résultat est TRUE");
  } 
  if (!false) {
    console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
  }

  //Quand on a plusieurs scénarios possibles, on peut utiliser la condition switch … case. C'est l'équivalent JavaScript du case … when en Ruby. À noter que l'instruction break permet de sortir d'un case et que tous les cas non décrits dans les case finissent dans la partie default. Voici la syntaxe :
  weekNum = 1; //teste avec plusieurs valeurs
switch (weekNum) {
  case 1:
    console.log("Semaine 1 - Introduction au Code");
    break;
  case 2:
    console.log("Semaine 2 - Découverte de Ruby");
    break;
  case 3:
    console.log("Semaine 3 - Programmation Orientée Objet");
    break;
  case 4:
    console.log("Semaine 4 - Initiation à Rails");
    break;
  case 5:
    console.log("Semaine 5 - Rails intermédiaire");
    break;
  case 6:
    console.log("Semaine 6 - Rails avancé");
    break;
  case 7:
    console.log("Semaine 7 - HTML / CSS et intro au JS");
    break;
  case 8:
    console.log("Semaine 8 - JavaScript de front");
    break;

  default:
    console.log("Cette entrée n'est pas reconnue");
    break;
}

//Dernier point important : comme en Ruby, certaines valeurs peuvent être évaluées à FALSE dans le code. Mais en Ruby, ça n'est valable que pour la valeur nil alors qu'en JS, c'est le cas de la valeur undefined, du nombre 0 et du string vide "". Illustration :
let number = 0; //fais aussi le test avec un chiffre non nul
if (number) {
  console.log("ce message ne s'affiche que si number est non nul ");
}

let string = ""; //fais aussi le test avec un mot non vide
if (string) {
  console.log("ce message ne s'affiche que si string est non vide");
}

let myVariable1 // ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
if (myVariable1) {
  console.log("ce message ne s'affiche que si myVariable contient une valeur ");
}
//On peut faire des boucles for basées sur la valeur d'une variable (un compteur). La syntaxe est la suivante :
//for([initialisation]; [condition]; [incrémentation]) { };. Par exemple :
for(var count = 0; count <=5; count++){
    console.log(`on va compter jusqu'à 5 : ${count}`);
  }
  
  console.log(count); // Va créer une erreur car count est en let et donc son scope est limité au bloc for.
  //passe count en var pour tester ce que ça donne

//On peut également faire des boucles while sous la forme while([condition]) { }; qui tourne tant que la condition est vérifiée. Exemple en utilisant la commande prompt() qui ouvre une fenêtre d'input dans ton navigateur :
/*let answer = "";
while(answer !== "oui") {
console.log("alors ?")
answer = prompt("Tu kiffes THP ?");
} 

console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D

//Tu peux sortir d'une boucle while en utilisant un break. Exemple :
let word = "";
let letter;

while (true) {
    letter = prompt('Tape UNE lettre stp :');

    if (letter) {
        word += letter; //on rajoute la lettre saisie à la suite du mot
        console.log(word);
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        break; // On quitte la boucle
    }
}
console.log(`voilà ce que tu as tapé : ${word}`);*/

//On peut parcourir les array et les objets en JS grâce à l'instruction for in. Pour un array, elle permet d'obtenir un compteur qui va prendre toutes les valeurs entre zéro et le dernier index. Pour un objet, le compteur va prendre chaque valeur des attributs, une à une. Illustration :
//On déclare d'abord un array
let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

//On déclare ensuite un objet
let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

console.log("**********Parcourons le array :")
for(let index in weeksOfTHPArray) {
  console.log(index); // index va aller de 0 à 3
  console.log(weeksOfTHPArray[index]);
}

console.log("**********Parcourons l'objet :")
for(let weekAttribut in weeksOfTHPObject) {
  console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
  console.log(weeksOfTHPObject[weekAttribut]);
}
//JavaScript dispose même d'un .forEach() qui ne fonctionne que sur les array. Il permet d'obtenir directement la valeur stockée à chaque index du array. Illustration en reprenant le array weeksOfTHPArray ci-dessus :
console.log("**********Parcourons le array en forEach :")
weeksOfTHPArray.forEach(weekContent => {
  console.log(weekContent)
});

//Une fonction se définit en faisant function nomDeMaFonction(){ //le code };. On l'appelle ensuite en faisant un nomDeMaFonction(). À noter qu'en JS, contrairement au Ruby, une fonction est toujours exécutée avec des parenthèses. Illustration d'une fonction de base :
function sayHello() {
    console.log("Bonjour toi !");
  }
  
  sayHello();

//Comme en Ruby, on peut définir des données en entrée de la fonction et des données à retourner avec return. Exemple :
/*function multiply(inputNumber1, inputNumber2) {
    let outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }
  
  console.log(multiply(2, 3));
  console.log(multiply(2, multiply(2,3)));
  console.log(outputNumber); // Va créer une erreur car la variable en let n'existe pas en dehors de la fonction*/

//JavaScript nous permet de déclarer d'autres façons nos fonctions. Par exemple par le biais de fonctions anonymes (sans nom) que l'on peut ensuite affecter à une variable en faisant myVariable = function(entrée1, ...){ }! C'est un mode de fonctionnement que tu n'as jamais vu en Ruby. Illustration :
/*const multiply = function(inputNumber1, inputNumber2) {
    let outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }
  
  console.log(multiply(2, 3));
  
  const otherMultiply = multiply; //On peut ainsi affecter la fonction à une autre variable
  console.log(otherMultiply(2, 3));*/

//Enfin, sachez que depuis les dernières mises à jour ES, on peut également déclarer les fonctions anonymes de façon plus épurée avec l'opérateur =>. Pour reprendre l'exemple ci-dessus, cela donnerait :
const multiply = (inputNumber1, inputNumber2) => {
    let outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }