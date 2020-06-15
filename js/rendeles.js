
function calc() {
    let amount = document.querySelector(".amount");
    let price = 1200;
    let ff = parseInt(amount.value.trim()) * price;                 //trim kiveszi a szóközöket //
    let ShowAmont = document.querySelector("span.ShowAmount");
  ff = isNaN( ff) ? 0 : ff ; // Ha ShowAmont nem értelmezhető, akkor 0 legyen, ha értelmezhető, akkor maradjon az értéke  // 
    if (ff>12000) { alert ("Kérjük max 10 db-ot rendeljen"); return;}     //return megszakítja a függvényt//
    if (ff<1200) { alert ("Kérjük min 1 pizzát rendeljen") ; return;} 

   // alert("Fizetendő összeg= " + ff); //
    ShowAmont.innerHTML = ff;                // a ShowAmount HTML elemnek megvátoztatja az értékét ff-re//
}

function testemail() {
     let levell = document.querySelector(".email");
   if (levell.value.indexOf("@")<0 || levell.value.indexOf(".")<0) alert("Kérjük ellenőrizze az email címet"); 
  
}

/* 
let name = "Péter";
name.toUpperCase();    PÉTER
name.toLowerCase();    péter
"DR" + name;
let title = "dr ";
title.copncat(name);     dr Péter

Boolen(0)    eredmény false
Boolen(121)  minden eredménye, ami nem 0 true

0 == false  eredmény true
0 === false eredménye false mert különböző típusúak

 */

 let test = "Hare Krsna";
 test.indexOf("Hare");
 test.replace("Hare" , "Krisna");