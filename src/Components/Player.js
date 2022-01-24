import React from 'react';

function Player(props){
    return (
        <div className='player-ground ground'>
            {props.players.map((player, index)=>{
                return (
                    <div key={index}>{player.name}</div>
                )
            })}
        </div>
    );
}

export default Player;