// --- 1. Элементы DOM (Получение ссылок на ключевые элементы) ---
const smartUploadModal = document.getElementById('smartUploadModal');
const addTransactionModal = document.getElementById('addTransactionModal');
const btnSmartUpload = document.getElementById('btnSmartUpload');
const btnManualAdd = document.getElementById('btnManualAdd');

// --- 2. Управление UI (На основе логики showModal/hideAllModals) ---

/** Показывает модальное окно, устанавливая ему display: flex */
function showModal(modalElement) {
    if (modalElement) {
        // Убеждаемся, что все другие модальные окна скрыты, прежде чем показывать новое
        hideAllModals();
        modalElement.style.display = 'flex';
    }
}

/** Скрывает все модальные окна, имеющие класс .modal */
function hideAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

/** Инициализация даты для ручного ввода на текущую дату */
function initializeDate() {
    // В Django API date.today() используется по умолчанию, 
    // здесь мы устанавливаем текущую дату в поле ввода HTML [2], [3].
    const dateInput = document.getElementById('transDate');
    if (dateInput) {
        dateInput.valueAsDate = new Date();
    }
}

// --- 3. Инициализация и обработчики событий ---

document.addEventListener('DOMContentLoaded', () => {

    // Обработчик для кнопки Smart Upload (имитируем клик по элементу сайдбара)
    if (btnSmartUpload) {
        btnSmartUpload.addEventListener('click', () => {
            showModal(smartUploadModal);
        });
    }

    // Обработчик для кнопки Ручной ввод (имитируем клик по элементу сайдбара)
    if (btnManualAdd) {
        btnManualAdd.addEventListener('click', () => {
            initializeDate(); // Устанавливаем текущую дату
            showModal(addTransactionModal);
        });
    }

    // Обработчик для кнопки "Смотреть интерфейс" на HERO-блоке
    const showDemoBtn = document.getElementById('showDemoBtn');
    if (showDemoBtn) {
        // При клике на HERO-блоке показываем первое демо-окно
        showDemoBtn.addEventListener('click', () => {
            showModal(smartUploadModal);
        });
    }

    // Обработчики закрытия:
    // 1. Закрытие по клику на крестике (должны быть элементы с классом .modal-close)
    document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', hideAllModals)); [4]

    // 2. Закрытие по клику вне модального окна (на темном фоне)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            hideAllModals(); [4]
        }
    });
});
