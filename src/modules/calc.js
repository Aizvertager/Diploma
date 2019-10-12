const calc = () => {

    const constructBtn = document.querySelectorAll('.construct-btn'),
        tabcontent = document.querySelectorAll('.panel-collapse-two');

        constructBtn.forEach((elem, index) => {
            let numbersTab = tabcontent.length;

            elem.addEventListener('click', () => {

                for(let i = 0; i < tabcontent.length; i++) {

                    tabcontent[i].style.display = 'none';
                    if (index === i) {
                        i++;
                        tabcontent[i].style.display = 'block';
                    } else if (index === 3) {
                        numbersTab.style.display = 'block';
                    }

                }

            }); 

        });

    const accordion = document.getElementById('accordion'),
        secondWell = document.getElementById('second-well');
        secondWell.style.display = 'none';

        accordion.addEventListener('change', (e) => {
            let target = e.target;

            if (target.matches('#myonoffswitch')) {
                if(target.checked) {
                    secondWell.style.display = 'none';
                } else {
                    secondWell.style.display = 'block';
                }
            } 

            if (target.matches('#myonoffswitch') || target.matches('.form-control') ||
            target.matches('#myonoffswitch-two') || target.matches('#homeDistance')) {
                countSum();
            }
        });

        const firstSwitch = document.getElementById('myonoffswitch'),
            secondSwitch = document.getElementById('myonoffswitch-two'),
            formControls = document.querySelectorAll('.form-control'),
            calcResult = document.getElementById('calc-result'),
            homeDistance = document.getElementById('homeDistance'),
            calculator = {};
        
        const countSum = () => {
            let price,
                typeWell,
                checkBottom,
                firstSelect = formControls[0].options[formControls[0].selectedIndex].value, 
                secondSelect = formControls[1].options[formControls[1].selectedIndex].value, 
                thirdSelect = formControls[2].options[formControls[2].selectedIndex].value, 
                fourthSelect = formControls[3].options[formControls[3].selectedIndex].value;

            //Цена в зависимости от выбора количества колодцев
            if(!firstSwitch.checked) { //2-х камерный колодец
                price = 15000;
                typeWell = 'Двухкамерный колодец';
                calculator.diametrSecond = thirdSelect;
                calculator.countRingsTwo = fourthSelect;

                if (firstSelect === '2 метра') {
                    price += price * 0.2;  
                    
                    if (secondSelect === '2 штуки') {
                        price += price * 0.3;
                    } else if (secondSelect === '3 штуки') {
                        price += price * 0.5;
                    } 
                    
                } 
                
                if (thirdSelect === '2 метра') {
                    price += price * 0.2;  
                    
                    if (fourthSelect === '2 штуки') {
                        price += price * 0.3;
                    } else if (fourthSelect === '3 штуки') {
                        price += price * 0.5;
                    } 
                    
                }

            } else { //однокамерный
                price = 10000;
                typeWell = 'Однокамерный колодец';
                thirdSelect = '';
                fourthSelect = '';

                if (firstSelect === '2 метра') {
                    price += price * 0.2;

                    if (secondSelect === '2 штуки') {
                        price += price * 0.3;
                    } else if (secondSelect === '3 штуки') {
                        price += price * 0.5;
                    }    

                }

            }

            //Наличие днища
            if(!secondSwitch.checked) {
                price += 2000;
                checkBottom = 'Нету дна';
            } else {
                price += 1000;
                checkBottom = 'Есть дно';
            }

            calcResult.value = price;

            calculator.typeWell = typeWell;
            calculator.diametrFirst = firstSelect;
            calculator.countRingsFirst = secondSelect;
            calculator.checkBottom = checkBottom;
            calculator.homeDistance = homeDistance.value;
            calculator.calcResult = calcResult.value;

        };

        return calculator;
        
};

export default calc;