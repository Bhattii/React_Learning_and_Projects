import { useState } from 'react';

function MyComponent() {
	const [name, setName] = useState('Guest');
	const [age, setAge] = useState(0);
	const [isEployeed, setIsEmployeed] = useState(false);

	const updateName = () => {
		setName('Muhammad Imran');
	};
	const updateAge = () => {
		setAge(age + 1);
	};

	const toggleEmployeed = () => {
		setIsEmployeed(!isEployeed);
	};

	return (
		<>
			<div>
				<h3>Name: {name}</h3>
				<button onClick={updateName}>Set Name</button>
			</div>
			<div>
				<h3>Age: {age}</h3>
				<button onClick={updateAge}>Increment Age</button>
			</div>
			<div>
				<h3>Are you employed?:{isEployeed ? 'Yes' : 'No'}</h3>
				<button onClick={toggleEmployeed}>Set Employee Status</button>
			</div>
		</>
	);
}

export default MyComponent;
