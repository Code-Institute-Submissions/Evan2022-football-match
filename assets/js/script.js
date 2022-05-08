// shuffle cards based on a button click.
let button = document.querySelector(".shuffle");
let grid = document.querySelector(".grid");

if (button && grid) {
  button.addEventListener("click", () => {
    for (var i = grid.children.length; i >= 0; i--) {
        grid.appendChild(grid.children[Math.random() * i | 0]);
    }
  });
}

let counter = 0; 
let firstSelection = "";
let secondSelecton = "";

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.add("selected");
    })
    
});