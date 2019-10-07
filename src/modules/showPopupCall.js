 const showPopupCall = () => {

    const callBtn = document.querySelectorAll('#call-btn'),
    popupCall = document.querySelector('.popup-call');

    callBtn.forEach((block) => {

        block.addEventListener('click', (e) => {
            e.preventDefault();
            popupCall.style.display = 'block';
            popupCall.addEventListener('click', (e) => {
                let target = e.target;
                if(target.matches('.popup-close')) {
                    popupCall.style.display = 'none';
                } else if (target.matches('.popup-call')) {
                    popupCall.style.display = 'none';
                }
            });
        });

    });

};

export default showPopupCall;