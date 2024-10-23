import React, { useState } from 'react';

function UpdateFunction() {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount((c) => c + 1);
		setCount((c) => c + 1);
		setCount((c) => c + 1);
	};
	const decrement = () => {
		setCount((c) => c - 1);
		setCount((c) => c - 1);
		setCount((c) => c - 1);
	};
	const reset = () => {
		setCount((c) => (c = 0));
	};
	return (
		<>
			<h1>Counting: {count}</h1>
			<button onClick={increment}>Increment</button>
			<br />
			<button onClick={decrement}>Decrement</button>
			<br />
			<button onClick={reset}>Rest</button>
		</>
	);
}

export default UpdateFunction;
