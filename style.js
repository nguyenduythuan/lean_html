const a = document.getElementsByClassName("nav-link");
const b = a[0].children;
const btn = document.getElementById("menu-icon");
var flag = 0;
var pick = 0;
for (let index = 0; index < b.length; index++) {
    b[pick].classList.add("selected");
    b[index].addEventListener("click", function(){
    addClass(index);
  });
}
function addClass(index) {
  b[pick].classList.remove("selected");
  pick = index;
  b[index].classList.add("selected");
  flag = 1;
  show();
}

btn.addEventListener("click", function(){
  show();
});

function show() {
  if (flag === 0) {
    a[0].style.display = "block";
    btn.style.backgroundPosition = "40 0";
    flag = 1;
  } else {
    a[0].style.display = "none";
    btn.style.backgroundPosition = "0 0";
    flag = 0;
  }
}