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

document.addEventListener("DOMContentLoaded", function () {
    const tips = [
        "💡 ¿Tu PC se apaga sola? Podría ser temperatura.",
        "🧼 Limpieza interna cada año mejora el rendimiento y aumenta la vida útil de tu equipo.",
        "🔋 ¿Tu notebook no carga? Revisamos el conector sin costo.",
        "🎮 Reparamos consolas con HDMI roto o sin imagen.",
        "🖨 Vendemos tintas, tóners y periféricos de calidad.",
        "⚠️ Una fuente defectuosa puede quemar tu placa madre.",
    ];

    let i = 0;
    const mensaje = document.getElementById("mensaje-tip");

    setInterval(() => {
        i = (i + 1) % tips.length;
        mensaje.textContent = tips[i];
    }, 8000); // cada 8 segundos
});


document.addEventListener("DOMContentLoaded", function () {
    const asistente = document.getElementById("asistente-flotante");

    function checkScroll() {
        const isMobile = window.innerWidth <= 800;
        const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

        if (isMobile && scrollBottom) {
            asistente.style.display = "none";
        } else if (isMobile) {
            asistente.style.display = "flex";
        }
    }

    window.addEventListener("scroll", checkScroll);
});
