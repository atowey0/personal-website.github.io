let iconmenu = document.querySelector("#menu-icon");
let menu = document.querySelector("#menu");
let flag = 0;

iconmenu.addEventListener("click", function () {
  if (flag == 1) {
    menu.style.display = "none";
    flag = 0;
  } else {
    menu.style.display = "block";
    flag = 1;
  }
});
