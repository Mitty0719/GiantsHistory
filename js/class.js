class Year {
    constructor(year){
        this.year = year;
        this.init();
    }

    init(){
        this.createYearElem();
    }

    createYearElem(){
        const el = document.createElement('li');
        el.className = 'year';
        el.innerText = this.year;
        yearProp.yearCon.appendChild(el);
    }

}