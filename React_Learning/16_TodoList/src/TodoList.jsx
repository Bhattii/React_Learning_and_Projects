import React from 'react';
import { useState } from 'react';

function TodoList() {
	const [tasks, setTasks] = useState([
		'Eat Breakfast',
		'Take a shower',
		'walk the dog',
	]);
	const [newTast, setNewTask] = useState('');

	function handleInputChange(event) {
		setNewTask(event.target.value);
	}

	function addTask() {}

	function deleteTask(index) {}

	function moveTaskUp(index) {}

	function moveTaskUp(index) {}

	return (
		<>
			<div className="to-do-list">
				<h1>To-Do-List</h1>
				<div>
					<input
						type="text"
						placeholder="Enter a Task"
						value={newTast}
						onChange={handleInputChange}
					/>
					<button
						className="add-button"
						onClick={addTask}>
						Add
					</button>
				</div>
				<ol>
					{tasks.map((task, index) => {
						<li key={index}>
							<span className="text">{task}</span>
							<button
								className="delete-button"
								onClick={() => deleteTask(index)}>
								Delete
							</button>
							<button
								className="move-button"
								onClick={() => moveTaskUp(index)}>
								Up
							</button>
						</li>;
					})}
				</ol>
			</div>
		</>
	);
}

export default TodoList;
