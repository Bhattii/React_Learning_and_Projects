import React from 'react';

function Delete() {
	let name = 'Buy Milk';
	let date = '16/03/2024';
	return (
		<>
			<p>{name}</p>
			<p>{date}</p>
			<button className=" bg-red-600 px-5 py-2 rounded text-white">
				Delete
			</button>
		</>
	);
}

export default Delete;
