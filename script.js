let $ = document;
let selectTap = $.querySelector(".tap-score");
let selectScore = $.querySelector(".score");
let levelNumber = $.querySelector(".level-number");
let cart = $.querySelectorAll(".cart");
let makhfi = $.querySelector(".makhfi");
let main = $.querySelector("main");
let a = 0;

cart.forEach((element)=>{
  element.addEventListener("click",()=>{
    makhfi.classList.add("nashan")
  })

})

main.addEventListener("click",()=>{
  makhfi.classList.remove("nashan")
})


let addScore = () => {
  selectScore.innerHTML = a++;
  selectTap.classList.add("border");
  setTimeout(() => {
    selectTap.classList.remove("border");
  }, 150);
  setlocal(a);
   if(a > 30000){
    selectTap.classList.add("img4");
    selectTap.classList.remove("img3");
    a += 3;
    levelNumber.innerHTML=4
  }else if(a > 5000){
    selectTap.classList.add("img3");
    selectTap.classList.remove("img1");
    a += 4;
    levelNumber.innerHTML=3
  }else if (a > 100) {
    selectTap.classList.add("img1");
    selectTap.classList.remove("img2");
    a += 2;
    levelNumber.innerHTML=2
  }

};
let setlocal = (a) => {
  localStorage.setItem("scoreAsa", a);
};

let addLocal = () => {
  let valueI = localStorage.getItem("scoreAsa");
  a = valueI;
  if (a > 0) {
    a--;
  }
  addScore();
};

selectTap.addEventListener("click", addScore);
window.addEventListener("load", addLocal);
