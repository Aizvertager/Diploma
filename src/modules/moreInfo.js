const moreInfo = () => {

    const moreBtn = document.querySelector('.add-sentence-btn'),
        blocks = document.querySelectorAll('.shadow-block');
    
    moreBtn.addEventListener('click', () => {
        blocks.forEach((elem) => {
            let parent = elem.parentNode;
            if (parent.classList.contains('hidden')) {
                parent.classList.remove('hidden');
                moreBtn.style.display = 'none';
            }
        });
    });

};

export default moreInfo;