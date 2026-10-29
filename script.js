/* ==========================================================
   Portfolio V2
   script.js
========================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 800);

});


/* ==========================================================
   Mobile Menu
========================================================== */

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* ==========================================================
   Close menu after click
========================================================== */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* ==========================================================
   Header Background - Minimal Light Theme
========================================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(255, 255, 255, 0.96)";
        header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.04)";
    } else {
        header.style.background = "rgba(255, 255, 255, 0.94)";
        header.style.boxShadow = "none";
    }
});


/* ==========================================================
   Back To Top
========================================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================================
   Scroll Reveal
========================================================== */

const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach(el => {

    el.classList.add("hidden");

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

hiddenElements.forEach(el=>{

    observer.observe(el);

});


/* ==========================================================
   Active Menu
========================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


/* ==========================================================
   Progress Bar Animation
========================================================== */

const bars = document.querySelectorAll(".bar");

const skillObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.animation="growBar 2s forwards";

        }

    });

},{
    threshold:.5
});

bars.forEach(bar=>{

    skillObserver.observe(bar);

});


/* ==========================================================
   Counter Animation
========================================================== */

const counters = document.querySelectorAll(".stat h2");

const speed = 60;

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const text = counter.innerText;

const number = parseInt(text);

if(isNaN(number)) return;

let count = 0;

const update = ()=>{

count += Math.ceil(number/speed);

if(count<number){

counter.innerText = count+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=text;

}

}

update();

}

});

},{
threshold:.5
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ==========================================================
   Avatar Hover
========================================================== */

const avatar = document.querySelector(".hero-right img");

if(avatar){

avatar.addEventListener("mousemove",(e)=>{

const rect = avatar.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = ((x/rect.width)-0.5)*18;

const rotateX = ((y/rect.height)-0.5)*-18;

avatar.style.transform=`
perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;

});

avatar.addEventListener("mouseleave",()=>{

avatar.style.transform="rotateX(0) rotateY(0) scale(1)";

});

}


/* ==========================================================
   Project Card Hover
========================================================== */

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 20px 45px rgba(56,189,248,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});


/* ==========================================================
   Tech Tag Animation
========================================================== */

document.querySelectorAll(".tech span").forEach(tag=>{

tag.addEventListener("mouseenter",()=>{

tag.style.transform="translateY(-6px) scale(1.08)";

});

tag.addEventListener("mouseleave",()=>{

tag.style.transform="translateY(0) scale(1)";

});

});


/* ==========================================================
   Smooth Fade
========================================================== */

document.body.classList.add("fade");


/* ==========================================================
   Console Message
========================================================== */

console.log("%cWelcome to DangTuong Portfolio",
"color:#38bdf8;font-size:18px;font-weight:bold;");
