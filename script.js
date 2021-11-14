const button = document.querySelector("#snap-button");
const blocks = document.querySelectorAll(".block");

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function rebuild() {
  blocks.forEach(function (block, i) {
    document.querySelector(`.block.bl${i + 1}`).style.opacity = 1;
  });
}

button.addEventListener("click", function (event) {
  rebuild();
  document.querySelector(`.block.bl${randomNumber(1, 3)}`).style.opacity = 0;
  document.querySelector(`.block.bl${randomNumber(3, 5)}`).style.opacity = 0;
  document.querySelector(`.block.bl${randomNumber(5, 7)}`).style.opacity = 0;
  document.querySelector(`.block.bl${randomNumber(7, 9)}`).style.opacity = 0;
});
