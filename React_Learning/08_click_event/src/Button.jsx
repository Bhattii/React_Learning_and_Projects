import React from 'react';

function Button() {
	const eventHandle = () => {
		console.log('ouch');
	};
	return <button onClick={eventHandle}>click me 😊</button>;
}

export default Button;
