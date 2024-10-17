import './App.css';
import Student from './Student';

function App() {
	return (
		<>
			<Student
				name="Imran"
				age={24}
				isStudent={true}
			/>
			<Student
				name="Ali"
				age={30}
				isStudent={false}
			/>
			<Student
				name="Ahmed"
				age={25}
				isStudent={true}
			/>
			<Student />
		</>
	);
}

export default App;
