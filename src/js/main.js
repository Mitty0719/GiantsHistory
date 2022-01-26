import players from '../data/players.json'
import issues from '../data/issue.json'
let logoPath = [
    '/images/logo/logo-1.png',
    '/images/logo/logo-2.png',
    '/images/logo/logo-3.svg',
    '/images/logo/logo-4.svg',
    '/images/logo/logo-5.svg',
    '/images/logo/logo-6.svg',
]
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
        // objs: {
        //     // issueList: document.querySelector('.issue-list'),
        //     // issueImg: document.querySelector('.issue-img-con img')
        // }
    },
    {
        sectionNum: 3,
        sectionRatio: 1,
        sectionHeight: 0,
    },
    {
        sectionNum: 4,
        sectionRatio: 1,
        sectionHeight: 0,
    },
];
let currentYear = 2021;
let currentPageState = 0;
let currentY = 0; // 현재스크롤 위치
let positionY = 0; // 이동해야하는 스크롤 위치
let acc = 0.075; // 스크롤 속도

function setYear(year){
    currentYear = year;
    setLayout();
    setLogoImg();
}
function getPlayers(){
    return players[currentYear];
}
function getIssues(){
    return issues[currentYear];
}
function setLayout(){
    for(let i = 0; i < sectionInfo.length; i++){
        sectionInfo[i].sectionHeight = sectionInfo[i].sectionRatio * window.innerHeight;
    }
}
function setHomeBtnOpacity(){
    const homeCon = document.querySelector('.btn-home-con');
    if(currentPageState <= 1){
        homeCon.classList.remove('logo-visible');
    }else{
        homeCon.classList.add('logo-visible');
    }
}
function setLogoImg(){
    const homeConImg = document.querySelector('.btn-home-con img');
    const logoConImg = document.querySelector('.logo-img-con img');
    
    homeConImg.src = getYearlyLogo(currentYear);
    logoConImg.src = getYearlyLogo(currentYear);
}
function getYearlyLogo(year){
    if(year <= 1992){
        return logoPath[0];
    }else if(year <= 1995){
        return logoPath[1];
    }else if(year <= 2002){
        return logoPath[2];
    }else if(year <= 2008){
        return logoPath[3];
    }else if(year <= 2017){
        return logoPath[4];
    }else{
        return logoPath[5];
    }

}
function scrollAnimation(){
    currentY = currentY + (positionY - currentY) * acc;
    window.scrollTo(0, currentY);
    let reqId = requestAnimationFrame(scrollAnimation);

    if(Math.abs(positionY - currentY) < 1){
        cancelAnimationFrame(reqId);
        executeSectionAnimation();
        positionY = 0;
    }
    
}
function moveScroll(pageState){
    currentPageState = pageState;
    setTimeout(()=>{
        for(let i = 0; i < pageState; i++){
            positionY += sectionInfo[i].sectionHeight;
        }
        currentY = window.scrollY;

        scrollAnimation();
        setHomeBtnOpacity();
    }, 100);
}

function showIssueText(){
    const issueTitle = document.querySelectorAll('.issue-text-con .title span');
    issueTitle.forEach((text) => {
        text.classList.remove('issue-text-effect-off');
        text.classList.add('issue-text-effect-on');
        text.style.transitionDelay = Math.random() * 1.5 + 's';
    });
    const issueContent = document.querySelectorAll('.issue-text-con .content span');
    issueContent.forEach((text) => {
        text.classList.remove('issue-text-effect-off');
        text.classList.add('issue-text-effect-on');
        text.style.transitionDelay = (Math.random() * 1 + 2) + 's';
    });
}
function recycleIssueImg(){
    const issueImgs = document.querySelectorAll('.issue-img-con img');
    let onIndex = 0;

    issueImgs[0].classList.add('issue-img-on');

    let intId = setInterval(()=>{
        issueImgs.forEach((img)=>{
            img.classList.remove('issue-img-on');
        });
        issueImgs[onIndex].classList.add('issue-img-on');

        onIndex++;
        if(onIndex > issueImgs.length - 1){
            onIndex = 0;
        }
    }, 3000);
}
function getRandomSign(){
    return (Math.random() * 2 > 1 ? 1 : -1);
}
function spreadPlayer(){
    const players = document.querySelectorAll('.player-con .player');
    const rangeX = window.innerWidth / 2 - 150;
    const rangeY = window.innerHeight / 2 - 150;
    players.forEach((player)=>{
        player.style.transform = `translate(${Math.random() * rangeX * getRandomSign()}px, ${Math.random() * rangeY * getRandomSign()}px)`;
    });
}

function executeSectionAnimation(){
    if(currentPageState === 2){
        showIssueText();
        recycleIssueImg();
    } else if(currentPageState === 3){
        spreadPlayer();
    }
}

window.addEventListener('load', ()=>{
    const yearCon = document.querySelector('.year-con');
    yearCon.addEventListener('click', (e)=>{
        setYear(e.target.innerText);
    });
    yearCon.addEventListener('mouseover', (e)=>{
        const yearLogoImg = document.querySelector('.year-logo-img img');
        yearLogoImg.src = getYearlyLogo(e.target.innerText);
    });
})
// console.log(sectionInfo[1].objs.issueList);

export {getPlayers, getIssues, moveScroll, showIssueText};