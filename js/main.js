

const setYear = () => {
    const yearCon = document.querySelector('.year-con');
    const time = new Date();
    for(let year = 1982; year <= time.getFullYear(); year++){
        const el = document.createElement('li');
        el.classList.add('year');
        el.innerText = year;
        yearCon.appendChild(el);
    }
}

const init = () => {
    setYear();
}


window.onload = () => {
    init();
}