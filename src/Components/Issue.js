import React from 'react';

function Issue(props){
    return (
        <div className='issue-ground ground'>
            {props.issues.map((issue, index)=>{
                return (
                    <div className="issue-con" key={index}>
                        <figure className="issue-img-con">
                            <img src={'/images/issue/'+ issue.img + '.png'} alt={issue.title}></img>
                        </figure>
                        <div className="issue-text-con">
                            <h1>{issue.title}</h1>
                            <p>{issue.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Issue;