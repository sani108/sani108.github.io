
function calc() {
    let amount = document.querySelector(".amount");
    let price = 1200;
    let ff = parseInt(amount.value.trim()) * price;                 //trim kiveszi a szóközöket //
    let ShowAmont = document.querySelector("span.ShowAmount");
  ff = isNaN( ff) ? 0 : ff ; // Ha ShowAmont nem értelmezhető, akkor 0 legyen, ha értelmezhető, akkor maradjon az értéke  // 
    if (ff>12000) { alert ("Kérjük max 10 db-ot rendeljen"); return;}     //return megszakítja a függvényt//
    if (ff<1200) { alert ("Kérjük min 1 pizzát rendeljen") ; return;} 
    let feltet = 0;
    if (document.getElementById('rcheese').checked) feltet=300;
    if (document.getElementById('rdouble-cheese').checked) feltet=600;


   // alert("Fizetendő összeg= " + ff); //
    ShowAmont.innerHTML = ff + feltet * parseInt(amount.value.trim());                // a ShowAmount HTML elemnek megvátoztatja az értékét ff-re//
}

function testemail() {
     let levell = document.querySelector(".email");
   if (levell.value.indexOf("@")<0 || levell.value.indexOf(".")<0) alert("Kérjük ellenőrizze az email címet"); 
  
}

documents.querySelectorAll