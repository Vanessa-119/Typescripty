//les bases du typescript
// typage et declaration des variables
//typage implicite:ici par besion de specifier le type de la variable
var nombre=2;
console.log(nombre);

//typage explicite :type string
var chaineDeCaractere :string;
chaineDeCaractere="lundi"
console.log(chaineDeCaractere);

// declaration et instensation de la variable

var jour1:string='mardi'
var jour2:string="mercredi"; 
console.log('le premier jour est ' +jour1+  ' le deuxiemme jour es ' +jour2);

// declarration de tableau
var tableau :number[]=[1,2,3,4]
console.log(tableau)

// deuxiemme declaration de tableau en utlisant Array ceci rend le tableau non statique et de taille variant
var tableau :Array<number>=[1,2,45]

 // declaration de tuples , les tuples sont des tableaux qui prennent plusieurs types
 var table :[number,string,any]=[78,'bonjour',7]
 console.log(table)
 // pour acceder a un element du tableau
 console.log(table[2])
 //pour modifier un element du tableau
 table[0]=77
 console.log(table)
// rendre un element du tableau optionel: le ? rend l'element optionnel
var tables :[string,number?,any?]=['sweet']
console.log(tables)

 // le type any montre veut dire que la variable peut prendre n'importe quel valeur
 var texte:any
 texte=23
 texte='texte'
 var num :number=texte
 console.log(num)

 // le type unknown
 var text :unknown
 text=88
 text='pluie'
 text=texte+1
 console.log(text)
 
 // declaration d'object
 var object :{
     nom:string
     prenom:Array<string>
 }
 object = {
    nom:'tientcheu',
    prenom:['raisa','ret']
 }
 console.log(object.prenom.length)
 

 // le type unknown e




// il faut defini les types des parametres.
function addiction (firstnum:any,secondnum:any){
    return firstnum+secondnum;
}

console.log(addiction(5,6));

function division(x:number,y:number=1){
    return x/y
}
// var resultat=division(10);

console.log(division(10,4));
//si le deuxiemme parametre n'est pas donner la fonction va juste l'ignorer
function division1 (x:number,y?:number){
    if(y)
        return x/y
        return x;
    
}
 var resultat_division2=division(12);
 console.log(resultat_division2);

//cette fonction nous permet de gerer un parrametre avec plus type et d'emettre des condictions sur lui
 function stringOrNumber(param1:string|number,param2:number):number{
     if(typeof param1 == "string")
     return param1.length+param2;
     else
     return param1+param2;
 }
 var resultat_string=stringOrNumber("bombe",4);
 var resultat_string=stringOrNumber(55,4);
 console.log(resultat_string);

//function flechee
// let function (params:type):typeValeurRetour => {
//     les instructions;
//     }

let somme = ( a:number,b:number):number=> {return a+b; }

var tab=[1,2,3]
var resultat_forEach =tab.forEach(elt => console.log(elt));

var resustat_map=tab.map(elt=>elt+3);
var resultat_filter=tab.filter(elt=>elt>6);
console.log(resultat_forEach);
var resultat_composition=tab.map(elt=>elt+3).filter(elt=>elt>5).forEach(elt=>console.log(elt));
console.log(resultat_composition);



