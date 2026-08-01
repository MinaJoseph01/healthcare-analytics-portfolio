// Animated year counter

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".counter");

    elements.forEach(element => {

        let target = Number(element.innerText);
        let count = 0;

        let interval = setInterval(() => {

            count++;

            element.innerText = count + "+";

            if(count >= target){

                clearInterval(interval);

            }

        },50);


    });

});
