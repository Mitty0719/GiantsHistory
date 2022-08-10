import Year from '../Components/Year.js';
import Legend from './Legend.js';

function Main(props){

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
  
  return (
    <>
    <section className="main-section">
    </section>
    <section className="year-section">
      <article className="year-wrap">
        <div className="year-list-con">
          <ul className="year-list">
            <li className="year-item">2011</li>
            <li className="year-item">2012</li>
            <li className="year-item">2013</li>
            <li className="year-item">2014</li>
          </ul>
        </div>
        <div className="year-content-con">
          <div className="year-image-con">
            <div className="year-image"></div>
          </div>
          <div className="year-desc-con">
            <h4>2012</h4>
            <p>lorem</p>
            <div className="year-button-con">
              <button className="year-button">바로가기</button>
            </div>
          </div>
        </div>
      </article>
      <div className="logo-list-con">
        <ul className="logo-">
          <li></li>
        </ul>
      </div>
    </section>
    <section className="legend-section">
      <ul className="legend-list">
        <Legend></Legend>
      </ul>
    </section>
    <section className="honor-section">

    </section>
    </>
  );
}

export default Main;