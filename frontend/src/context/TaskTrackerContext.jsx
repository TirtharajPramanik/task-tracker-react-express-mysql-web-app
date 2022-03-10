import React from 'react';
import axios from 'axios';

export const TaskTrackerContext = React.createContext();

const TaskTrackerContextProvider = (props) => {
	const [tasks, setTasks] = React.useState([]);
	const [editItem, setEditItem] = React.useState({});
	async function getTasks() {
		try {
			const res = await axios.get('tasks');
			const data = JSON.parse(res.data);
			setTasks(data);
		} catch (error) {
			console.log(error);
		}
	}

	async function findTask(id) {
		const item = await tasks.find((task) => task.id === id);
		setEditItem({ item });
	}

	async function editTask(updatedTask) {
		if (updatedTask) {
			try {
				await axios.put(`tasks/${editItem.item.id}`, {
					task: `${updatedTask}`,
				});
				setEditItem({});
			} catch (error) {
				console.log(error);
			}
		}
	}

	React.useEffect(() => {
		getTasks();
	}, []);

	return (
		<TaskTrackerContext.Provider
			value={{ tasks, getTasks, findTask, editItem, editTask }}>
			{props.children}
		</TaskTrackerContext.Provider>
	);
};

export default TaskTrackerContextProvider;

/*{ task: 'music classes tomorrow 9pm', id: 1 },
		{ task: 'singing classes tomorrow 3pm', id: 2 },
		{ task: 'dancing classes tomorrow 7pm', id: 3 },
		{ task: 'drawing classes tomorrow 10am', id: 4 },
		{ task: 'swimming classes tomorrow 12pm', id: 5 },*/
