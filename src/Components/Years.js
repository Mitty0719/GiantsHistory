import React from 'react'

function Years(props){
    const years = [
        '1976', '1977', '1978', '1979',
        '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
        '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
        '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
        '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
        '2020', '2021'
    ]

    return(
        <div className="year-ground ground">
            <ul className='year-con' onClick={()=>{props.setPageState(1);}}>
                {years.map((year, index)=>{ return <li className='year' key={index} onClick={()=>{props.setCurrentYear(year)}}>{year}</li>})}
            </ul>
            <figure className="year-logo-img">
                <img src="/images/logo/logo-6.svg" alt=""></img>
            </figure>
        </div>
    )
}

export default Years;