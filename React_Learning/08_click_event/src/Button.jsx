import React from 'react';

function Button() {
	const handlClick = (e) => {
		return (e.target.textContent = 'Ouch😒');
	};

	return <button onClick={(e) => handlClick(e)}>click me 😊</button>;
}

export default Button;
