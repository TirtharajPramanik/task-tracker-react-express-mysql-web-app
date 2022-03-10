import React from 'react';
import './tasklist.scss';
import { TaskTrackerContext } from '../../context/TaskTrackerContext';
import Task from '../task/Task';

const TaskList = () => {
	const { tasks } = React.useContext(TaskTrackerContext);
	return (
		<main>
			<div className='container'>
				{tasks.length ? (
					<ul className='task-list'>
						{tasks.map((task, id) => (
							<Task task={task} key={id} />
						))}
					</ul>
				) : (
					<h1 className='no-task'>No Tasks Yet!</h1>
				)}
			</div>
		</main>
	);
};

export default TaskList;
