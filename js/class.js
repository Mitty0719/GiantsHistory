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

class Player {
    constructor(){
        this.name = '이대호';
        this.position = '1B';
    }
    createPlayer(){
    }
}