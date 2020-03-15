document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector('.modal__close')
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    };


    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal );
    });

    closeBtn.addEventListener('click', switchModal);
// Закрытие модального окна по кнопке Esc
    document.addEventListener('keydown', e => {
        e.keyCode === 27 && modal.classList.contains('modal--visible') ? switchModal() : false;
    });
    
});