import PropsTypes from 'prop-types';
function Student(props) {
	return (
		<>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
			<hr />
		</>
	);
}
Student.propTypes = {
	name: PropsTypes.string,
	age: PropsTypes.number,
	isStudent: PropsTypes.bool,
};
Student.defaultProps = {
	name: 'Guest',
	age: 0,
	isStudent: false,
};
export default Student;
