/* =====================================
   Mina Fahim Analytics Portfolio
   JavaScript
===================================== */


// ===============================
// Animated Counters
// ===============================

document.addEventListener("DOMContentLoaded", () => {


    const counters = document.querySelectorAll(".counter");


    counters.forEach(counter => {


        const target = parseInt(counter.innerText);

        let current = 0;


        const updateCounter = () => {


            const increment = Math.ceil(target / 50);


            if(current < target){

                current += increment;

                counter.innerText = current + "+";

                setTimeout(updateCounter,40);

            }

            else {

                counter.innerText = target + "+";

            }


        };


        updateCounter();


    });



});





// ===============================
// Fade In On Scroll
// ===============================


const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("fade-in");


}


});


},
{
threshold:0.2
});



document.querySelectorAll(
".section, .project-card, .experience-card, .skill-card"
)
.forEach(element=>{


observer.observe(element);


});





// ===============================
// Current Year Footer
// ===============================


const year = new Date().getFullYear();


const footer = document.querySelector("footer");


if(footer){

footer.innerHTML =
`© ${year} Mina Fahim Analytics`;

}
