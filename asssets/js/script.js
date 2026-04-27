function toggleMenu() {
    const nav = document.querySelector(".navbar");
    const btn = document.querySelector(".menu-btn");

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        btn.innerHTML = "✕";
        nav.style.height = "calc(100vh - 20vw)"
        document.body.style.overflow = "hidden"
    } else {
        btn.innerHTML = "☰";
        nav.style.height = "0"
        document.body.style.overflow = "scroll"
    }

}

// Slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
  
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
  
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
  
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
  }