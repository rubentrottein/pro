class Project{
    constructor(name,description,tech,image,link){
        this.name = name;
        this.description = description;
        this.tech = tech;
        this.image = image;
        this.link = link;
    }
}

let troc = new Project("Troc!", "Site E-commerce","Html, CSS, JS, PHP", "img/portfolio/1.png","https://mistertea.fr/troc");
let eshop = new Project("Eshop", "Simulation site Front","Html, CSS, JS", "img/portfolio/2.png","https://mistertea.fr/eshop");
let zoning = new Project("Playstation 5", "Site Vitrine, Zoning","Html, CSS, JS", "img/portfolio/3.png","https://mistertea.fr/zoningExport");
let natureEmoi = new Project("natureEmoi", "Challenge CSS","Html, CSS", "img/portfolio/4.jpg","https://mistertea.fr/natureEmoi");
let wordpress = new Project("Mistertea V1", "Site perso sous Wordpress","Wordpress", "img/portfolio/5.png","https://mistertea.fr/");
let cv = new Project("CV2", "CV Simple","HTML/CSS", "img/portfolio/6.png","https://mistertea.fr/cv3");
let java = new Project("A ajouter", "Projet Java","Java", "img/portfolio/7.png","https://mistertea.fr/UnJourUnStatut");
let js = new Project("A ajouter", "Jeu JavaScript","JS", "img/portfolio/8.png","https://mistertea.fr/cv1");

let portfolio = [eshop, troc, zoning, natureEmoi, wordpress, cv, java, js];
let item = document.getElementsByClassName("item");
let figure = document.querySelectorAll("#portfolio a");

for (let i=0; i<portfolio.length;i++){
    item[i].innerHTML = `
    <a target="blank" href="`+portfolio[i].link+`">
        <figcaption>
            <div>
                <h3>`+ portfolio[i].name +`</h3>
                <p>`+ portfolio[i].description +`</p>
                <i>`+ portfolio[i].tech +`</i>
            </div>
            <button> Visiter </button>
        </figcaption>
    </a>
    `;
    item[i].style.background = "url("+portfolio[i].image+")";
    item[i].style.backgroundSize = "cover";
    item[i].addEventListener("mouseenter", function(e){
        document.querySelectorAll(".item figcaption")[i].style.bottom = "3%";
    });
    item[i].addEventListener("mouseleave", function(e){
        document.querySelectorAll(".item figcaption")[i].style.bottom = "-45em";
    });
}