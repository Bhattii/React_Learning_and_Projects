import React, { useState } from 'react';

function UseState() {
	const [name, setName] = useState('Guest');
	const [quantity, setQuantity] = useState(1);
	const [comment, setComment] = useState('');
	const [payment, setPayment] = useState('Visa');
	const [shipping, setShipping] = useState('Pick Up');

	const handleNameState = (e) => {
		setName(e.target.value);
	};

	const handleQuanitityChange = (event) => {
		setQuantity(event.target.value);
	};

	const handleCommentChange = (e) => {
		setComment(e.target.value);
	};

	const handlePaymentChange = (e) => {
		setPayment(e.target.value);
	};

	const handleShippingChange = (e) => {
		setShipping(e.target.value);
	};
	return (
		<>
			<input
				value={name}
				onChange={handleNameState}
			/>
			<p>Name: {name}</p>

			<input
				value={quantity}
				onChange={handleQuanitityChange}
				type="number"
			/>
			<p>Number: {quantity}</p>

			<textarea
				value={comment}
				onChange={handleCommentChange}
				placeholder="Enter Delievery Instructions"
			/>
			<p>Comment: {comment}</p>

			<select
				name=""
				id=""
				value={payment}
				onChange={handlePaymentChange}>
				<option value="">Select an Option</option>
				<option value="Visa">Visa</option>
				<option value="Master Cart">Master Cart</option>
				<option value="Gift Cart">Gift Cart</option>
			</select>
			<p>Payment: {payment}</p>

			<label htmlFor="">
				<input
					type="radio"
					value="Pick Up"
					onChange={handleShippingChange}
					checked={shipping === 'Pick Up'}
				/>
				Pick Up
			</label>
			<label htmlFor="">
				<input
					type="radio"
					value="Deleivery"
					onChange={handleShippingChange}
					checked={shipping === 'Deleivery'}
				/>
				Deleivery
			</label>
			<p>Shipping: {shipping}</p>
		</>
	);
}

export default UseState;
