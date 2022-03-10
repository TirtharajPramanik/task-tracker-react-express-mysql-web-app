import React from 'react';
import './header.scss';
import axios from 'axios';
import { TaskTrackerContext } from '../../context/TaskTrackerContext';

const Header = () => {
	const taskIn = React.useRef(null);
	const [task, setTask] = React.useState({ task: '' });
	const { getTasks } = React.useContext(TaskTrackerContext);
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
						onClick={async () => {
							await axios.post('tasks', task);
							await getTasks();
							taskIn.current.value = '';
							setTask({ task: taskIn.current.value });
						}}>
						Add
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
