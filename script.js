document.addEventListener('DOMContentLoaded', () => {
    
    // --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ТАБОВ ---
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.app-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 1. Убираем активный класс у всех кнопок
            tabs.forEach(t => t.classList.remove('active'));
            // 2. Добавляем активный класс нажатой кнопке
            tab.classList.add('active');

            // 3. Скрываем все экраны
            contents.forEach(c => c.classList.remove('active'));
            
            // 4. Показываем нужный экран
            const targetId = tab.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // --- ЛОГИКА ФОРМЫ ---
    const form = document.getElementById('leadForm');
    const statusMsg = document.getElementById('formStatus');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Отправка...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.innerText = 'Заявка отправлена!';
                btn.style.background = '#22C55E';
                btn.style.opacity = '1';
                form.reset();
                
                // Возврат кнопки через 3 сек
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '';
                }, 3000);
            }, 1500);
        });
    }

    // --- ТУЛТИПЫ ДЛЯ КАРТЫ (Простой JS) ---
    const pins = document.querySelectorAll('.map-pin');
    pins.forEach(pin => {
        pin.addEventListener('mouseenter', (e) => {
            const text = e.target.getAttribute('data-tip');
            // В реальном проекте здесь можно показать всплывающее окно
            console.log("Hover: " + text); 
        });
    });
});
