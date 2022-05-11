// followed https://www.youtube.com/watch?v=DFhmNLKwwGw on how to store scores in local storage and display the results as a list. 

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("save-score");
const finalScore = document.getElementById("final-score");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 8;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
    highScores.sort( (a,b) => a.score - b.score);
    highScores.splice(8);

    localStorage.setItem("highScores", JSON.stringify(highScores));


};

saveScoreBtn.addEventListener("click", () => {
    window.location.replace("leaderboard.html");
});
