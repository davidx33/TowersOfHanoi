import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  const [towers, setTowers] = useState([5, 0, 0])
  const [selectedTower, setSelectedTower] = useState();

  function handleClickedTower(clickedToweridx) {
    // if you are already clicked onto a tower
    if (selectedTower !== undefined) {
      // decrement clicked tower and increment the tower that is clicked afterward
      const newTowers = [...towers]
      // the tower that has already been clicked is decremented by one; tower index alrdy assigned to selectedTower
      newTowers[selectedTower]--;
      // the tower that is clicked next is incremented by one
      newTowers[clickedToweridx]++;
      setTowers(newTowers)
      // make it so that no tower is actively clicked
      selectedTower(undefined)
    } else {
      setSelectedTower(clickedToweridx)
    }
  }

  return ( 
    <div className="App">
      <div className='wrapper'>
        {towers.map((towerHeight, towerIndex) => (
          <div className={'hanoi ' + (selectedTower === towerIndex ? 'selected' : '')}
            key={towerIndex}
            // assigns selectedTower == the index of the tower selected
            onClick={() => (handleClickedTower(towerIndex))}>
            <div className='line'>
            </div>
            <div className='disks'>
              {[...new Array(towerHeight)].map((_, discIdx) => (
                <div className='disc'
                  style={{ width: `${discIdx * 10 + 10}px` }}>
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
