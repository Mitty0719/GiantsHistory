import { memo, useState } from 'react';
import { getArticle, getPlayers } from '../js/data.js'

function YearSection(props){
  let article, players;
  getArticle(props.year, (data) => {article = data});
  getPlayers(props.year, (data) => {players = data});

  return (
    <>
    <ul>
      {setPlayer()}
    </ul>
    </>
  );


  function setPlayer(){
    const playerDom = [];

    return playerDom;
  }
}

export default memo(YearSection);