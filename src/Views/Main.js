
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
          <li className="emblem-item emblem01"></li>
          <li className="emblem-item emblem02"></li>
          <li className="emblem-item emblem03"></li>
          <li className="emblem-item emblem04"></li>
          <li className="emblem-item emblem05"></li>
          <li className="emblem-item emblem06"></li>
        </ul>
      </div>
    </section>
    <section className="legend-section">
      <article className="legend-wrap">
        <div className="legend-image-con">
          <div className="legend-image"></div>
        </div>
        <div className="legend-desc-con">
          <div className="legend-personal">
            
          </div>
          <div className="legend-career-con">
            <ul className="legend-career-list">
              <li className="legend-career-item">
                
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
    <section className="honor-section">

    </section>
    </>
  );
}

export default Main;