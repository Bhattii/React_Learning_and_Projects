import React from 'react';
import Numeric from './components/Numeric';
import Operators from './components/Operators';
import Display from './components/Display';

function App() {
	return (
		<div className="w-full h-80 mt-10 flex justify-center items-center">
			<div className="border p-5 w-60 bg-slate-50">
				<Display />
				<div className="flex gap-1">
					<Numeric />
					<Operators />
				</div>
			</div>
		</div>
	);
}

export default App;
