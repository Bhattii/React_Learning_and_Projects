// Display.js
import React from 'react';

function Display({ content }) {
	return (
		<div className="border py-2 px-5 text-right bg-gray-100 h-10">
			{content}
		</div>
	);
}

export default Display;
