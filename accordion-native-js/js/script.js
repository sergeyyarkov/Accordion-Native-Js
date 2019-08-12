let tab = document.getElementsByClassName('tab-wrap'),
    tabContent = document.getElementsByClassName('tab-content');
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function(){
        this.classList.toggle('tab-active');
        if (this.classList.contains('tab-active')) {
            tabContent[i].classList.toggle('fadein');
            tabContent[i].style.display = 'block';
        } else {
            tabContent[i].classList.remove('fadein');
            tabContent[i].style.display = 'none';
        }
    })
}