const currentYear = new Date().getFullYear();

const yearProp = {
    yearCon: document.querySelector('.year-list'),
    yearArr: []
}

const setYear = () => {
    for(let year = 1982; year <= currentYear; year++){
        yearProp.yearArr.push(new Year(year));
        // console.log(year);
    }
}

const init = () => {
    setYear();
}


window.onload = () => {
    init();
}