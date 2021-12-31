class Year {
    constructor(year){
        this.year = year;
        this.init();
    }

    init(){
        this.createYearElem();
    }

    createYearElem(){
        const elem = document.createElement('li');
        elem.className = 'year';
        elem.innerText = this.year;
        yearProp.yearCon.appendChild(elem);
    }

}