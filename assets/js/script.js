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
            };

        };
    })
    
});