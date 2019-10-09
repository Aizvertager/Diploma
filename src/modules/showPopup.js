const showPopup = (nameBtn, popupWindow) => {

    const btn = document.querySelectorAll(nameBtn),
        popup = document.querySelector(popupWindow);

    btn.forEach((elem) => {

        elem.addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'block';
            popup.addEventListener('click', (e) => {

                let target = e.target;
                if(target.matches('.popup-close')) {
                    popup.style.display = 'none';
                } else if (target.matches(popupWindow)) {
                    popup.style.display = 'none';
                }

            });
        });

    });

};

export default showPopup;