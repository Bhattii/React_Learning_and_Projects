import './App.css';
import { Componets } from './components/Componets';
import { Props } from './components/Props';

function App() {
  const roll = 101;
  return (
    <>
      {/* <Componets /> */}
      <Props name='Muhammad Imran' roll={roll} />
    </>
  );
}

export default App;
