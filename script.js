// Podés agregar funciones interactivas más adelante
console.log("OPRIMISTE F12? CERRA ESTA PAGINA VOLVIENDO A PRESIONAR F12. SALUDOS!!!");

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active");
                    }
                });
            },
            {
                threshold: 0.5 // Se activa cuando el 50% de la sección está visible
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });
    }
});
