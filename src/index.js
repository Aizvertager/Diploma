'use strict';

import showPopupCall from './modules/showPopupCall';
import sendForm from './modules/sendForm';
import regEx from './modules/regEx';
   
// скрытие/отображение модального окна
showPopupCall();
// форма отправки
sendForm('formMain');
sendForm('formCall');
sendForm('formCallSecond');
//в инпутах, где вводится номер телефона, разрешен ввод только цифр, 
//а в полях "Ваше имя" только кириллица
regEx();
