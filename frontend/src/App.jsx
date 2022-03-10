import React from 'react';
import './app.scss';
import Header from './components/header/Header';
import TaskList from './components/tasklist/TaskList';
import TaskTrackerContextProvider from './context/TaskTrackerContext';

const App = () => {
	return (
		<div className='app'>
			<TaskTrackerContextProvider>
				<Header />
				<TaskList />
			</TaskTrackerContextProvider>
		</div>
	);
};

export default App;
