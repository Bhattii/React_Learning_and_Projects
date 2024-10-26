import React, { useState } from 'react';

function TollPlaza() {
	const [price, setPrice] = useState(30);
	const [balance, setBalance] = useState(0);
	const [totalSales, setTotalSales] = useState(0);
	const [amount, setAmount] = useState(0);
	const [paidAmount, setPaidAmount] = useState(0); // New state for paid amount
	const [selectedVehicle, setSelectedVehicle] = useState('car');
	const [showReceipt, setShowReceipt] = useState(false);
	const [showTotalSale, setShowTotalSale] = useState(false);

	const prices = {
		bike: 20,
		car: 30,
		van: 40,
		bus: 50,
		truck: 60,
	};

	const updatePrice = (event) => {
		const vehicle = event.target.value;
		setSelectedVehicle(vehicle);
		setPrice(prices[vehicle]);
	};

	const handleBalance = (event) => {
		const enteredAmount = Number(event.target.value);
		setAmount(enteredAmount);
		setBalance(enteredAmount - price);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setTotalSales(totalSales + price);
		setBalance(amount - price);
		setPaidAmount(amount); // Set paidAmount to entered amount for the receipt
		setShowReceipt(true);
		setShowTotalSale(false);
		setAmount(0); // Clear amount after submission to reset form
	};

	const printReceipt = () => {
		window.print();
	};

	const handleTotalSaleClick = () => {
		setShowTotalSale(true);
	};

	return (
		<div className="flex justify-center items-center flex-col my-10">
			<h1 className="font-bold text-4xl text-red-700">
				Hassan Abdal Toll Plaza
			</h1>

			<form
				className="flex flex-col"
				onSubmit={handleSubmit}>
				<label
					htmlFor="amount"
					className="text-blue-800 font-bold text-2xl mt-10 mb-3">
					Enter Amount
				</label>
				<input
					type="number"
					name="amount"
					className="border-2 p-2 text-lg font-bold"
					value={amount || ''} // Set input value to amount state or empty string to clear field
					onChange={handleBalance}
				/>
				<div className="flex items-center justify-center my-10">
					<select
						id="options"
						name="options"
						className="border px-3 py-2 bg-slate-200 text-xl"
						value={selectedVehicle}
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
					className="m-2 p-3 bg-blue-500 font-bold">
					Enter
				</button>
			</form>

			<div className="mt-5 font-bold text-2xl text-red-700">
				Balance: Rs.{balance}
			</div>

			{showReceipt && (
				<div className="receipt mt-10 p-5 border-2 border-gray-300 bg-yellow-200 rounded-lg w-80">
					<h2 className="text-xl font-bold text-center mb-5">
						Toll Plaza Receipt
					</h2>
					<p className="text-lg">
						<strong>Toll Plaza:</strong> Hassan Abdal Toll Plaza
					</p>
					<p className="text-lg">
						<strong>Amount Paid: </strong> Rs.{paidAmount}{' '}
						{/* Display paid amount */}
					</p>
					<p className="text-lg">
						<strong>Deduction Fee:</strong> Rs.{price}
					</p>
					<p className="text-lg">
						<strong>Returnable Amount:</strong> Rs.{balance}
					</p>
					<button
						className="mt-3 p-2 bg-gray-500 text-white font-bold"
						onClick={printReceipt}>
						Print Receipt
					</button>
				</div>
			)}

			<button
				className="mt-5 p-3 bg-green-500 font-bold"
				onClick={handleTotalSaleClick}>
				Show Total Sale
			</button>

			{showTotalSale && (
				<div className="mt-5 font-bold text-2xl text-green-700">
					Total Sale: Rs.{totalSales}
				</div>
			)}
		</div>
	);
}

export default TollPlaza;
