// az egyik input tulajdonságának módosítása//
document.getElementById("1").getAttribute("id");            //attribútum kiolvasása //
document.getElementById("1").setAttribute('name', "hello");   //attribútum megváltoztatása//

function mod() {
/*  let imp = document.getElementById("inp").value;
  let atr = document.getElementById("atr").value;
  let val = document.getElementById("val").value;
  alert(document.getElementById("1").getAttribute("name"));
  document.getElementById("1").setAttribute('atr', "val"); 
    document.getElementById("1").style.backgoundColor = "red";
     let mynodelist = document.querySelectorAll("input");
 for ( let i=0; i<mynodelist.length; i++)  {mynodelist[i].style.backgroundColor = szin ;}
 
 */
    let szin = document.getElementById("val").value;   // a szín inputmező értéke
     let azon = document.getElementById("inp").value   // id inputmező: mekyiket változtassa
    let valt = document.getElementById(azon);         //Elemnet kiválasztása a változtassa
       valt.style.backgroundColor = szin ;


}

function wr(azon) { 
    let valt = document.getElementById("inp");         //Elemnet kiválasztása a változtassa
       valt.setAttribute("value", azon);
       let szinid =document.getElementById(azon).getAttribute("backgroundColor");
       document.getElementById("val").setAttribute("backgroundColor", szinid);

    }

    //---------------
    //ELEM LÉTREHOZÁSA - törlése
    //--------------
    function kiir() { 

    let helptext = document.createElement("samll");
    helptext.innerHTML= "itt egy súgó file-t  lehetne megjeleníteni" ;
    helptext.id = "helptext";
    let parent = document.getElementById("help");   //kiválasztja a szülőt

    if (document.getElementById("help").childElementCount == 2) { parent.appendChild(helptext); return;  }
    if (document.getElementById("help").childElementCount > 2)  parent.removeChild(document.getElementById("helptext")); 
            
                    }
                    /*
   window.addEventListener("resize", funkction 
   {
     console.log(this,innerHeight) ; //document.getElementById("szelesseg").innerHTML(this.innerWidth);
   }); */

   window.addEventListener("resize", function(){
     // document.getElementById("demo").innerHTML = "Hello World!";
     console.log(this,innerHeight, this.innerWidth) ;
     let par = this.innerWidth;
     document.getElementById("szelesseg").innerHTML = par;
     let parm = this.innerHeight;
     document.getElementById("magassag").innerHTML = parm;
    });
 //   alert(azon);