// accessing the button element
let mode6=document.getElementById("switch6"); 
// accesing the necessary elements
    let modeImg=document.getElementById("modeImg"); 
    let foot=document.querySelectorAll(".footer-section");
    let footMain=document.querySelector(".main-footer");
    let nav=document.querySelector("nav");
    let cont=document.getElementsByClassName("containers")[0];

mode6.addEventListener("click", function () {
    modeImg.classList.toggle("fa-moon");
    nav.classList.toggle("dark")
    document.body.classList.toggle("dark");
    foot.forEach((foot) => {
        foot.classList.toggle("new");
    });
    footMain.classList.toggle("new");
   cont.classList.toggle("dark");

});

