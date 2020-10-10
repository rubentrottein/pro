let sections = document.getElementsByTagName("section");
let nav = document.getElementsByTagName("nav")[0];
nav.innerHTML = `<ul>
<a href="../index.html"><li>Accueil</li></a>
<a href="#title"><li>Pro</li></a>
<li id="logo">
<img src="img/logo.png" alt="logo" />
</li>
<a href="enseignement/index.html"><li>Enseignement</li></a>
<a href="artAsso/index.html"><li>Art et Asso</li></a>
`;
for(let i=0; i<sections.length;i++){
    nav.innerHTML += `
        <a href="#`+sections[i]+`"><li>Art et Asso</li></a>
    `
}
nav.innerHTML += `</ul>`;