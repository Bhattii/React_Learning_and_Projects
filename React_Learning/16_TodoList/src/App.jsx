import './App.css';
import Add from './components/Add';
import Delete from './components/Delete';
import RenderDelete from './components/RenderDelete';
import TodoName from './components/TodoName';

function App() {
	const data = [
		{
			name: 'Milk',
			date: '01/01/2024',
		},
		{
			name: 'Apple',
			date: '02/01/2024',
		},
		{
			name: 'Banana',
			date: '03/01/2024',
		},
		{
			name: 'Cava',
			date: '04/01/2024',
		},
	];
	return (
		<>
			<div className="flex flex-col  justify-center items-center">
				<TodoName />
				<div className="grid grid-cols-1 items-center justify-center gap-5 text-center text-xl my-1 sm:grid-cols-3">
					<Add />
					<RenderDelete todoItems={data} />
				</div>
			</div>
		</>
	);
}

export default App;
