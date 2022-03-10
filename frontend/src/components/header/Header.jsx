import React from 'react';
import './header.scss';
import axios from 'axios';
import { TaskTrackerContext } from '../../context/TaskTrackerContext';

const Header = () => {
	const taskIn = React.useRef(null);
	const addBtn = React.useRef(null);
	const [task, setTask] = React.useState({ task: '' });
	const { getTasks, editItem, editTask } = React.useContext(TaskTrackerContext);

	React.useEffect(() => {
		if (editItem.item) {
			taskIn.current.value = editItem.item.task;
			setTask({ task: taskIn.current.value });
		}
	}, [editItem]);

	return (
		<header>
			<div className='container'>
				<div className='heading'>
					<h1>Task Tracker</h1>
				</div>
				<div className='creation'>
					<textarea
						className='task-in'
						rows='5'
						placeholder='Task Text...'
						ref={taskIn}
						onChange={(e) => {
							setTask({ task: e.currentTarget.value });
						}}
					/>
					<button
						className='btn-add'
						ref={addBtn}
						value='Add'
						onClick={async () => {
							if (editItem.item) {
								await editTask(task.task);
							} else if (taskIn.current.value) {
								try {
									await axios.post('tasks', task);
								} catch (error) {
									console.log(error);
								}
							}
							await getTasks();
							taskIn.current.value = '';
							setTask({ task: taskIn.current.value });
						}}>
						{editItem.item ? 'Edit' : 'Add'}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
