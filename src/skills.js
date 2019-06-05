(() => {
    const skills = document.querySelectorAll('.skill');

    for (const s of skills) {
        const el = document.createElement('div');
        const text = document.createElement('h3');
        text.innerText = s.dataset.name;

        el.style.position = "relative";
        el.style.width = "100%";
        el.style.height = "100%";
        el.style.top = '-100%';
        el.style.bottom = 0;
        el.style.background = 'rgba(255,255,255,0.5)';
        el.style.display = 'flex';
        el.style.flexDirection = 'column';
        el.style.justifyContent = 'center';
        el.style.alignItems = 'center';
        el.style.opacity = '0';
        el.style.transition = 'opacity .5s';

        el.appendChild(text);
        s.appendChild(el);

        s.addEventListener('mouseover', e => {
            el.style.opacity = '1';
        });
        s.addEventListener('mouseleave', e => {
            el.style.opacity = '0';
        });
    }
})();