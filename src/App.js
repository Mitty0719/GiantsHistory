import { useState, useEffect } from 'react';
import './css/reset.css';
import './css/common.css';
import Years from './Components/Years';
import Issue from './Components/Issue';
import Player from './Components/Player';
import Gallery from './Components/Gallery';
import { moveScroll, getPlayers, getIssues } from './js/main';

function App() {
  let [currentYear, setCurrentYear] = useState(2021);
  let [pageState, setPageState] = useState(0);
  let [players, setPlayers] = useState(getPlayers());
  let [isuues, setIssues] = useState(getIssues());

  useEffect(()=>{
    moveScroll(pageState);
  }, [pageState]);
  useEffect(()=>{
    setPlayers(getPlayers());
    setIssues(getIssues());
  }, [currentYear])

  return (
    <div className='App'>
      <Years setPageState={setPageState} setCurrentYear={setCurrentYear}></Years>
      <figure className='btn-home-con' onClick={() => { setPageState(1)}}>
        <img src='/images/logo/logo-6.svg' alt='logo-img'></img>
      </figure>
      <div className='ground-wrap'>
        <div className='main-ground ground'>
            <div className='btn-year-con' onClick={() => { setPageState(0)}}>
              <h3>{currentYear}</h3>
            </div>
            <div className='main-logo-con'>
                <figure className='logo-img-con'>
                  <img src='/images/logo/logo-6.svg' alt='logo-img'></img>
                </figure>
                <ul className='main-menu-con'>
                  <li className='btn-to-issue btn-menu' onClick={() => { setPageState(2)}}><h5>ISSUE</h5></li>
                  <li className='btn-to-player btn-menu' onClick={() => { setPageState(3)}}><h5>PLAYER</h5></li>
                  <li className='btn-to-gallery btn-menu' onClick={() => { setPageState(4)}}><h5>GALLERY</h5></li>
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
