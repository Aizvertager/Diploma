'use strict';

import sendForm from './modules/sendForm';
import regEx from './modules/regEx';
import showPopupPrice from './modules/showPopupPrice';
import moreInfo from './modules/moreInfo';

// форма отправки
sendForm('formMain');
sendForm('formCall');
sendForm('formCallSecond');
sendForm('formDiscount');
sendForm('formCheck');
//в инпутах, где вводится номер телефона, разрешен ввод только цифр, 
//а в полях "Ваше имя" только кириллица
regEx();
// скрытие/отображение модального окна
showPopupPrice('#call-btn', '.popup-call');
showPopupPrice('.discount-btn', '.popup-discount');
showPopupPrice('.check-btn', '.popup-check');
showPopupPrice('.director-btn', '.popup-consultation');
moreInfo();

