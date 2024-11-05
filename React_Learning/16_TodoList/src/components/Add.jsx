import React from 'react';

function Add() {
	return (
		<>
			<input
				type="text"
				className="p-2 border border-black rounded"
			/>
			<input
				type="date"
				className="p-2 border border-black rounded"
			/>
			<button className=" bg-green-700 px-5 py-2 rounded text-white">
				Add
			</button>
		</>
	);
}

export default Add;
