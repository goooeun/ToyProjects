const list = document.querySelectorAll('li');
list.forEach(item => {
    item.addEventListener('click', function() {
        removeActive();
        this.classList.add('active');
        const icon = this.querySelector('.icon');
        const bgColor = window.getComputedStyle(icon).getPropertyValue('color');
        document.querySelector('body').style.backgroundColor = bgColor;
    })
})

function removeActive() {
    list.forEach(item => {
        item.classList.remove('active');
    })
}