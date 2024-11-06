import React from 'react';
import Numeric from './components/Numeric';
import Operators from './components/Operators';

function App() {
	return (
		<div className="w-full h-80 flex justify-center items-center">
			<div className="border p-5 w-60 ">
				<div className="border p-2 my-5">Display</div>
				<div className="flex">
					<Numeric />
					<Operators />
				</div>
			</div>
		</div>
	);
}

export default App;
