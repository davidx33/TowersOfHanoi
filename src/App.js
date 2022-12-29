import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  const [towers, setTowers] = useState([3, 0, 0])

  return (
    <div className="App">
      <div>
        {towers.map((towerHeight, index) => (
          <div className='hanoi' key={index}>
            {towerHeight}
            <div className='line'>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default App;
