let sectionTitle = ["Visiter","Métier", "Présentation", "Services", "Portfolio","Accueil"];
let sectionLinks = ["#title","#metier", "#presentation", "#services", "#portfolio","#accueil"];

let sections = document.getElementsByTagName("section");
let nav = document.getElementsByTagName("nav")[0];
nav.innerHTML = `
<li><a href="#title">Accueil</a></li>`;
for(let i=1; i<sectionLinks.length;i++){
    nav.innerHTML +="<li><a href='"+sectionLinks[i]+"'>"+sectionTitle[i]+"</a></li>";
    if (i===sectionLinks.length/2-1){
        nav.innerHTML +="<li id='logo' ><a href='index.html'><img src='img/logo.png' alt='Logo' /></a></li>";
    }
}