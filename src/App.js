import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  const [towers, setTowers] = useState([5, 0, 0])
  const [selectedTower, setSelectedTower] = useState();

  function handleSelectTower(idx) {
    setSelectedTower(idx)
  }

  return (
    <div className="App">
      <div className='wrapper'>
        {towers.map((towerHeight, index) => (
          <div className={selectedTower === index ? 'hanoi' : 'selected'}
          key={index} 
          onClick={() => (handleSelectTower(index))}>
          {towerHeight}
          <div className='line'>
          </div>
            <div className='disks'>
              {[...new Array(towerHeight)].map((_, idx) => (
                <div className='disc'
                  style={{ width: `${idx * 10 + 10}px` }}>
                </div>
              ))
              }
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default App;
