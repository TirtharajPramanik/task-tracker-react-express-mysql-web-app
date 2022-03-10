import React from 'react';
import './task.scss';
import axios from 'axios';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdDeleteSweep } from 'react-icons/md';
import { TaskTrackerContext } from '../../context/TaskTrackerContext';

const Task = ({ task }) => {
	const { getTasks } = React.useContext(TaskTrackerContext);

	return (
		<li className='task-item' key={task.id}>
			<p className='task-text'>{task.task}</p>
			<div className='btns'>
				<RiEdit2Fill className='btn-edit' />
				<MdDeleteSweep
					className='btn-dlt'
					onClick={async () => {
						await axios.delete(`tasks/${task.id}`);
						await getTasks();
					}}
				/>
			</div>
		</li>
	);
};

export default Task;
