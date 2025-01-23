let mode3=document.getElementById("switch3");
let modeImg=document.getElementById("modeImg"); 
let foot=document.querySelectorAll(".footer-section");
let footMain=document.querySelector(".main-footer");
let wisdom=document.getElementById("wisdom");
mode3.addEventListener("click",function (){
  wisdom.classList.toggle("dark");
    modeImg.classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
    foot.forEach((foot) => {
        foot.classList.toggle("new");
    });
    footMain.classList.toggle("new");
})
