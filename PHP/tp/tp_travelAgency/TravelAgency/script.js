let inputNom = document.getElementById("name");
let inputMail = document.getElementById("email");
let envoiBouton = document.getElementById("envoi");

envoiBouton.disabled = true;

function nonVide() {
    if (inputNom.value != "" && inputMail.value != "") {
        envoiBouton.disabled = false;

    } else {
        envoiBouton.disabled = true;

    }
}
inputNom.addEventListener("keyup", nonVide);
inputMail.addEventListener("keyup", nonVide);

var label = document.getElementsByTagName("label");


function add_red_star(initial_text) {
    var red_star = document.createElement("sup");
    var red_star_content = document.createTextNode(" *");
    red_star.appendChild(red_star_content);
    red_star.style.color = "red";
    initial_text.appendChild(red_star);
}
add_red_star(label[0]);
add_red_star(label[1]);


function verifMail() {
    if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(inputMail.value)) {
        alert("Adresse e-mail valide !");
        document.querySelector('h3').textContent = 'Déjà contacté';
        document.querySelector('h3').style.background = 'red';
    } else {
        alert("Adresse e-mail invalide !");
    }
}

