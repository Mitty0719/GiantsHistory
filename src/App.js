import './css/reset.css';
import './css/common.css';
import Main from './Components/Main';
import Issue from './Components/Issue';
import Player from './Components/Player';
import Gallery from './Components/Gallery';

function App() {
  return (
    <div className="App">
      <div className="ground-wrap">
        <Main></Main>
        <Issue></Issue>
        <Player></Player>
        <Gallery></Gallery>
      </div>
    </div>
  );
}

export default App;
