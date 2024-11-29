// Calculator.js
import React, { useState } from 'react';
import Buttons from './Buttons';
import Display from './Display';

function Calculator() {
	const [content, setContent] = useState('');

	// Function to handle button clicks
	const handleClick = (value) => {
		if (value === '=') {
			if (content.trim() === '') {
				// Prevent evaluating empty content
				setContent('');
				return;
			}
			try {
				// Evaluate the expression
				setContent(eval(content.replace('x', '*')).toString());
			} catch {
				setContent('Error');
			}
		} else if (value === 'C') {
			// Clear display
			setContent('');
		} else {
			// Append clicked value to the content
			setContent(content + value);
		}
	};

	return (
		<div>
			<Display content={content} />
			<Buttons onButtonClick={handleClick} />
		</div>
	);
}

export default Calculator;
