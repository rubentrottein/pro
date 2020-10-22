/*Fonctions / listeners temporaires*/

//masquer éléments via h2
document.getElementsByTagName("h2")[0].addEventListener('click', function (){toggle("article",0);});

function toggle(elt, nb){
    let element=document.getElementsByTagName(elt)[nb];
    if(hide===true){
        element.style.display = "block";
        hide=false;
    } else {
        element.style.display = "none";
        hide=true;
    }
}
//Activer le mode de navigation par défaut (scroll)
document.getElementsByTagName("h1")[0].addEventListener("click", function (){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
})
/*animation de l'écran d'accueil*/

let hide=false;
let sectionNb = 1;
let scrollCount=0;
window.addEventListener('load', homeScreen);
function homeScreen(){
    document.getElementsByTagName("h1")[0].style.left += '10%';
    document.getElementsByTagName("em")[0].style.right = '10%';
    document.getElementsByTagName("a")[0].style.bottom = '10%';
}

/*Scroll Events (Beta) *
window.addEventListener('scroll', (event) => {
    scrollCount +=1; 
});
if(scrollCount > 38){
    alert(scrollCount);
    console.log("Fixed Nav");
    nav.style.position = 'fixed';
}

/*Navigation au click */

document.getElementById("arrow").addEventListener('click', nextSection);
function nextSection(){
    document.getElementById("arrow").style.position = "fixed";
    let arrow= document.querySelector('#arrow i');
    arrow.innerHTML = sectionTitle[0];
    switch (sectionNb) {
        case 0:
            this.href="#metier";
            sectionNb = 1;
            arrow.innerHTML = sectionTitle[2];
        break;
        case 1:
            this.href="#presentation";
            sectionNb = 2;
            arrow.innerHTML = sectionTitle[3];
        break;
        case 2:
            this.href="#services";
            sectionNb = 3;
            arrow.innerHTML = sectionTitle[4];
        break;
        case 3:
            this.href="#portfolio";
            sectionNb = 4;
            arrow.innerHTML = sectionTitle[5];
        break;
        case 4:
            this.href="#title";
            sectionNb = 0;
            arrow.innerHTML = sectionTitle[0];
        break;
        default:
            this.href="#title";
            sectionNb = 0;
            arrow.innerHTML = sectionTitle[0];
        }
    }
    /* Back Dynamique
    document.getElementById("back").addEventListener('click', function (){
        if (sectionNb !== undefined && sectionNb > 0){
            sectionNb -= 1;
            document.querySelector("#back p").innerHTML = "Revenir à " + sectionTitle[sectionNb-1];
            document.querySelector("#back").href= sectionLinks[sectionNb-1];
        } else {
            sectionNb =0;
            document.querySelector("#back p").innerHTML = "Revenir à " + sectionTitle[0];
            document.querySelector("#back").href= sectionLinks[0];
        }
    });
    */

/*Sticky Nav (onScroll) */
    window.onscroll = function () {
        if(window.pageYOffset > 900){
            nav.style.position="fixed";
            nav.style.top = 0;
        } else {
            nav.style.position="initial";
            nav.style.top = 0;
        }
    }

/*presentation*/
let cvDl=document.querySelectorAll("#presentation figure");
for (let i=0; i<cvDl.length;i++){
    cvDl[i].addEventListener("mouseover", function(e){
        document.querySelectorAll("#presentation figcaption")[i].style.bottom = "0";
    });
    cvDl[i].addEventListener("mouseleave", function(e){
        document.querySelectorAll("#presentation figcaption")[i].style.bottom = "-10em";
    });
};