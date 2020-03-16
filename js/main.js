/*
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
*/

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
        

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
 
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 500) {
            $('.button-up').fadeIn();
        } else {
            $('.button-up').fadeOut();
        }
    });


    $('.button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

});