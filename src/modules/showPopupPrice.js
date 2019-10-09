const showPopupPrice = (nameBtn, popupWindow) => {

    const btn = document.querySelectorAll(nameBtn),
        popup = document.querySelector(popupWindow);

    btn.forEach((elem) => {

        elem.addEventListener('click', () => {
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


    // const priceBtn = document.querySelectorAll('.discount-btn');
    
    // priceBtn.forEach((elem) => {

    //     elem.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         const popupDiscount = document.querySelector('.popup-discount');
    //         popupDiscount.style.display = 'block';
    //         popupDiscount.addEventListener('click', (e) => {
    //             let target = e.target;
    //             if(target.matches('.popup-close')) {
    //                 popupDiscount.style.display = 'none';
    //             } else if (target.matches('.popup-discount')) {
    //                 popupDiscount.style.display = 'none';
    //             }
    //         });
    //     });

    // });

    // const callBtn = document.querySelectorAll('#call-btn');

    // callBtn.forEach((block) => {

    //     block.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         const popupCall = document.querySelector('.popup-call');
    //         popupCall.style.display = 'block';
    //         popupCall.addEventListener('click', (e) => {
    //             let target = e.target;
    //             if(target.matches('.popup-close')) {
    //                 popupCall.style.display = 'none';
    //             } else if (target.matches('.popup-call')) {
    //                 popupCall.style.display = 'none';
    //             }
    //         });
    //     });

    // });

    // const checkBtn = document.querySelector('.check-btn'),
    //     directorBtn = document.querySelector('.director-btn');

    // checkBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     const popupCheck = document.querySelector('.popup-check');
    //     popupCheck.style.display = 'block';
    //     popupCheck.addEventListener('click', (e) => {
    //         let target = e.target;
    //         if(target.matches('.popup-close')) {
    //             popupCheck.style.display = 'none';
    //         } else if (target.matches('.popup-check')) {
    //             popupCheck.style.display = 'none';
    //         }
    //     });
    // });

    // directorBtn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     const popupConsultation = document.querySelector('.popup-consultation');
    //     popupConsultation.style.display = 'block';
    //     popupConsultation.addEventListener('click', (e) => {
    //         let target = e.target;
    //         if(target.matches('.popup-close')) {
    //             popupConsultation.style.display = 'none';
    //         } else if (target.matches('.popup-consultation')) {
    //             popupConsultation.style.display = 'none';
    //         }
    //     });
    // });



};

export default showPopupPrice;