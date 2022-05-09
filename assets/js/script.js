// shuffle cards based on a button click.
let grid = document.querySelector(".grid");
window.onload = shuffle;
 
function shuffle(){
    for (var i = grid.children.length; i >= 0; i--) {
        grid.appendChild(grid.children[Math.random() * i | 0]);
    }
};

let counter = 0; 
let firstSelection = "";
let secondSelecton = "";
let score = document.getElementById("score");
let integer = 0;

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
    if (card.classList.contains("selected")) {
        return;
    } else {
        card.classList.add("selected");
        integer++;
        score.innerHTML = integer;
    }

        if (counter === 0) {
            firstSelection = card.getAttribute("team");
            counter++;
        } else {
            secondSelecton = card.getAttribute("team");
            counter = 0;

            if (firstSelection === secondSelecton) {
                let correctSelection = document.querySelectorAll(
                    ".card[team='" + firstSelection + "']"
                );

                correctSelection[0].classList.add("correct");
                correctSelection[1].classList.add("correct");
                correctSelection[0].classList.remove("selected");
                correctSelection[1].classList.remove("selected");

                let correctAnswers = document.querySelectorAll(".correct");
                if (correctAnswers.length === 16) {
                    setTimeout(function () {
                        console.log(integer);
                        localStorage.setItem("mostRecentScore", integer);
                        window.location.replace("https://8000-evan2022-footballmatch-92pqwojjxvu.ws-eu44.gitpod.io/end.html");
                    },2000);
                };

            } else {
                let incorrectCards = document.querySelectorAll(".selected");

                incorrectCards[0].classList.add("incorrect");
                incorrectCards[1].classList.add("incorrect");

                setTimeout(() => {
                    incorrectCards[0].classList.remove("incorrect");
                    incorrectCards[1].classList.remove("incorrect");
                    incorrectCards[0].classList.remove("selected");
                    incorrectCards[1].classList.remove("selected");
                }, 1000);

            };

        };
    });
    
});

//End page JS

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("final-score");
const mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;