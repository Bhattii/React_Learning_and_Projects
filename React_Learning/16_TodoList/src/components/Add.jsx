import React from 'react';

function Add() {
	let arr = ['Apple', 'abc', 'cds', 'adac', 'asdf', 'jfas'];
	// let arr = [];
	return (
		<>
			{arr.length === 0 ? <h3>Array is emplty</h3> : null}
			<ul>
				{arr.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
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
