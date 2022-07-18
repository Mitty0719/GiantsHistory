import { useState, useEffect } from 'react';
import Main from './Components/Main.js';


function App() {
  const [year, setYear] = useState(0);
  return (
    <div className='App'>
      <Main setYear={setYear}></Main>
    </div>
  );
}

export default App;
