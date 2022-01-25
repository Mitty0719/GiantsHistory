import { useState, useEffect } from 'react';
import './css/reset.css';
import './css/common.css';
import Issue from './Components/Issue';
import Player from './Components/Player';
import Gallery from './Components/Gallery';
import { moveScroll, getPlayers, getIssues } from './js/main';

function App() {
  useEffect(()=>{
    moveScroll(pageState);
  });
  
  let [pageState, setPageState] = useState(0);
  let [players, setPlayers] = useState(getPlayers());
  let [isuues, setIssues] = useState(getIssues());

  return (
    <div className='App'>
      <figure className='btn-home-con' onClick={() => { setPageState(0); moveScroll(0)}}>
        <img src='/images/logo/logo-6.svg' alt='logo-img'></img>
      </figure>
      <div className='ground-wrap'>
        <ul className=''>
          <li className='year'></li>
        </ul>
        <div className='main-ground ground'>
            <div className='main-logo-con'>
                <figure className='logo-img-con'>
                  <img src='/images/logo/logo-6.svg' alt='logo-img'></img>
                </figure>
                <ul className='main-menu-con'>
                  <li className='btn-to-issue btn-menu' onClick={() => { setPageState(1)}}>ISSUE</li>
                  <li className='btn-to-player btn-menu' onClick={() => { setPageState(2)}}>PLAYER</li>
                  <li className='btn-to-gallery btn-menu' onClick={() => { setPageState(3)}}>GALLERY</li>
                </ul>
            </div>
        </div>
        <Issue issues={isuues}></Issue>
        <Player players={players}></Player>
        <Gallery></Gallery>
      </div>
    </div>
  );
}

export default App;
