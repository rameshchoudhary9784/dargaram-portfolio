function scroll() {
    var header = document.getElementById('header') 
    var scrollValue = window.scrollY;

    if(scrollValue < 10) {
        header.classList.remove('scroll')
    } else {
        header.classList.add('scroll')
    }
}

window.addEventListener('scroll', scroll)


var typed = new Typed(".multiple-text", {
    strings: ["Mechanical Engineer", "Production Engineer", "Quality Engineer", "Robotic Programmer", "Press Line Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

