import { useState, useRef, useEffect } from 'react';
import { getYears, getLegend } from '../js/data';
import Title from '../Components/Title'

function Main(props){

  const [selectedEmblem, setSelectedEmblem] = useState('emblem06');
  const [yearDom, setYearDom] = useState([]);
  const [selectedLegend, setSelectedLegend] = useState('10');
  const [legendName, setLegendName] = useState();
  const [legendNumber, setLegendNumber] = useState();
  const [legendCareerDom, setLegendCareerDom] = useState();

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
  function clickLegendControl(number){
    setSelectedLegend(number);
    changeLegend();
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
  async function changeLegend(){
    let legend;
    let legendDummy = [];
    await getLegend(selectedLegend, (data) => legend = data);

    setLegendName(legend.name);
    setLegendNumber(legend.number);
    for(let career of legend.career){
      if(!career) continue;
      legendDummy.push((
      <li key={career.id} className="legend-career-item">{
        (career.year ? `${career.year}년 ` : '') + `${career.title}`
      }</li>
      ));
    }

    setLegendCareerDom(legendDummy);
  }
  
  return (
    <>
    <section className="main-section">
    </section>
    <Title text="Giant's Years"/>
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
    <Title text="Giant's Legend"/>
    <section className="legend-section">
      <article className="legend-wrap">
        <div className="legend-image-con">
          <div className="legend-image"></div>
        </div>
        <div className="legend-desc-con">
          <div className="legend-personal-con">
            <div className="legend-personal-inner">
              <h4 className="name">{legendName}</h4>
              <h4 className="number">{legendNumber}</h4>
            </div>
          </div>
          <div className="legend-career-con">
            <ul className="legend-career-list">
              {legendCareerDom}
            </ul>
          </div>
        </div>
      </article>
      <div className="legend-control-con">
        <ul className="legend-control-list">
          <li onClick={() => clickLegendControl('11')}></li>
          <li onClick={() => clickLegendControl('10')}></li>
          <li onClick={() => clickLegendControl('V3')}></li>
        </ul>
      </div>
    </section>
    <Title text="Giant's Signature"/>
    <section className="honor-section">

    </section>
    </>
  );
}

export default Main;