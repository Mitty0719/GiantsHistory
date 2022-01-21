import { React } from 'react';
import players from '../data/players.json'

let sectionInfo = [
    {
        sectionNum: 0,
        sectionRatio: 1,
        sectionHeight: 0,
    },
    {
        sectionNum: 1,
        sectionRatio: 1,
        sectionHeight: 0,
    },
    {
        sectionNum: 2,
        sectionRatio: 1,
        sectionHeight: 0,
    },
    {
        sectionNum: 3,
        sectionRatio: 1,
        sectionHeight: 0,
    },
];
let currentY = 0; // 현재스크롤 위치
let positionY = 0; // 이동해야하는 스크롤 위치
let acc = 0.05; // 스크롤 속도

function setLayout(){
    for(let i = 0; i < sectionInfo.length; i++){
        sectionInfo[i].sectionHeight = sectionInfo[i].sectionRatio * window.innerHeight;
    }
}
function scrollAnimation(){
    currentY = currentY + (positionY - currentY) * acc;
    window.scrollTo(0, currentY);
    let reqId = requestAnimationFrame(scrollAnimation);

    if(positionY - currentY < 1){
        cancelAnimationFrame(reqId);
    }
}
export function moveScroll(pageState){
    setTimeout(()=>{
        for(let i = 0; i < pageState; i++){
            positionY += sectionInfo[i].sectionHeight;
        }
        currentY = window.scrollY;

        scrollAnimation();
    }, 100);
}

window.addEventListener('load', ()=>{
    setLayout();
})