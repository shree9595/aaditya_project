const navbtn = document.querySelector(".menu img");
const navbar = document.querySelector(".nav ul");
const cancelbtn = document.querySelector(".cancel img");
const topBtn = document.querySelector(".top-btn img");
const header = document.querySelector(".header-container");
const about_btn = document.querySelector(".about")


navbtn.addEventListener("click",()=>{
    navbar.classList.add("navactive");
})
cancelbtn.addEventListener("click",()=>{
    navbar.classList.remove("navactive");
})


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        topBtn.style.bottom = "40px";
        header.classList.add("header-animation")

    } else {
        topBtn.style.bottom = "-100%";
        header.classList.remove("header-animation")
    }

}

if (document.body.scrollTop == 200 || document.documentElement.scrollTop == 200) {
    about_btn.style.color = "red"
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
