function Year(){
  return(
    <>
    {getYearList()}
    </>
  );
}

function getYearList(){
  const yearList = [];
  for(let i = 1982; i <= new Date().getFullYear(); i++){
    yearList.push(
      <li className="year-item" key={i}>
        <span>{i}</span>
      </li>
    );
  }
  return yearList;
}

export default Year;