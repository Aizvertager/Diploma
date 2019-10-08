const regEx = () => {

    const inputsNumbers = document.querySelectorAll('.phone-user');
    inputsNumbers.forEach((elem) => {
        
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^0-9]\+/, '');
        });

    });

    const inputsText = document.querySelectorAll('input[placeholder="Ваше имя"]');
    inputsText.forEach((elem) => {

        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^а-яё\s]/ig, '');
        });

    });

};

export default regEx;

