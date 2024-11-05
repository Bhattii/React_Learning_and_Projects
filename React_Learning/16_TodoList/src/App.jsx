import './App.css';
import Add from './components/Add';
import Delete from './components/Delete';
import TodoName from './components/TodoName';

function App() {
	return (
		<>
			<div className="flex flex-col  justify-center items-center">
				<TodoName />
				<div className="grid grid-cols-1 items-center justify-center gap-5 text-center text-xl my-1 sm:grid-cols-3">
					<Add />
					<Delete />
					<Delete />
				</div>
			</div>
		</>
	);
}

export default App;
