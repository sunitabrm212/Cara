document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector('#bar');
    const close = document.querySelector('#close');
    const nav = document.querySelector('#nav-bar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('show');
        });
    }

    if(close) {
        close.addEventListener('click', () => {
            nav.classList.remove('show');
        });
    }
});