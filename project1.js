"use strict";
//les bases du typescript
// typage et declaration des variables
//typage implicite:ici par besion de specifier le type de la variable
var nombre = 2;
console.log(nombre);
//typage explicite :type string
var chaineDeCaractere;
chaineDeCaractere = "lundi";
console.log(chaineDeCaractere);
// declaration et instensation de la variable
var jour1 = 'mardi';
var jour2 = "mercredi";
console.log('le premier jour est ' + jour1 + ' le deuxiemme jour es ' + jour2);
// declarration de tableau
var tableau = [1, 2, 3, 4];
console.log(tableau);
// deuxiemme declaration de tableau en utlisant Array ceci rend le tableau non statique et de taille variant
var tableau = [1, 2, 45];
// declaration de tuples , les tuples sont des tableaux qui prennent plusieurs types
var table = [78, 'bonjour', 7];
console.log(table);
// pour acceder a un element du tableau
console.log(table[2]);
//pour modifier un element du tableau
table[0] = 77;
console.log(table);
// rendre un element du tableau optionel: le ? rend l'element optionnel
var tables = ['sweet'];
console.log(tables);
// le type any montre veut dire que la variable peut prendre n'importe quel valeur
var texte;
texte = 23;
texte = 'texte';
var num = texte;
console.log(num);
// le type unknown
var text;
text = 88;
text = 'pluie';
text = texte + 1;
console.log(text);
// declaration d'object
var object;
object = {
    nom: 'tientcheu',
    prenom: ['raisa', 'ret']
};
console.log(object.prenom.length);
// le type unknown e
// il faut defini les types des parametres.
function addiction(firstnum, secondnum) {
    return firstnum + secondnum;
}
console.log(addiction(5, 6));
function division(x, y) {
    if (y === void 0) { y = 1; }
    return x / y;
}
// var resultat=division(10);
console.log(division(10, 4));
//si le deuxiemme parametre n'est pas donner la fonction va juste l'ignorer
function division1(x, y) {
    if (y)
        return x / y;
    return x;
}
var resultat_division2 = division(12);
console.log(resultat_division2);
//cette fonction nous permet de gerer un parrametre avec plus type et d'emettre des condictions sur lui
function stringOrNumber(param1, param2) {
    if (typeof param1 == "string")
        return param1.length + param2;
    else
        return param1 + param2;
}
var resultat_string = stringOrNumber("bombe", 4);
var resultat_string = stringOrNumber(55, 4);
console.log(resultat_string);
//function flechee
// let function (params:type):typeValeurRetour => {
//     les instructions;
//     }
var somme = function (a, b) { return a + b; };
var tab = [1, 2, 3];
var resultat_forEach = tab.forEach(function (elt) { return console.log(elt); });
var resustat_map = tab.map(function (elt) { return elt + 3; });
var resultat_filter = tab.filter(function (elt) { return elt > 6; });
console.log(resultat_forEach);
var resultat_composition = tab.map(function (elt) { return elt + 3; }).filter(function (elt) { return elt > 5; }).forEach(function (elt) { return console.log(elt); });
console.log(resultat_composition);
