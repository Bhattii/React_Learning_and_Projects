import { useState } from 'react';

function Square() {
	const [value, setValue] = useState(null);
	const handleClick = () => {
		setValue('X');
	};
	return (
		<button
			className="square"
			onClick={handleClick}>
			{value}
		</button>
	);
}
export default Square;
