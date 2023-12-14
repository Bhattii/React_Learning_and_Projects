import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4'>
        Hello world!
      </h1>
      <Card user='Imran' btnText='Click Me' />
      <Card user='Ahmed' btnText='Visit Me' />
    </>
  );
}

export default App;
