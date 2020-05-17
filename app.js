let bg = document.getElementById("bg");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let heading = document.getElementById("heading");








window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value *0.5 + "px";
    mountain.style.top = -value *0.15 + "px"; 
    road.style.top = value *0.15 + "px"; 
    heading.style.top = value *1 + "px"; 
    heading.style.opacity = value *0.5 + 'px';

})


const navSlide = function(){
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".list");
    const navLinks = document.querySelectorAll(".list li");

        burger.addEventListener("click", function(){
            nav.classList.toggle("nav-active");

            navLinks.forEach(function(link, index){

                if(link.style.animation) {
                    link.style.animation = '';                
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
                                                              
            });

            burger.classList.toggle("toggle");


        });



}

navSlide();