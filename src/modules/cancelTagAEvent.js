const cancelTagAEvent = () => {

    const tagA = document.querySelectorAll('a');
    tagA.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

};

export default cancelTagAEvent;