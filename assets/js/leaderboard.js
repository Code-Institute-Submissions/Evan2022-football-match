// followed https://www.youtube.com/watch?v=DFhmNLKwwGw on how to store scores in local storage and display the results as a list. 

const highScoresList = document.getElementById("high-scores-list");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li>${score.name} - ${score.score}</li>`;
  })
  .join("");