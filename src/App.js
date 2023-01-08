import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  // need to use a 2-D array, so the width's of the blocks are transferred over correctly
  const [towers, setTowers] = useState([5, 4, 3, 2, 1], [], [])
  const [selectedTower, setSelectedTower] = useState();

  function handleClickedTower(clickedToweridx) {
    // if you are already clicked onto a tower
    if (selectedTower !== undefined) {
      // decrement clicked tower and increment the tower that is clicked afterward
      const newTowers = [...towers]
      const poppedDisc = newTowers[selectedTower].pop();
      newTowers[clickedToweridx].push(poppedDisc)
      selectedTower(undefined)
    } else {
      setSelectedTower(clickedToweridx)
    }
  }

  return (
    <div className="App">
      <div className='wrapper'>
        {/* in discs, towers is mapping over an array of numbers */}
        {towers.map((discs, towerIndex) => (
          <div className={'hanoi ' + (selectedTower === towerIndex ? 'selected' : '')}
            key={towerIndex}
            // assigns selectedTower == the index of the tower selected
            onClick={() => (handleClickedTower(towerIndex))}>
            <div className='line'></div>
            <div className='disks'>
              {Array.from(discs).map((discNumber) => (
                <div className='disc'
                key={discNumber}
                  style={{ width: `${discNumber * 10 + 10}px` }}>
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
