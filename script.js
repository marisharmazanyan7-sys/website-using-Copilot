// Плавная прокрутка по якорям меню
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Анимация появления секций при прокрутке
const sections = document.querySelectorAll('.section');
function revealSections() {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < trigger) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Валидация формы
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let valid = true;
    let error = '';
    if (!name || !email || !message) {
        valid = false;
        error = 'Пожалуйста, заполните все поля.';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        valid = false;
        error = 'Введите корректный email.';
    }
    if (valid) {
        formMessage.textContent = 'Спасибо за сообщение!';
        formMessage.style.color = '#7c3aed';
        form.reset();
    } else {
        formMessage.textContent = error;
        formMessage.style.color = '#e11d48';
    }
});
