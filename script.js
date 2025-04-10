const topcontainer = document.querySelector(".top-container");

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 10) {
        topcontainer.style.transition = "400ms";
        topcontainer.style.top = "-300px";
    } 
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY < 10) {
        topcontainer.style.transition = "400ms";
        topcontainer.style.top = "0px";
    }
});