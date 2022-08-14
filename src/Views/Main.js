import { useState, useRef, useEffect } from 'react';
import { getYears } from '../js/data';

function Main(props){

  const [selectedEmblem, setSelectedEmblem] = useState('emblem06');
  const [yearDom, setYearDom] = useState([]);

  useEffect(() => {
    changeYears();
  })

  function clickYear(e){
    let target = e.target;
    // event bubbling
    while(target.className !== 'year-item'){
      if(target === document.body){
        return;
      }
      target = target.parentNode;
    }
    props.setYear(target.querySelector('span').textContent);
  }

  function clickEmblem(emblem){
    setSelectedEmblem(emblem);
    changeYears();
  }

  async function changeYears(){
    let years;
    let yearDummy = [];
    await getYears(selectedEmblem, (data) => years = data );

    for(let year of years){
      yearDummy.push((<li key={year} className="year-item">{year}</li>));
    }
    setYearDom(yearDummy);
  }
  
  return (
    <>
    <section className="main-section">
    </section>
    <section className="year-section">
      <article className="year-wrap">
        <div className="year-list-con">
          <ul className="year-list">
            {yearDom}
          </ul>
        </div>
        <div className="year-content-con">
          <div className="year-image-con">
            <div className="year-image"></div>
          </div>
          <div className="year-desc-con">
            <h4 className="year-title">2012</h4>
            <p className="year-desc">lorem</p>
            <div className="year-button-con">
              <button className="button-blue">바로가기</button>
            </div>
          </div>
        </div>
      </article>
      <div className="emblem-wrap">
        <ul className="emblem-list">
          <li className={"emblem-item emblem01 " + (selectedEmblem === 'emblem01' ? 'selected' : '')} onClick={() => clickEmblem('emblem01')}></li>
          <li className={"emblem-item emblem02 " + (selectedEmblem === 'emblem02' ? 'selected' : '')} onClick={() => clickEmblem('emblem02')}></li>
          <li className={"emblem-item emblem03 " + (selectedEmblem === 'emblem03' ? 'selected' : '')} onClick={() => clickEmblem('emblem03')}></li>
          <li className={"emblem-item emblem04 " + (selectedEmblem === 'emblem04' ? 'selected' : '')} onClick={() => clickEmblem('emblem04')}></li>
          <li className={"emblem-item emblem05 " + (selectedEmblem === 'emblem05' ? 'selected' : '')} onClick={() => clickEmblem('emblem05')}></li>
          <li className={"emblem-item emblem06 " + (selectedEmblem === 'emblem06' ? 'selected' : '')} onClick={() => clickEmblem('emblem06')}></li>
        </ul>
      </div>
    </section>
    <section className="legend-section">
      <article className="legend-wrap">
        <div className="legend-image-con">
          <div className="legend-image"></div>
        </div>
        <div className="legend-desc-con">
          <div className="legend-personal-con">
            <div className="legend-personal-inner">
              <h4 className="name">이대호</h4>
              <h4 className="number">10</h4>
            </div>
          </div>
          <div className="legend-career-con">
            <ul className="legend-career-list">
              <li className="legend-career-item">
                2006년 1루수 골든글러브
              </li>
              <li className="legend-career-item">
                2006년 1루수 골든글러브
              </li>
              <li className="legend-career-item">
                2006년 1루수 골든글러브
              </li>
              <li className="legend-career-item">
                2006년 1루수 골든글러브
              </li>
              <li className="legend-career-item">
                2006년 1루수 골든글러브
              </li>
              <li className="legend-career-item">
                2006년 1루수 골든글러브
              </li>
              <li className="legend-career-item">
                2006년 1루수 골든글러브
              </li>
              <li className="legend-career-item">
                2006년 1루수 골든글러브
              </li>
              <li className="legend-career-item">
                2006년 1루수 골든글러브
              </li>
              <li className="legend-career-item">
                2006년 1루수 골든글러브
              </li>
            </ul>
          </div>
        </div>
      </article>
      <div className="legend-control-con">
        <ul className="legend-control-list">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
    <section className="honor-section">

    </section>
    </>
  );
}

export default Main;