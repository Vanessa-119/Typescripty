"use strict";
var personne = [
    { type: 'user', nom: 'Max Musterman', age: 45, ville: ['Nantes', 'lyon', 'Nices'] },
    { type: 'admin', nom: 'Max Musterman', age: 55, ville: ['Nantes', 'paris'] },
    { type: 'user', nom: 'Max Musterman', age: 55, ville: ['paris'] },
    { type: 'admin', nom: 'bruce Willis', age: 64, ville: ['paris', 'Nantes'] },
];
// cette fonction prend en parametre un element de type string et retourne un tableau d'object 
function getElemetnByType(type) {
    return (personne.filter(function(elt) { return elt.type == type; }));
}
var resultat = getElemetnByType('user');
console.log(resultat);
// fonction qui retourne la liste des personnes ayant dans villes ,la ville passee en parametre.
function getElementByVille(ville) {
    return (personne.filter(function(elt) { return elt.ville == ville; }).map(function(elt) { return elt.nom; }));
}
var resultat1 = getElementByVille(['Nantes']);
console.log(resultat1);
// function qui retourne la liste des personnes n'ayant pas dans ville,ville passee en parametre
function getOtherVilleThan(ville) {
    return (personne.filter(function(elt) { return elt.ville != ville; }).map(function(elt) { return elt.nom; }));
}
var resultat2 = getOtherVilleThan(['Nantes']);
console.log(resultat2);
// fonction qui retourne un tableau d'objects:chaque object contient le non d'une personne ainsi que son nombre de villes 
function countVille(nom) {
    return (personne.filter(function(elt) { return elt.nom == nom; }).map(function(elt) { return { non: elt.nom, nbre_de_ville: elt.ville.length }; }));
}
console.log(countVille('bruce Willis'));
//fonction qui retourne les personnes dont le nombre de ville d'intervention correspond au parametre nbr
function getByVilleNumber(nbr) {
    return (personne.filter(function(elt) { return elt.ville.length == nbr; }));
}
console.log(getByVilleNumber(2));
//fonction qui retourne un tableau d'objects: chaque object contient le nom d'une personne ainsi que le nombre total de caractere de ses villes 
function totalCaractereOfVille() {
    return (personne.map(function(elt) { return { nom: elt.nom, total: elt.ville.reduce(function(sum, x) { return sum + x.length; }, 0) }; }));
}
console.log(totalCaractereOfVille());
// fonction qui retourne le nombre de personnes qui intervient dans la ville passe en parametre
function countByVille(ville) {
    var listeVillle = personne.filter(function(elt) { return elt.ville == ville; }).map(function(elt) { return elt.nom; });
    return listeVillle.length;
}
console.log(countByVille(['Nantes']));
//Q12 une fonction qui retourne le nom de la personne la plus jeune par ville (voir ci-dessous).