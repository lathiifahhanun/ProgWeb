// Tambahkan ini di file script.js atau dalam tag <script> di HTML
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = link.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);

            // Hilangkan kelas "active" dari semua elemen dengan kelas "page-content"
            const pageContents = document.querySelectorAll(".page-content");
            pageContents.forEach(function (content) {
                content.classList.remove("active");
            });

            // Tambahkan kelas "active" ke elemen target
            targetElement.classList.add("active");
        });
    });
});
