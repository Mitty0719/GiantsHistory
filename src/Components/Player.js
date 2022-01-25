import React from 'react';

function Player(props){
    return (
        <div className='player-ground ground'>
            <div className='player-con'>
                {props.players.map((player, index)=>{
                    return (
                        <div key={index} className='player'>{player.name}<span className='position'>{player.position}</span></div>
                    )
                })}
            </div>
        </div>
    );
}

export default Player;