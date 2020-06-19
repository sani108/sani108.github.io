alert("Hello");
console.log("Hello, this is a console message");
const age= 44;
let UserAge = 38;
let name = "Steve";
alert("Type of age is= "+ typeof age);
6 % 3; //modulus, maradék//
3 ** 2; //3 a másodikon//
let username = "Géza";
username ='IStván';
alert(username  +" hossza " + username.length + " karakter");
let door = 11;
let ddoor = door * 2; //implicit típuskonverzió, a program megróbálja autómatikusan konvertálni//
let HouseNumber = String (door); //a számot szöveggé alakítja//
name = Number (UserAge) ;  //átírja a name értékét, és a típusát is számmá változtatja//

let amount=33.24325;
amount.toFixed(2); // csak 2 tizedesjegyet hagy meg a sztringgé alakításnál//
amount.toPrecision(2); //összesen 2 karakter lesz az eredmény//
parseInt("2")  //számmá alakít egy szöveget//
parseFloat("22.45")   //számmá alakít egy szöveget//

 name = "Péter";
name.toUpperCase();    //PÉTER
name.toLowerCase();   // péter

let title = "dr ";
title.copncat(name);    // dr Péter

Boolen(0) ; //   eredmény false
Boolen(121) ; // minden eredménye, ami nem 0 true

0 == false ; // eredmény true
0 === false ; // eredménye false mert különböző típusúak

//TÖMNBÖK

let cars = ["WV", "skoda", "volvo"];
 cars = ["WV", 32, true]; //a tömbök lehetnek vegyesek is: 
//többdimenziós tömb (mátrix, nem fontos, hogy minden sor egyforma hosszu legyen):
let users2 = [
[1, "joe", true] ,
[2, "steve", false] ,
];
 Array.isArray(users); // lekérdezi, hogy egy változó tömb-e: 
 cars.push ("trabant"); //-Elemm hozzásadása a tömb végére:
 cars.pop (); //-Elem eltávolítása a végéről    :
cars.unshif ("trabant"); //-Elemm hozzásadása a tömb elejéhez: 
cars.shift ();  //-Elem eltávolítása a elejéről    :       visszaadja az eltávolított elemet, és módosítja a tömböt

//Tömb vágása illesztése:
//cars.slice(mettől , meddig)   //    visszadja a tömb megjelölt részét, a tömböt NEM módosítja
//cars.splice(mettől , kivágandó elem száma, "beillesztendő elemek")    //   visszadja a tömb megjelölt részét, KIVÁGJA a tömbből
//cars.splice(mettől , kivágandó elem száma)   //    visszadja a tömb megjelölt részét, KIVÁGJA a tömbből
//cars.splice(mettől , 0, "beillesztendő elemwek")    //  "mettől" elem után nem vág, és beszúrja a "beillesztendő elem"-et
//cars.join(" ,") // kiírja egy sztringbe a tömb összes elemét

//---------
//Ciklusok:
//---------
for(let i=0 ; i<5 ; i++)
{  alert(i);
if (i > 2) continiue; // visszaugrik a ciklusfejbhez//
if (i > 3) break;     // kilép a ciklusból
}

// operatorok: https://www.tutorialsteacher.com/javascript/javascript-operators

//tenary operátor: 
let canvote = age < 18 ? false : true ;




let test = "Hare Krsna";
test.indexOf("Hare");
test.replace("Hare" , "Krisna");

//---------------   
// For in ciklus    - a kulcsokon megy végig
//---------------
let objects = {name: "Kiss Ramóna", age: 22 };

for (const property in objects) {console.log(`${property}: ${objects[property]}`); }
for (const property in objects) {console.log(property, objects[property]); }


//---------------   Nem a kulcsokon, hanem az értékeken megy végig
// For of ciklus    Array-like, tömb szerű változókon lehet alkalmazni
//---------------

let user3 = { name: "Kiss Ramóna", age: 22 };
for ( let entry of Object.entries(user3) ) {
  console.log( `${entry[0]}: ${entry[1]}` );
}

let iterable = 'bloomberg';                            // sztringet tömbként értelmezi, és azon megy körbe
for (let value of iterable) { console.log(value); }

/*--------------
--metódusok
----------------
Találkoztál már metódusokkal, amiket bizonyos objektumokra meg lehet hívni.
 Array.isArray(), Object.keys(), Object.etries() ismerősek? 
 Ezek tipikus metódusok, amelyek már alapból meg vannak írva és használhatod őkat. 
 A metódus gyakorlatilag egy függvény, ami egy objektumhoz van kötve és nem csk úgy "lóg a levegőben". */

 //SAját metódusok  : A product objektum egyik tulajdonsága egy függvény. Ezt metódusnak hívjuk.
 let product = {
    price: 1000,
    desc: function() {       return "This is an awesome product.";    }
               }
  
  console.log( product.desc() );

  // THIS ... a lenti példában a a this=person, mivel a this a szülőre mutat
  var person = {  firstName: "John",   lastName : "Doe",  fullName : function() {    return person.firstName + " " + this.lastName;  }

  //<button onclick="this.style.display='none'"> Click to Remove Me! </button>  // itt pedig a "this" a button lesz.

  /* Objectum lekérdezése
  Object.keys(person);
  Object.values(person);
  Object.entries(person);
  Object.entries(person[1]);
  Object.entries(person[1][1]); */

  //TIPIKUS USER METÓDUSOKKAL
  let user = {
    "_id": "5cda967e7dc7132184fca4c7",
       "isActive": true,
       "balance": 1500,
       "getBalance": function(currency = "$") {   return `${currency} ${this.balance}`;   } //metódus
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "name": {  "first": "Imelda",  "last": "Compton" },
    "getFullname": function() { return `${this.name.last} ${this.name.first}`}   //metódus
    "company": "ENERVATE",
    "email": "imelda.compton@enervate.name",
    "phone": "+1 (949) 487-3823",
    "address": "120 Norwood Avenue, Canoochee, Washington, 6049",
        "greeting": "Hello, Imelda! You have 7 unread messages.",
    "favoriteFruit": "apple",
  };

//--------------
//Arrow function
//---------------
let adder= function (n1 , n2) {return n1+n2;},
let adder =  (n1 , n2) => n1 + n2,
let adder =  (n1 , n2) =>  n1 + n2 ,

let udv = function (nev) {return `Hello${nev}`;},
let udv = nev => 'Hello'+nev, 





