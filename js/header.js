    const btnMobile = document.getElementById('hamburger');
    const menu = document.getElementById('nav-menu');

    btnMobile.addEventListener("click", () => {
        menu.classList.toggle("active");
        btnMobile.classList.toggle("active");
    });