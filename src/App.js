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
      <div className='ground-wrap'>
        <ul className=''>
          <li className='year'></li>
        </ul>
        <div className='main-ground ground'>
            <div className='main-logo'>
                <div className='btn-to-issue' onClick={() => { setPageState(1);}}>이슈로</div>
                <div className='btn-to-player' onClick={() => { setPageState(2);}}>플레이어로</div>
                <div className='btn-to-gallery' onClick={() => { setPageState(3);}}>갤러리로</div>
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
