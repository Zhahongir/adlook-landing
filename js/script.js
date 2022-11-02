// Hamburger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__inner__nav__item__link'),
    menuBtn = document.querySelectorAll('.menu__inner__btn'),
    hamburger = document.querySelector('.header__wrap__callback__hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuBtn.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});


// Nav fixed
const hideNav = () => {
    const hiddenNavClassName = 'navigation__hidden';
    const fixedNavClassName = 'navigation__fixed';
    const headerHeight = 100;
    const navHeight = 400;
    let initialYvalue = window.scrollY;
    let body = document.querySelector('body');

    let isItHidden = false;
    let isItFixed = false;

    window.addEventListener('scroll', (ev) => {
        const scrollY = window.scrollY;
        if (scrollY > headerHeight) {
            makeItFixed();

            if (scrollY > headerHeight + navHeight && scrollY > initialYvalue) {
                hide();
            } else {
                show();
            }
        } else {
            makeItNotFixed();
        }

        initialYvalue = scrollY;
    });

    function hide() {
        if (!isItHidden) {
            body.classList.add(hiddenNavClassName);
            isItHidden = true;
        }
    }

    function show() {
        if (isItHidden) {
            body.classList.remove(hiddenNavClassName);
            isItHidden = false;
        }
    }

    function makeItFixed() {
        if (!isItFixed) {
            body.classList.add(fixedNavClassName);
            isItFixed = true;
        }
    }

    function makeItNotFixed() {
        if (isItFixed) {
            body.classList.remove(fixedNavClassName);
            isItFixed = false;
        }
    }
}

hideNav()