// accessing the button element
let mode7=document.getElementById("switch7"); 
// accesing the necessary elements
    let modeImg=document.getElementById("modeImg"); 
    let foot=document.querySelectorAll(".footer-section");
    let footMain=document.querySelector(".main-footer");
    let nav=document.querySelector("nav");

    mode7.addEventListener("click", function () {
        modeImg.classList.toggle("fa-sun");
        nav.classList.toggle("dark")
        mode7.classList.toggle("change")
        document.body.classList.toggle("dark");
       
        foot.forEach((foot) => {
            foot.classList.toggle("new");
        });
        footMain.classList.toggle("new");

    });
