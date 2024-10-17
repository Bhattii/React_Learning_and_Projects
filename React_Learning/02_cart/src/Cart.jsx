import profilePic from './assets/Update.jpg';
function Cart() {
	return (
		<>
			<div className="w-48 border p-5 m-5 shadow-2xl rounded-md inline-block ">
				<img
					src={profilePic}
					alt="Profile Picture"
					className=" pb-5"
				/>
				<h2 className=" font-bold">Hi, Coders</h2>
				<p>I write a code and make the website</p>
			</div>
		</>
	);
}

export default Cart;
