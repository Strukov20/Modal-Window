    let more = document.querySelector('.more'),
        overlay = document.querySelector('.ovserlay'),
        close = document.querySelector('.popup-close');
        //розгортання модального вікна
        more.addEventListener('click', () => {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden'; // заборона прокрутки 
        });
        // закриття модального вікна
        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            this.classList.remove('more-splash');
            document.body.style.overflow = ''; // дозвіл прокрутки

        });