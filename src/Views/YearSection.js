import { memo, useEffect, useState } from 'react';
import { getPlayers } from '../js/data.js';
import PlayerCard from '../Components/PlayerCard';
import Title from '../Components/Title';

function YearSection(props){

  const [players, setPlayers] = useState();

  useEffect(()=>{
    setArticle();
    setPlayer();
  }, []);

  function setArticle(){
    
  }
  async function setPlayer(){
    let players;
    let playerDom = [];
    await getPlayers('2010', (data) => players = data);

    for(let player of players){
      let playerName = player.name;
      if(playerName.includes('(')){
        playerName = playerName.slice(0, playerName.indexOf('('));
      }

      playerDom.push((
        <PlayerCard key={`${player.name}${player.position}}`} name={playerName} position={player.position} image='./images/player/image001.png'/>
      ));
    }
    
    setPlayers(playerDom);
  }

  return (
    <div className="year-section-wrap">
      <section className="year-content-con">
        <article className="year-image-con">
          <div className="year-image"></div>
        </article>
        <article className="year-desc-con">
          <div className="year-desc-title-con">
            <h4 className="year-desc-title">연도별 제목</h4>
          </div>
          <div className="year-desc-content-con">
            <p className="year-desc-content">
              연도별 내용
            </p>
          </div>
        </article>
      </section>
      <Title text='선수단'/>
      <section className="year-player-con">
        <article className="player-list-con">
          <div className="player-list">
            {players}
          </div>
        </article>
      </section>

    </div>
  );
}

export default memo(YearSection);