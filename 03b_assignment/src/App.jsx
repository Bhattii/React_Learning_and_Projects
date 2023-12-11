import { useState } from 'react';

import './App.css';

function App() {
  let [counter, setCounter] = useState(1);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h2>Assignment 01 (Counter)</h2>
      <h3>Counting the value where value greater than 0 and less than 20</h3>
      <br />
      <h2>
        Counter Value <h1>{counter}</h1>
      </h2>
      <button onClick={addValue}>
        <h2>Add Value</h2>
      </button>
      <button onClick={removeValue}>
        <h2>Remove Value</h2>
      </button>
    </>
  );
}

export default App;
