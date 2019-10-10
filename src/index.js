'use strict';

import sendForm from './modules/sendForm';
import regEx from './modules/regEx';
import showPopup from './modules/showPopup';
import moreInfo from './modules/moreInfo';
import tabs from './modules/tabs';
import cancelTagAEvent from './modules/cancelTagAEvent';
import addInputForm from './modules/addInputForm';
import calc from './modules/calc';

//Отмена события у тега a
cancelTagAEvent();
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
showPopup('#call-btn', '.popup-call');
showPopup('.discount-btn', '.popup-discount');
showPopup('.check-btn', '.popup-check');
showPopup('.director-btn', '.popup-consultation');
showPopup('.call-btn', '.popup-discount');
//кнопка "больше"
moreInfo();
//табы
tabs('accordion', '.panel-heading-two', '.panel-collapse-two');
tabs('accordion-two', '.panel-heading', '.panel-collapse');

addInputForm('director-form');
//калькулятор
calc();

