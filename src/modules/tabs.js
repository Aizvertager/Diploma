const tabs = (accordionNumber, tabHeader, tabContent) => {

    const accordion = document.getElementById(accordionNumber),
        panelTab = document.querySelectorAll(tabHeader),
        panelContent = document.querySelectorAll(tabContent);

    accordion.addEventListener('click', (e) => {
        let target = e.target;
        target = target.closest(tabHeader);
        if(target) {
            panelTab.forEach((elem, index) => {
                if(elem === target) {
                    
                    panelContent.forEach((block, i) => {
                        if(index === i) {
                            block.style.display = 'block';
                        } else {
                            block.style.display = 'none';
                        }
                    });

                }
            });
        }

    });
};

export default tabs;