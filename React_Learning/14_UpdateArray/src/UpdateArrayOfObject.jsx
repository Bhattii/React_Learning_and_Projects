import React, { useState } from 'react';

function UpdateArrayOfObject() {
	const [cars, setCars] = useState([]);
	const [carYear, setCarYear] = useState(new Date().getFullYear());
	const [carMake, setCarMake] = useState('');
	const [carModel, setCarModel] = useState('');
	const handleAddCar = () => {
		const newCar = {
			year: carYear,
			make: carMake,
			model: carModel,
		};
		setCars((c) => [...c, newCar]);
	};
	const handleRemoveCar = (index) => {};
	const handleYearChange = (event) => {
		setCarYear(event.target.value);
	};
	const handleMakeChange = (event) => {
		setCarMake(event.target.value);
	};
	const handleModelChange = (event) => {
		setCarModel(event.target.value);
	};

	return (
		<>
			<h2>List of Car Objects</h2>
			<ul>
				{cars.map((car, index) => {
					<li key={index}>
						{car.year} {car.make} {car.model}
					</li>;
				})}
			</ul>
			<input
				type="number"
				value={carYear}
				onChange={handleYearChange}
			/>
			<input
				type="text"
				value={carMake}
				onChange={handleMakeChange}
				placeholder="Enter Car Make"
			/>
			<input
				type="text"
				value={carModel}
				onChange={handleModelChange}
				placeholder="Enter Car Model"
			/>
			<button onClick={handleAddCar}>Add Car </button>
		</>
	);
}

export default UpdateArrayOfObject;
