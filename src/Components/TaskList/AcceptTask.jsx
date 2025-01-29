import React from 'react'

const AcceptTask = ({data}) => {
	return (
		<div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#EF5350] rounded-xl'>
			<div className='flex justify-between items-center'>
			    <h3 className='bg-[#E53935] text-sm px-3 py-1 rounded'>{data.category}</h3>
			    <h4 className='text-sm'>{data.taskDate}</h4>
			</div>
			    <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
			    <p className='text-sm mt-2'>{data.taskDescription}</p>
			    <div className='flex justify-between mt-6'>
			    	<button className='bg-[darkgreen] py-1 px-2 text-sm rounded'>Mark as Completed</button>
			    	<button className='bg-[darkred] py-1 px-2 text-sm rounded'>Mark as Failed</button>
			    </div>
		</div>
	)
}

export default AcceptTask