let button = document.querySelector(".shuffle");
let grid = document.querySelector(".grid");

if (button && grid) {
  button.addEventListener("click", () => {
    for (var i = grid.children.length; i >= 0; i--) {
        grid.appendChild(grid.children[Math.random() * i | 0]);
    }
  });
}