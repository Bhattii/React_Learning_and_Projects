import React, { useEffect, useState } from 'react';

function UseEffect() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `Count: ${count}`;
	}, [count]);

	function add() {
		setCount(count + 1);
	}

	return (
		<>
			<div>Count: {count}</div>
			<button onClick={add}>Add</button>
		</>
	);
}
export default UseEffect;
