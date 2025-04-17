const sidenavbar = document.querySelector(".side-navbar");

function showBar(){
    sidenavbar.style.left = "0";
}
function noneShowBar(){
    sidenavbar.style.left = "-100%";
}

//SCROLL ANIMATION FUNCTION
const middlebox = document.querySelector(".middle-box");

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 10) {
        middlebox.style.transition = "400ms";
        middlebox.style.margin = "50px";
    }
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY < 10) {
        middlebox.style.transition = "400ms";
        middlebox.style.margin = "150px 0px";
    }
});