const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(navLink => {
    navLink.classList.toggle(
        "active",
        navLink.pathname === window.location.pathname
    );
});