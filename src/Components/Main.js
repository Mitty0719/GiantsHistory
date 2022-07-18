import Year from './Year.js';
import Legend from './Legend.js';
// import { useEffect } from 'react';
// import { getArticle } from '../js/data.js';

function Main(props){
  // useEffect(()=>{
  //   getArticle(1984, conoo);
  // })
  // function conoo(data){
  //   console.log(data);
  // }

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
      <ul className="year-list" onClick={clickYear}>
        <Year></Year>
      </ul>
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