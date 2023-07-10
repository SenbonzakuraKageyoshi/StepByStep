window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        slidesPerView: 1,
        spaceBetween: 0,

        breakpoints: {
            1150: {
              slidesPerView: 2,
              spaceBetween: 10
            }
        },
    
        pagination: {
          el: '.swiper-pagination',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    const modalTriggers = document.querySelectorAll('.modal__button'),
    modal = document.querySelector('.modal'),
    closeModalButton = document.querySelector('.modal__content-close');

    const openModal = () => {
        modal.classList.add('active');
        modal.addEventListener('click', ({ target }) => activateCloseModalArea(target))
    };

    const activateCloseModalArea = (target) => {
        if(target.className === 'modal active'){
            modal.classList.remove('active');
            modal.removeEventListener('click', activateCloseModalArea)
        }
    }

    const closeModal = () => {
        modal.classList.remove('active');
        modal.removeEventListener('click', activateCloseModalArea)
    };

    modalTriggers.forEach((el) => el.addEventListener('click', openModal));
    closeModalButton.addEventListener('click', closeModal)
});