/* *********************************
1° Comptage des clicks sur le Footer */

let nbClicksOnFooter = 0;
let footer = document.getElementsByTagName('footer')[0];
footer.addEventListener("click", function(){ 
    nbClicksOnFooter += 1;
    console.log(`clique numéro ${nbClicksOnFooter}`);
});

/* *********************************
2° Déroulement de la Navbar */

let hamburgerMenu = document.getElementById("navbarHeader");
let navbarToggler = document.getElementsByClassName('navbar-toggler')[0];
navbarToggler.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("collapse") ;
});

/* *********************************
3° Modification de la couleur du texte du bouton "Edit" de la première card. */

let firstCard = document.getElementsByClassName('col-md-4')[0];
let firstCardContent = firstCard.querySelector('p');
let firstCardEditButton = firstCard.querySelectorAll('button')[1];
firstCardEditButton.addEventListener("click", function(){
    firstCardContent.style.color = "red";
});

/* *********************************
4° Modification de la couleur du texte du bouton "Edit" de la deuxième card. */

let secondCard = document.getElementsByClassName('col-md-4')[1];
let secondCardContent = secondCard.querySelector('p');
let secondCardEditButton = secondCard.querySelectorAll('button')[1];
secondCardEditButton.addEventListener('click', function(){
    if (secondCardContent.style.color === 'green'){
        secondCardContent.style.color = '' ;
    }else {
        secondCardContent.style.color = 'green';
        }
});

/* *********************************
5° Suppression du CSS Bootstrap sur double clique dans la NavBar */

let navBar = document.querySelector('header');
let head = document.querySelector('head');
let cdnBootstrap = head.querySelector('link');
navBar.addEventListener('dblclick', function(){
    if(head.contains(cdnBootstrap)){
        cdnBootstrap.remove();
    } else {
        head.appendChild(cdnBootstrap);
    }
});

/* *********************************
6° Minimisation des cartes au survol du bouton View */

for(let i = 0; i < 6; i++){
    let card = document.getElementsByClassName('col-md-4')[i];
    let textContent = card.querySelector('p');
    let image = card.querySelector('img');
    let viewButton = card.querySelector('button');
    viewButton.addEventListener('mouseover', function(){
        textContent.classList.toggle("collapse") ;
        if (image.style.width === '20%'){
            image.style.width = '' ;
        } else {
            image.style.width = "20%";
        };
    });
};

/* *********************************
7° Faire tourner les cartes dans le sens horaire */

let clockwiseButton = document.getElementsByClassName("btn-secondary")[0];
let cards = document.getElementsByClassName('col-md-4');
let parentDiv = document.querySelector('.album .row');
clockwiseButton.addEventListener('click', function(){
    parentDiv.insertBefore(cards[5], cards[0]);
});

/* *********************************
8° Faire tourner les cartes dans le sens anti-horaire */

let counterClockwiseButton = document.getElementsByClassName("btn-primary")[0];
counterClockwiseButton.addEventListener('click', function(){
    event.preventDefault();
    parentDiv.insertBefore(cards[0], cards[5].nextSibling);
});

/* *********************************
9° Modification de l'affichage suivant l'appui sur certaines touches */

let logo = document.querySelector('.navbar-brand');
logo.addEventListener('keypress', logKey);

function logKey(e) {
    switch(e.key){
        case 'a':
            document.body.classList = 'col-4';
            break;
        case 'p':
            document.body.classList = 'col-4 offset-md-8';
            break;
        case 'y':
            document.body.classList = 'col-4 offset-md-4';
            break;
        case 'b':
            document.body.classList = '';
            break;
    };
};
