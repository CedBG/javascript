

function validateForm() {
    let texte = document.forms[game][texte].value;
    if (texte == null || texte == "") {
        alert('Veuillez entrer un nombre !');
    return false;
    }
};


let min = 1; 
let max = 100;

let random = Math.floor(Math.random() * (max - min)) + min;

for(let i = 3; i > 0; i--) {


    let gamer = prompt("Vous avez le droit à " + i + " tentatives !");
    
    if(gamer == null) {

        alert("Vous devez indiquer un nombre entre 1 et 100 !");
    }

    else if(isNaN(gamer)) {

        alert("Vous devez indiquer un nombre entre 1 et 100 !");
    }
    else if(gamer < random) {

        alert("Le nombre est trop petit");
    }
    else if(gamer > random) {

        alert("Le nombre est trop grand");
    }
    else if(gamer == random) {

        alert("Vous avez trouvé, bravo !");
        alert("Vous avez trouvé en " + i + " essai(s)");
        break;
    }
    else if(gamer == 3) {

        alert("Vous avez perdu ! Le nombre était : " + random);
    }
}




  
  