document.addEventListener('DOMContentLoaded', () => {
    // Captura os links do menu e as respectivas "páginas" (seções)
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o recarregamento padrão
            
            // Remove o estado ativo de todos os botões e páginas
            navLinks.forEach(item => item.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Ativa o botão que foi clicado
            link.classList.add('active');
            
            // Descobre qual página abrir com base no atributo 'data-target'
            const targetSectionId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetSectionId);
            
            if (targetSection) {
                targetSection.classList.add('active');
                // Move o scroll para o topo da nova página aberta
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Função opcional: Abre/Fecha as respostas na seção de Dúvidas
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        // Inicia com as respostas ocultas
        const answer = question.nextElementSibling;
        answer.style.display = 'none';

        question.addEventListener('click', () => {
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});