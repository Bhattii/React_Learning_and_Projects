import UserGreeting from './UserGreeting';

function App() {
	return (
		<>
			<UserGreeting
				isLoggedIn={true}
				username="Imran Bhatti"
			/>
			<UserGreeting />
		</>
	);
}

export default App;
