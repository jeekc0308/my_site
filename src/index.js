import AOS from 'aos';
import Bideo from 'bideo.js';
import 'aos/dist/aos.css';
AOS.init();
(() => {
    const toLinks = document.querySelectorAll('a[data-to]');
    for (const t of toLinks) {
        t.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: document.querySelector(e.target.dataset.to).offsetTop,
                behavior: 'smooth'
            })
        })
    }

    const bv = new Bideo();
    bv.init({
        videoEl: document.getElementById("background_video"),
        container: document.querySelector('body'),
        resize: true,
        src: [
            {
                src: "moon.mp4",
                type: "video/mp4"
            }
        ]
    })
})();