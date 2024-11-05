import React from 'react';

function Delete(props) {
	return (
		<>
			<p>{props.name}</p>
			<p>{props.date}</p>
			<button className=" bg-red-600 px-5 py-2 rounded text-white">
				Delete
			</button>
		</>
	);
}

export default Delete;
