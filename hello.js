/* boite de dialogue Nom Prénom Age */
var prenom = prompt("Quel est votre prénom ?");
var nom = prompt("Quel est votre nom ?");
var age = prompt("Quel est votre age ?");

if (nom == null || nom == ""){
  txt = "ré-essais";
} 

else{
  txt = "Hello " + prenom + " " + nom + " comment vas-tu ? tu es né il y a " + age + " ans.";
} 


/* Dire si un nombre est positif ou négatif */
var value = prompt("Entrez un nombre : ");
if (value > 0){
  alert("Ce nombre est positif");
}
if (value < 0){
  alert("Ce nombre est négatif")
}
if (value == 0){
  alert("ce nombre est nul")
}


/*boucle allant de 100 à 1 (POUR) */
var i;
for (i = 100; i >= 1; i--) {
  console.log(i);
}


/* boucle allant de 100 à 1 (TANT QUE) */
var i = 100;
while (i >=1) 
{i--;
console.log(i);}


/* boucle avec un mot à la place de (par exemple) 50 */
var i = 1;
while (i <= 100){
if(i==50){
  console.log("moitier du chemin")
}
else
  console.log(i);
  i = i + 1;
}






/* EXERCICE OPENCLASSROOM */
console.log("Bonjour en JavaScript !");
// Cette ligne est un commentaire : elle n'est pas exécutée
console.log("Faisons quelques calculs.");
console.log(4 + 7);
console.log(12 / 0);
console.log("Au revoir !");















