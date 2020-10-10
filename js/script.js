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

/**Smooth Scrolling */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*Sticky Nav (onClick)*

document.getElementById("back").addEventListener("click", function(){
    document.getElementsByTagName("nav")[0].style.position = "initial";
    sectionNb = 0;
});
document.getElementById("arrow").addEventListener("click", function(){
    document.getElementsByTagName("nav")[0].style.position = "fixed";
    reScroll();
});

function reScroll(){
    //setInterval(100, getScroll);
    function getScroll(){
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        clearInterval();
    }
}

/*Navigation au click */

document.getElementById("arrow").addEventListener('click', nextSection);
function nextSection(){
    document.getElementById("arrow").style.position = "fixed";
    switch (sectionNb) {
        case 0:
            this.href="#metier";
            sectionNb = 1;
        break;
        case 1:
            this.href="#presentation";
            sectionNb = 2;
        break;
        case 2:
            this.href="#services";
            sectionNb = 3;
        break;
        case 3:
            this.href="#title";
            sectionNb = 0;
        break;
        default:
            this.href="#title";
            sectionNb = 0;
    }
    console.log("current is " + sectionNb);
}
document.getElementById("back").addEventListener('click', function (){
    sectionNb = 0;  
    console.log("current is " + sectionNb);
});

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
/**/