import { React } from 'react';

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

function setLayout(){
    for(let i = 0; i < sectionInfo.length; i++){
        sectionInfo[i].sectionHeight = sectionInfo[i].sectionRatio * window.innerHeight;
    }
}

export function moveScroll(pageState){
    setTimeout(()=>{
        let yLocation = 0;
        for(let i = 0; i < pageState; i++){
            yLocation += sectionInfo[i].sectionHeight;
        }
        window.scrollTo(0, yLocation);

    }, 100);
}

window.addEventListener('load', ()=>{
    setLayout();
})