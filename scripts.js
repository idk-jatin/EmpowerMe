let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); 
}
function toggleMenu() {
    var menu = document.getElementById('popupMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


window.onclick = function(event) {
    if (!event.target.matches('.fixed-btn')) {
        var menu = document.getElementById('popupMenu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    }
}
