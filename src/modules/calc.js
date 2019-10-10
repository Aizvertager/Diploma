import showPopup from "./showPopup";

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
            secondWell = document.getElementById('second-well'),
            selectMetr = document.querySelectorAll('.form-control');
            secondWell.style.display = 'none';

        checkWell.addEventListener('click', () => {
            let price = 10000, result = 0;
            if (checkWell.checked) {
                secondWell.style.display = 'none';
                selectMetr[2].disabled = true;
            } else {
                price = 15000;
                secondWell.style.display = 'block';
            }

        });

        selectMetr.forEach((elem, index) => {
            let sel = elem;
            //.options[elem.selectedIndex].value
            console.log('sel: ', sel);
            // if (sel === '1.4 метра') {
            //     if (sel === '1 штука') {
            //         result += price;
            //     } else if (sel === '2 штуки') {
            //         result += price + price * 0.3;
            //     } else if (sel === '3 штуки') {
            //         result += price + price * 0.5;
            //     }
            // }
        });

        // const sum = () => {
        //     if()
        // };

        const calcResult = document.getElementById('calc-result');

};

export default calc;