let $ = document;
let selectTap = $.querySelector(".tap-score");
let selectScore = $.querySelector(".score");
let levelNumber = $.querySelector(".level-number");
let i = 0;

let addScore = () => {
  selectScore.innerHTML = i++;
  selectTap.classList.add("border");
  setTimeout(() => {
    selectTap.classList.remove("border");
  }, 150);
  setlocal(i);
  if (i > 100) {
    selectTap.classList.add("img1");
    selectTap.classList.remove("img2");
    i += 2;
    levelNumber.innerHTML=2
  }
};
let setlocal = (i) => {
  localStorage.setItem("score", i);
};

let addLocal = () => {
  let valueI = localStorage.getItem("score");
  i = valueI;
  if (i > 0) {
    i--;
  }
  addScore();
};

selectTap.addEventListener("click", addScore);
window.addEventListener("load", addLocal);
