const currentYear = new Date().getFullYear();
const yearCon = document.querySelector('.year-list')
const yearArr = [];
const playerGround = document.querySelector('.player-ground');
const playerArr = [];

const setYear = () => {
    for(let year = 1982; year <= currentYear; year++){
        yearArr.push(new Year(year));
        // console.log(year);
    }
}
const setPlayer = () => {
    for(let i = 0; i < 30; i++){
        playerArr.push(new Player());
    }
}

const init = () => {
    setYear();
    setPlayer();
}

window.onload = () => {
    init();
}