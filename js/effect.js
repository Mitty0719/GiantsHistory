function mainImgEffect(){

    const mainImg = document.querySelector('.main-img');

    let rows = 4;
    let columns = 8;
    let columnWidth = (100 / columns) + '%';
    let rowHeight = (100 / rows) + '%';
    let imgWidth = 100 * columns + '%';
    let imgHeight = 100 * rows + '%';

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            let top = -i * 100 + '%';
            let left = -j * 100 + '%';
            let delayTiming = ((columns - j) - (i * 0.5)) * 0.25 + 's';
            let elem = document.createElement('div');

            elem.classList.add('effect-box');
            elem.style.width = columnWidth;
            elem.style.height = rowHeight;
            elem.style.transitionDelay = delayTiming;

            elem.innerHTML = `<div class="effect-position" style="width:${imgWidth}; height:${imgHeight}; top:${top}; left:${left};"></div>`;
            mainImg.appendChild(elem);
        }
    }
    mainImg.querySelectorAll('.effect-box').forEach((effectBox, index)=>{
        setTimeout(()=>{effectBox.classList.add('active')}, 200);
    });
}