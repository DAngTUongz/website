const cards = document.querySelectorAll(".card, .project");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 0 25px #38bdf8";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="none";

    });

});
