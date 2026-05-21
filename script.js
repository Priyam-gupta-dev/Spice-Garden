let y = document.querySelector(".links");
function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

y.addEventListener("click",(dets)=>{
    console.log(dets);
})

let lastScrollY = window.scrollY;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    // If user scrolls down, hide the navbar. If up, show it.
    if (window.scrollY > lastScrollY) {
        navbar.classList.add('nav-hidden');
    } else {
        navbar.classList.remove('nav-hidden');
    }

    // Update the scroll position for the next movement
    lastScrollY = window.scrollY;
});
