import React from 'react'

const TaskNumber = ({data}) => {
	return (
		<div className='flex mt-10 justify-between gap-5 w-screen'>
			<div className='rounded-xl w-[45%] py-6 px-9 bg-[#FFEE58]'>
				<h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
				<h3 className='text-xl font-medium'>New Task</h3>
			</div>
			<div className='rounded-xl w-[45%] py-6 px-9 bg-[#42A5F5]'>
				<h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
				<h3 className='text-xl font-medium'>Compleate Task</h3>
			</div>
			<div className='rounded-xl w-[45%] py-6 px-9 bg-[#66BB6A]'>
				<h2 className='text-3xl font-bold'>{data.taskCounts.active}</h2>
				<h3 className='text-xl font-medium'>Accepted Task</h3>
			</div>
			<div className='rounded-xl w-[45%] py-6 px-9 bg-[#EF5350]'>
				<h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
				<h3 className='text-xl font-medium'>Failed Task</h3>
			</div>

		</div>
	)
}

export default TaskNumber