'use strict';

/*function declaration:
function functionname (...) {
    ...
}*/
/*function Osszead(a, b) {
    return a + b;
}
let Eredmeny = Osszead(123, 25);

//document.getElementById("kiir").innerText = Eredmeny

console.log(Eredmeny);
console.log(Osszead(-96, 485));*/

/*function Osszead(){
    let elso = window.prompt("Kérem az első számot: ", 0);
    let masodik = window.prompt("Kérem a második számot ", 0);
    console.log(`Az eredmeny: ${Number(elso) + Number(masodik)}`);
}*/


/*function ehes(){
    let valasz = window.confirm("Éhes vagy?");
    if (valasz == true){
        window.alert("Akkor egyél baszod");
    }
    else{
        window.alert("Fat fuck")
    }
}
ehes();*/

/*let Osszead = function(a, b){
    return a + b;
}
console.log(Osszead(123, 586));*/

/*let ehes = function(){
    if (window.confirm("Éhes vagy?")) {
        window.alert("Akkor egyél")
    }
    else{
        window.alert("Dagadt vagy, minek eszel?")
    }
}
ehes();*/

/*function dumb(){
    let valasz = window.confirm("Tudsz számolni?")
    if (valasz == true) {
        let elso = window.prompt("Kérem az első számot: ", 0);
        let masodik = window.prompt("Kérem a második számot: ", 0);
        console.log(`Az eredmény: ${Number(elso) + Number(masodik)}`);
    }
    else{
        window.alert("Are dumb, stupid or dumb?")
    }
}
dumb();*/

/* Arrow function */

//let Osszead = function(a, b){
  //  return a + b;
//}

let Osszead = (a, b) => {a + b}; 

Osszead();
