// accessing the button element
let mode=document.getElementById("switch"); 
// accesing the necessary elements
    let modeImg=document.getElementById("modeImg"); 
    let wisdom=document.getElementById("wisdom");
    let cards=document.querySelectorAll(".roadmap-card"); 
    let foot=document.querySelectorAll(".footer-section");
    let footMain=document.querySelector(".main-footer");
    let main=document.querySelector(".content-section");
    let nav=document.querySelector("nav");
    let btn=document.querySelectorAll(".carousel_caption .btn");
    let faq=document.querySelectorAll(".faq-container");
    let form=document.querySelector(".form-container form");

    mode.addEventListener("click", function () {
        modeImg.classList.toggle("fa-moon");
        modeImg.classList.toggle("fa-sun");
       cards.forEach((card) => {
            card.classList.toggle("change");
        });
        nav.classList.toggle("dark")
        document.body.classList.toggle("dark");
        btn.forEach((btn) => {
            btn.classList.toggle("dark");
        });
       
        foot.forEach((foot) => {
            foot.classList.toggle("new");
        });
        footMain.classList.toggle("new");
       
        main.classList.toggle("change1")
        wisdom.classList.toggle("dark");
    });

 