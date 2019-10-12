const addCalculatorForm = (idForm, func) => {
    let vl = func;
    //создали сообщения
    const errorMessage = 'Произошла ошибка, проверьте правильно ли введены данные',
        loadMessage = 'Ваш запрос обрабатывается',
        successMessage = 'Ваша заявка принята',
        checkValueMessage = 'Заполните поля';

    const form = document.getElementById(idForm),
        formInputs = form.querySelectorAll('input'),
        statusMessage = document.createElement('div');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.appendChild(statusMessage);
        for (let i = 0; i < formInputs.length; i++) {
            if(formInputs[i].value === '') {
                formInputs[i].style.cssText = `border: 2px solid red`;
                statusMessage.style.cssText = `color:red`;
                statusMessage.textContent = checkValueMessage;
                return false;
            }
        }
        statusMessage.textContent = loadMessage;
        statusMessage.style.cssText = `color:green;font-size:18px`;
        const formData = new FormData(form);
        //Создаем объект для AJAX
        let body = {};
        //Перебираем ключ/значение в formData
        formData.forEach((val, key) => {
            body[key] = val;
        });

        let all = {...body, ...vl};

        postData(all)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                statusMessage.style.cssText = `color:green;font-size:18px`;
                if(response.status === 200) {
                    form.reset();
                    formInputs.forEach((elem) => {
                        elem.style.cssText = `border: 1px solid #ddd;`;
                    });
                }
            })
            .catch((error) => {
                statusMessage.style.cssText = `color: red`;
                statusMessage.textContent = errorMessage;
                console.error(error);
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

export default addCalculatorForm;