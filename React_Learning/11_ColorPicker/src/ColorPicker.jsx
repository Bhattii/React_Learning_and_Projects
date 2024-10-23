import React, { useState } from 'react';

function ColorPicker() {
	const [color, SetColor] = useState('#FFFFF');
	const handleColorChange = (e) => {
		SetColor(e.target.value);
	};
	return (
		<>
			<h1>Color Picker</h1>
			<div style={{ backgroundColor: color }}></div>
			<p style={{ color: color }}>Selected Color: {color}</p>
			<br />
			<label htmlFor="">Pick a Color:</label>
			<input
				type="color"
				value={color}
				onChange={handleColorChange}
			/>
		</>
	);
}

export default ColorPicker;
