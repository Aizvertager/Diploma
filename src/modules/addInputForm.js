const addInputForm = (idForm) => {

    //создали сообщения
    const errorMessage = 'Произошла ошибка, проверьте правильно ли введены данные',
        loadMessage = 'Ваш запрос обрабатывается',
        successMessage = 'Ваша заявка принята',
        checkValueMessage = 'Заполните поля';

    const form = document.getElementById(idForm),
        directorQuestion = document.querySelector('.director-question'),
        nameUser = document.getElementById('name_13'),
        phoneUser = document.getElementById('phone_13'),
        statusMessage = document.createElement('div');
        
    statusMessage.style.cssText = `color:green;font-size:18px`;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        const formData = new FormData(form);
        formData.append('Question', directorQuestion.value);
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
            .then(() => {
                if(nameUser.value === '' && phoneUser.value === '') {
                    nameUser.style.cssText = `border-color: red`;
                    phoneUser.style.cssText = `border-color: red`;
                    statusMessage.style.cssText = `color: red`;
                    statusMessage.textContent = checkValueMessage;
                }
            })
            .catch((error) => {
                statusMessage.style.cssText = `color: red`;
                statusMessage.textContent = errorMessage;
                console.error(error);
            })
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

export default addInputForm;