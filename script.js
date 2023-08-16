function scroll() {
    var header = document.getElementById('header') 
    var scrollValue = window.scrollY;

    if(scrollValue < 100) {
        header.classList.remove('scroll')
    } else {
        header.classList.add('scroll')
    }
}

window.addEventListener('scroll', scroll)


var typed = new Typed(".multiple-text", {
    strings: ["Mechanical Engineer", "Tools Designer", "3-D Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

