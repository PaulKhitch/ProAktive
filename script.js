document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Анимация появления при скролле (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Анимируем только один раз
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // 2. Эффект прозрачного навбара при скролле
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Обработка формы (Демо режим)
    const form = document.getElementById('leadForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Отправка...';
            btn.style.opacity = '0.7';

            // Имитация запроса на сервер
            setTimeout(() => {
                btn.innerText = 'Заявка принята!';
                btn.style.background = '#22c55e'; // Зеленый
                btn.style.opacity = '1';
                form.reset();

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = ''; // Возврат к CSS стилям
                }, 3000);
            }, 1500);
        });
    }

    // 4. Параллакс эффект для сфер (легкий)
    document.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.orb');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
});