import React, { useState } from 'react';

function TollPlaza() {
	const [price, setPrice] = useState(20);
	const [totalSales, setTotalSales] = useState(0);
	const prices = {
		bike: 20,
		car: 30,
		van: 40,
		bus: 50,
		truck: 60,
	};

	const updatePrice = (event) => {
		const selectedOption = event.target.value;
		setPrice(prices[selectedOption]);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setTotalSales(totalSales + price);
	};

	return (
		<div className="flex justify-center items-center flex-col">
			<h1 className="font-bold text-xl text-red-700">Toll Plaza</h1>

			<form
				className="flex flex-col"
				onSubmit={handleSubmit}>
				<label
					htmlFor="options"
					className="mt-5 font-bold text-green-600">
					Choose an option:
				</label>
				<div className="flex items-center justify-center mt-5">
					<select
						id="options"
						name="options"
						className="border px-3 py-2 bg-slate-200"
						onChange={updatePrice}>
						<option value="bike">Bike</option>
						<option value="car">Car</option>
						<option value="van">Van</option>
						<option value="bus">Bus</option>
						<option value="truck">Truck</option>
					</select>

					<div
						id="price"
						className="px-5 font-bold text-2xl text-green-600">
						Rs.{price}
					</div>
				</div>
				<button
					type="submit"
					className="m-2 p-3 bg-blue-500">
					Submit
				</button>
			</form>

			<div className="mt-5 font-bold text-2xl text-green-700">
				Total Sales for Today: Rs.{totalSales}
			</div>
		</div>
	);
}

export default TollPlaza;
