const burgerIcon = document.querySelector("#burger-icon");
const closeIcon = document.querySelector("#close-icon");
const menu = document.querySelector("#menu");

burgerIcon.addEventListener("click", function(){
    menu.style.right = "0";
});

closeIcon.addEventListener("click", function (){
    menu.style.right = "-100%";
});

document.addEventListener("click", function (event){
    if (!menu.contains(event.target) && !burgerIcon.contains(event.target)) {
        menu.style.right = "-100%";
    }
});

window.addEventListener("resize", function (){
    if (window.innerWidth > 768) {
        menu.style.right = "-100%";
    }
});