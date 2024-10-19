import PropTypes from 'prop-types';
function UserGreeting(props) {
	const welocmMessage = <h2>Welcome: {props.username} </h2>;
	const loginPrompt = <h2>Please login to continue</h2>;
	return props.isLoggedIn ? welocmMessage : loginPrompt;
}
UserGreeting.proptypes = {
	isLoggedIn: PropTypes.bool,
	username: PropTypes.string,
};
UserGreeting.defaultProps = {
	isLoggedIn: false,
	username: 'guest',
};

export default UserGreeting;
