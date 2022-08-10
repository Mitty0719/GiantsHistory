function Legend(){

  const sampleData = {
    'name': '이대호',
    'number': '10',
    'history': ''
  }
  
  return(
    <li className="legend-item">
      <div className="legend-image">

      </div>
      <div className="legend-info-con">
        <div className="legend-name">{sampleData.name}<span>{sampleData.number}</span></div>
        <ul className="legend-history">
          <li></li>
        </ul>
      </div>
    </li>
  );
}
function getLegendPlayer(){

}

export default Legend;