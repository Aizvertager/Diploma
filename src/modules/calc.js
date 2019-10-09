const calc = () => {

    const constructBtn = document.querySelectorAll('.construct-btn'),
        tabcontent = document.querySelectorAll('.panel-collapse-two');
        console.log('tabcontent: ', constructBtn);

        constructBtn.forEach((elem, index) => {

            elem.addEventListener('click', () => {
                for(let i = 0; i < tabcontent.length; i++) {
                    if (index === i) {
                        i++;
                        tabcontent[i].style.display = 'block';
                    } else {
                        tabcontent[i].style.display = 'none';
                    }
                }
            }); 

        });

};

export default calc;