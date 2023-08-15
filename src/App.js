import React from 'react';
import './App.css';
import Crossword, { useIpuz } from '@jaredreisinger/react-crossword';

function App() {
  const data = useIpuz({
    version: 'http://ipuz.org/v2',
    kind: ['http://ipuz.org/crossword#1'],
    dimensions: { width: 4, height: 4 },
    puzzle: [
      [{ cell: 1, style: { shapebg: 'circle' } }, 2, '#', '#'],
      [3, { style: { shapebg: 'circle' } }, 4, '#'],
      [null, 5, { style: { shapebg: 'circle' } }, '#'],
      [null, null, null, '#']
    ],
    solution: [
      [null, 'S', '#', 'D', 'A', 'T', 'A', 'V', 'A'],
      [null, 'M', '#', 'E', '#', '#', '#', '#', 'L'],
      ['G',  'U', 'I', 'N', 'E', 'A', '#', '#', 'G'],
      [null, '#', '#', 'V', '#', '#', '#', '#', 'O'],
      ['M',  'I', 'N', 'E', 'S', '#', '#', '#', 'S'],
      [null, '#', '#', 'R', 'E', 'A', 'C', 'T', '#'],
      [null, '#', '#', '#', 'T', '#', '#', '#', '#'],
    ],
    clues: {
      Across: [
        [1, 'OR neighbor'],
        [3, 'Droid'],
        [5, 'Behold!'],
      ],
      Down: [
        [1, "Trucker's radio"],
        [2, 'MSN competitor'],
        [4, 'A preposition'],
      ],
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '25em', display: 'flex' }}>
          <Crossword data={data} />
        </div>
      </header>
    </div>
  );
}

export default App;