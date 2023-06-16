ScrollReveal().reveal('.article1', {delay: 300, duration: 2000});
ScrollReveal().reveal('.article2', {delay: 400, duration: 2000});
ScrollReveal().reveal('.article3', {delay: 500, duration: 2000});
ScrollReveal().reveal('.article4', {delay: 600, duration: 2000});


function ebacTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    if(document.body.scroll > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("leva_pro_topo").style.display = "block";
    }
    else {
        document.getElementById("leva_pro_topo").style.direction = "none";
    }
}