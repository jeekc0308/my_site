import AOS from 'aos';
import nav from './navigation';
import './skills';
import 'aos/dist/aos.css';

AOS.init();
(() => {
    const toLinks = document.querySelectorAll('a[data-to]');
    for (const t of toLinks) {
        t.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: document.querySelector(e.target.dataset.to).offsetTop - nav.clientHeight,
                behavior: 'smooth'
            })
        })
    }
})();