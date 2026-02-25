/**
 * Interatividade do Portfólio - Lucas Tabajara
 */

// 1. Navegação Suave (Smooth Scroll) para os links do Menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 2. Animação de Revelação ao Scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Aplicando a animação nos cards de projetos e seções
document.querySelectorAll('section, .project').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});

// 3. Log de Boas-vindas no Console (Toque de Desenvolvedor)
console.log("%c Olá! Bem-vindo ao portfólio do Lucas Tabajara.", "color: #2563eb; font-size: 16px; font-weight: bold;");
console.log("Estudante de Ciência da Computação focado em Front-End e DevOps.");