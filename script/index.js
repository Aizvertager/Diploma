window.addEventListener('DOMContentLoaded', () => {

    // скрытие/отображение модального окна
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

    showPopupCall();

    // форма отправки

    const sendForm = (idForm) => {

        //создали сообщения
        const errorMessage = 'Произошла ошибка, проверьте правильно ли введены данные',
            loadMessage = 'Ваш запрос обрабатывается',
            successMessage = 'Ваша заявка принята';

        const form = document.getElementById(idForm);
        console.log('form: ', form);

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'color: green, font-size: 18px;';

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(form);
            //Создаем объект для AJAX
            let body = {};
            //Перебираем ключ/значение в formData
            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then((response) => {
                    if(response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                })
                .catch(error => console.error(error))
                .then(() => {
                    form.reset();
                });
        });

        const postData = (body) => {

            return fetch('./server.php', {
                method: 'POST',// по умолчанию GET
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(body)
            });
        
        };

    };

    sendForm('formMain');
    sendForm('formCall');
    sendForm('formCallSecond');
});