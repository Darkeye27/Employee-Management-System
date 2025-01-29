import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

	const [userData,setUserData] = useContext(AuthContext)
	return (
		<div className='bg-[#1c1c1c] p-5 mt-5 rounded'> 
		<div className='bg-[#EF5350] mb-2 py-2 px-4 flex justify-between rounded'>
				<h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
				<h3 className='text-lg font-medium w-1/5'>New Task</h3>
				<h5 className='text-lg font-medium w-1/5'>Active Task</h5>
				<h5 className='text-lg font-medium w-1/5'>Completed</h5>
				<h5 className='text-lg font-medium w-1/5'>Failed</h5>
			</div>
            <div className=''>
            	{userData.map(function(elem,idx){
            	return <div key={idx} className='border-2 border-[#50C878] mb-2 py-2 px-4 flex justify-between rounded'>
				<h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
				<h3 className='text-lg font-medium w-1/5 '>{elem.taskCounts.newTask}</h3>
				<h5 className='text-lg font-medium w-1/5 '>{elem.taskCounts.active}</h5>
				<h5 className='text-lg font-medium w-1/5 '>{elem.taskCounts.completed}</h5>
				<h5 className='text-lg font-medium w-1/5'>{elem.taskCounts.failed}</h5>
			</div>
            })}
            </div>
		</div>
	)
}
 
export default AllTask