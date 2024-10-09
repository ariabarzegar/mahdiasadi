let $ = document;
let selectTap = $.querySelector(".tap-score");
let selectScore = $.querySelector(".score");
let levelNumber = $.querySelector(".level-number");
let bod = $.querySelector("body");
let cart = $.querySelectorAll(".cart");
let makhfi = $.querySelector(".makhfi");
let cartValue = $.querySelectorAll(".cc");
// let a = 0;
let aria=1
cart.forEach((element)=>{
  element.addEventListener("click",()=>{
    // makhfi.classList.toggle("nashan")
    if ("Cart"==element.innerHTML) {
    makhfi.classList.add("nashan")

    }else if ("Home"==element.innerHTML) {
      makhfi.classList.remove("nashan")
      }
    console.log(element.innerHTML);
  })
})

cartValue.forEach((event)=>{
  event.addEventListener("click",(event)=>{
    if (a>3000) {
      if (event.target.dataset.anerje=="anerje") {
        console.log(event.target.dataset.anerje);
        selectTap.classList.add("img4");
        bod.classList.add("body-color")
        makhfi.classList.remove("nashan")
        a-=3000
        aria=20
        addScore()
        setTimeout(() => {
        selectTap.classList.remove("img4");
        bod.classList.remove("body-color")
          aria=1
        }, 9000);
      }
      
    }
  })
})

let addScore = () => {
  selectScore.innerHTML = a+=aria;
  selectTap.classList.add("border");
  setTimeout(() => {
    selectTap.classList.remove("border");
  }, 150);
  setlocal(a);
if(a > 5000){
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
    a--
  }
  addScore();
};

selectTap.addEventListener("click", addScore);
window.addEventListener("load", addLocal);
