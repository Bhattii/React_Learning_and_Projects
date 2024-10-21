function List(props) {
	const category = props.category;
	const itemList = props.items;

	const listItems = itemList.map((item) => (
		<li key={item.id}>
			{item.id} ) &nbsp;
			{item.name}: &nbsp; {item.calories}
		</li>
	));
	return (
		<>
			<h1>
				<b>{category}</b>
			</h1>
			<ol>{listItems}</ol>
		</>
	);
}
export default List;
