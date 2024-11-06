import React from 'react';

function Numeric() {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', '0', '='];
	return (
		<>
			<div className="grid grid-cols-3 gap-1">
				{numbers.map((n, id) => (
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

export default Numeric;
