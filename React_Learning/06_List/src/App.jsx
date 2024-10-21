import List from './List';

function App() {
	const fruits = [
		{ id: 1, name: 'Apple', calories: 90 },
		{ id: 2, name: 'banana', calories: 45 },
		{ id: 3, name: 'mango', calories: 105 },
		{ id: 4, name: 'coconut', calories: 159 },
		{ id: 5, name: 'pineapple', calories: 37 },
	];
	const vegatables = [
		{ id: 7, name: 'Potatos', calories: 105 },
		{ id: 8, name: 'celery', calories: 15 },
		{ id: 9, name: 'carrots', calories: 25 },
		{ id: 10, name: 'corn', calories: 63 },
		{ id: 11, name: 'broccoli', calories: 50 },
	];
	return (
		<>
			<List
				items={fruits}
				category="fruits"
			/>
			<List
				items={vegatables}
				category="Vegatables"
			/>
		</>
	);
}

export default App;
