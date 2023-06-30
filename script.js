var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}


var sidemenu = document.getElementById("sidemenu")
function openmenu() {
    sidemenu.style.right = "0"
}
function closemenu() {
    sidemenu.style.right = "-200px"
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxUR1uTyvMXo-_ZxqF9tILcimUJyq4d12N5MPdgCsd1_0kyl16bBXxs-cNSnO5LrthHVQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


// ========scroll reveal==========
ScrollReveal({ 
    // reset: true,
    // distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.header, .sub-title', { origin: 'top' });
ScrollReveal().reveal('.header-text', { origin: 'right' });
ScrollReveal().reveal('.about-col-2, .btn , services-list, .portfolio-box, .row', { origin: 'bottom' });




// =========typed js===============
const typed= new Typed('.multi-text', {
    strings : ['Full-Stack Developer','Software Developer','Web Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})
