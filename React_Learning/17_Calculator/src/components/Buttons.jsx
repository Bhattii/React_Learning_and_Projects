// Buttons.js
import React from 'react';

function Buttons({ onButtonClick }) {
	const values = [
		7,
		8,
		9,
		'/',
		4,
		5,
		6,
		'x',
		1,
		2,
		3,
		'-',
		'.',
		0,
		'=',
		'+',
		'C',
	];

	return (
		<div className="grid grid-cols-4 gap-2 m-2">
			{values.map((value, index) => (
				<div
					className="bg-slate-400 text-center active:bg-gray-800 py-3 px-5 rounded-xl shadow-2xl shadow-white hover:scale-110 hover:bg-blue-800 text-white cursor-pointer"
					key={index}
					onClick={() => onButtonClick(value)}>
					{value}
				</div>
			))}
		</div>
	);
}

export default Buttons;
