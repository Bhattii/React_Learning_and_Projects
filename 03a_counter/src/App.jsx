import { useState } from 'react';
import './App.css';

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((counter += 1));

    // console.log('clicked', counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1> Counter </h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>

      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
