let mode5=document.getElementById("switch5"); 
// accesing the necessary elements
    let modeImg=document.getElementById("modeImg"); 
    let foot=document.querySelectorAll(".footer-section");
    let footMain=document.querySelector(".main-footer");
    let main=document.querySelector(".content-section");
    let nav=document.querySelector("nav");

    mode5.addEventListener("click", function () {
        modeImg.classList.toggle("fa-moon");
        modeImg.classList.toggle("fa-sun");
        nav.classList.toggle("dark")
        document.body.classList.toggle("dark");
       
        foot.forEach((foot) => {
            foot.classList.toggle("new");
        });
        footMain.classList.toggle("new");
    });
