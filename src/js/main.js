import { React } from 'react';
import players from '../data/players.json'
import issues from '../data/issue.json'

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
let currentPageState = 0;
let currentY = 0; // 현재스크롤 위치
let positionY = 0; // 이동해야하는 스크롤 위치
let acc = 0.05; // 스크롤 속도

export function getPlayers(year){
    return players[year];
}
export function getIssues(year){
    return issues[year];
}
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
        executeSectionAnimation();
    }
}
export function moveScroll(pageState){
    currentPageState = pageState;
    setTimeout(()=>{
        for(let i = 0; i < pageState; i++){
            positionY += sectionInfo[i].sectionHeight;
        }
        currentY = window.scrollY;

        scrollAnimation();
    }, 100);
}

export function showIssueText(){
    const issueText = document.querySelectorAll('.issue-text-con span');
    issueText.forEach((text) => {
        text.classList.remove('issue-text-effect-off');
        text.classList.add('issue-text-effect-on');
        text.style.transitionDelay = Math.random() * 2.5 + 's';
    });
}
function executeSectionAnimation(){
    if(currentPageState === 1){
        showIssueText();
    }
}

window.addEventListener('load', ()=>{
    setLayout();
})