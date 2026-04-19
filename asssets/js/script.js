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