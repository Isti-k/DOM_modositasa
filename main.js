// fogjuk meg az azon nevezetű elemet!
const azonELEM=document.getElementById("azon")
const azonELEM2=document.querySelector("#azon")
console.log(azonELEM) //típus html elem
console.log(typeof azonELEM) 
//típus html elem

azonELEM.innerHTML="Alakul a JS!"

//kartya elem elérése

const kartyaELEM=document.getElementsByClassName("kartya")
console.log(kartyaELEM) //típus html collection, lista
// a 2. kártyába szeretnék beírni
kartyaELEM[1].innerHTML="Beleírtunk a második kártyába!"

const kartyaELEM2=document.querySelector(".kartya")
console.log(kartyaELEM2) // Az első ilyen html elemet

const kartyaELEM3=document.querySelectorAll(".kartya")
console.log(kartyaELEM3) // modelist - lista

// 3. divet akarom elérni, írjunk bele valamit
kartyaELEM3[2].innerHTML+="<p>hozzáírunk valamit</p>"

// fogjuk meg a button gombot
const buttonELEM=document.querySelectorAll("button")[0]
console.log(buttonELEM)

// kattintsunk rá a gombra, ráteszünk egy eseménykezelőt
buttonELEM.addEventListener("click",gombraKattint)

// ez a függvény csak referencia, hivatkozás a függvényre
function gombraKattint(){
    //alert("Hurrá, rákattintotttál a gombra!")

/* Ha rákkattintunk a gombra, akkor az első kártyába
kerüljön hozzá a 4. kártya tartalma is. */
    kartyaELEM3[0].innerHTML += kartyaELEM3[3].innerHTML;

}


