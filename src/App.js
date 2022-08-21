import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Views/Main.js';
import YearSection from './Views/YearSection.js'

function App() {
  const [year, setYear] = useState(0);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main setYear={setYear}></Main>}/>
          <Route path='/year/*' element={<YearSection year={year}></YearSection>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
