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

        const checkWell = document.getElementById('myonoffswitch'),
            accordion = document.getElementById('accordion'),
            secondWell = document.getElementById('second-well'),
            selectMetr = document.querySelectorAll('.form-control'),
            calcResult = document.getElementById('calc-result');
            secondWell.style.display = 'none';
            selectMetr[2].disabled = true;
            selectMetr[3].disabled = true;

        accordion.addEventListener('change', (e) => {
            let target = e.target,
                price = 10000,
                result = 0;

            if (target.matches('#myonoffswitch')) {
                if(target.checked) {
                    secondWell.style.display = 'none';
                    result += price;
                } else {
                    secondWell.style.display = 'block';
                    selectMetr[2].disabled = false;
                    selectMetr[3].disabled = false;
                    result += price + 5000;
                }
            } else if(target.matches('#myonoffswitch-two')) {

                if (target.checked) {
                    result += 1000;
                } else {
                    result += 2000;
                }

            }

            console.log(result);

            calcResult.value = result;
        });

        // checkWell.addEventListener('click', () => {
        //     let price = 10000;
        //     if (checkWell.checked) {
        //         secondWell.style.display = 'none';
        //     } else {
        //         price = 15000;
        //         secondWell.style.display = 'block';
        //         selectMetr[2].disabled = false;
        //         selectMetr[3].disabled = false;
        //     }

        // });

};

export default calc;