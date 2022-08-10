import { useState, useEffect } from 'react';
import Main from './Views/Main.js';
import YearSection from './Views/YearSection.js'

function App() {
  const [year, setYear] = useState(0);
  return (
    <div className='App'>
      <Main setYear={setYear}></Main>
      <YearSection year={year}></YearSection>
    </div>
  );
}

export default App;
