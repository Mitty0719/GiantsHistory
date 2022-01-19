import { useState } from 'react';
import './css/reset.css';
import './css/common.css';
import Issue from './Components/Issue';
import Player from './Components/Player';
import Gallery from './Components/Gallery';
import { moveScroll } from './js/main';

function App() {

  let [pageState, setPageState] = useState(0);

  return (
    <div className='App'>
      <div className='ground-wrap'>
        <ul className=''>
          <li className='year'></li>
        </ul>
        <div className='main-ground ground'>
            <div className='main-logo'>
                <div className='btn-to-issue' onClick={() => { setPageState(1); moveScroll(pageState);}}>이슈로</div>
                <div className='btn-to-player' onClick={() => { setPageState(2); moveScroll(pageState); }}>플레이어로</div>
                <div className='btn-to-gallery' onClick={() => { setPageState(3); moveScroll(pageState); }}>갤러리로</div>
            </div>
        </div>
        <Issue></Issue>
        <Player></Player>
        <Gallery></Gallery>
      </div>
    </div>
  );
}

export default App;
