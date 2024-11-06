import React from 'react';

function Operators() {
	const operators = ['/', 'x', '-', '+'];
	return (
		<>
			<div className="grid grid-cols-1 gap-1">
				{operators.map((n, id) => (
					<button
						className="border px-4 py-2 rounded-xl bg-slate-400 active:bg-blue-900"
						key={id}>
						{n}
					</button>
				))}
			</div>
		</>
	);
}

export default Operators;
