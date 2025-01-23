let mode4=document.getElementById("switch4"); 
let nav=document.querySelector("nav");
let modeImg=document.getElementById("modeImg");
let contact=document.getElementsByClassName("contact-form")[0];

mode4.addEventListener("click",()=>{
    document.body.classList.toggle("darkMod");
    modeImg.classList.toggle("fa-sun");
    nav.classList.toggle("dark");
    contact.classList.toggle("dark")
})