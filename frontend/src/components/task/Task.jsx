import React from 'react';
import './task.scss';
import axios from 'axios';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDeleteSweep } from 'react-icons/md';
import { TaskTrackerContext } from '../../context/TaskTrackerContext';

const Task = ({ task }) => {
	const { getTasks, findTask } = React.useContext(TaskTrackerContext);

	return (
		<li className='task-item' key={task.id}>
			<p className='task-text'>{task.task}</p>
			<div className='btns'>
				<RiEdit2Fill
					className='btn-edit'
					onClick={async () => {
						await findTask(task.id);
					}}
				/>
				<MdDeleteSweep
					className='btn-dlt'
					onClick={async () => {
						try {
							await axios.delete(`tasks/${task.id}`);
							await getTasks();
						} catch (error) {
							console.log(error);
						}
					}}
				/>
			</div>
		</li>
	);
};

export default Task;
