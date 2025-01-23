let mode2=document.getElementById("switch2");
let nav=document.querySelector("nav");
let modeImg=document.getElementById("modeImg"); 
let foot=document.querySelectorAll(".footer-section");
let footMain=document.querySelector(".main-footer");
let faq=document.querySelectorAll(".faq-question")
let faqCont=document.querySelector(".faq-container");

mode2.addEventListener("click", function () {
    nav.classList.toggle("dark")
    modeImg.classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
    foot.forEach((foot) => {
        foot.classList.toggle("new");
    });
    footMain.classList.toggle("new");
    faq.forEach((faq)=>{
        faq.classList.toggle("dark");
    })
    faqCont.classList.toggle("dark1")
});