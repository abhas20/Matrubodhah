let mode1=document.getElementById("switch1");
let nav=document.querySelector("nav");
let modeImg=document.getElementById("modeImg"); 

mode1.addEventListener("click", function () {
    nav.classList.toggle("dark")
    modeImg.classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
    
});