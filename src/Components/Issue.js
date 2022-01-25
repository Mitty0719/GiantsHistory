import React, {useState} from 'react';

function Issue(props){
    let [currentIssue, setCurrentIssue] = useState(0);
    
    return (
        <div className='issue-ground ground'>
            <div className='issue-list'>
                <div className='issue-con'>
                    <figure className='issue-img-con'>
                        {props.issues.img.map((image, index)=>{
                            return <img src={'/images/issue/'+ image + '.png'} alt={props.issues.title} key={index}></img>
                        })}
                    </figure>
                    <div className='issue-text-con'>
                        <h1 className='title'>{props.issues.title.split('').map((char, index)=>{return <span className='issue-text-effect-off' key={index}>{char}</span>})}</h1>
                        <p className='content'>{props.issues.content.split('').map((char, index)=>{return <span className='issue-text-effect-off' key={index}>{char}</span>})}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Issue;