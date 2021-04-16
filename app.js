const firstButton = document.querySelector("#first-continue");
const secondButton = document.querySelector("#second-continue");
const passatempoForm = document.querySelector(".passa-tempo");
const nomeForm = document.querySelector(".nome");
const nameInput = document.querySelector("#nome");
const generoForm = document.querySelector(".genero");
const resultsCard = document.querySelector(".results-card");
const passatempoOption = document.getElementsByName('choose');
const thirdButton = document.querySelector("#third-continue")
const generoOption = document.getElementsByName("genero");
const restartButton = document.querySelector("#reiniciar");
const resultsName = document.querySelector("#results-name");
const resultsFavoriteActivity = document.querySelector("#results-favorite-activity");
const resultsGenero = document.querySelector("#results-genero");

let currentState = 0;
let information = {};

firstButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(currentState === 0 && nome.value.length != 0){
        information.name = nameInput.value;
        nomeForm.style.opacity = "0";
        nomeForm.style.pointerEvents = "none";
        passatempoForm.style.animation = 'fade-in .5s linear';
        passatempoForm.style.opacity = "1";
        passatempoForm.style.pointerEvents = "auto";
        currentState += 1;
    }
});

secondButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(currentState == 1){
        let selected = Array.from(passatempoOption).find(radio => radio.checked).value;
        information.favoriteActivity = selected;
        passatempoForm.style.opacity = "0";
        passatempoForm.style.pointerEvents = "none";
        generoForm.style.animation = "fade-in .5s linear";
        generoForm.style.opacity = "1";
        generoForm.style.pointerEvents = "auto";
        currentState += 1;
    }
})

thirdButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(currentState == 2){
        let selected = Array.from(generoOption).find(radio => radio.checked).value;
        information.genero = selected;
        generoForm.style.opacity = "0";
        generoForm.style.pointerEvents = "none";
        resultsCard.style.animation = "fade-in .5s linear";
        resultsCard.style.opacity = "1";
        resultsCard.style.pointerEvents = "auto";
        loadCard();
        currentState += 1;
    }
})

restartButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = '';
})

const loadCard = () => {
    resultsName.innerHTML = information.name;
    resultsFavoriteActivity.innerHTML = information.favoriteActivity;
    resultsGenero.innerHTML = information.genero;
}