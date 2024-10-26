import React, { useState } from 'react';

function UpdateArray() {
	const [food, setFood] = useState(['Apple', 'Orange', 'Banana']);
	const handleAddFood = () => {
		const newFood = document.getElementById('input-food').value;
		document.getElementById('input-food').value = '';
		setFood((f) => [...f, newFood]);
	};
	// const handleRemoveFood = (index) => {
	// 	setFood(food.filter((_, i) => i !== index));
	// };
	return (
		<>
			<h2>List of Food</h2>
			<ul>
				{food.map((item, index) => {
					return (
						<li
							key={index}
							// onClick={handleRemoveFood(index)}
						>
							{item}
						</li>
					);
				})}
			</ul>
			<input
				type="text"
				id="input-food"
				placeholder="Enter food"
			/>
			<button onClick={handleAddFood}>Add Food</button>
			{/* <button onClick={handleRemoveFood}>Remove Food</button> */}
		</>
	);
}

export default UpdateArray;
