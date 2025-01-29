import React, { useState } from 'react'
import './login.css'

const Login = ({handleLogin}) => {

	

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const submitHandler = (e) => {
		 e.preventDefault()
         handleLogin(email, password)

         setEmail("")
         setPassword("")
	} 


	return (
		<div className='flex items-center justify-center h-screen w-screen'>
			<div className='border-2 rounded-xl border-[#50C878] p-20' id='box'>
				<form 
				onSubmit={(e)=>{
		submitHandler(e)
	}} 
	className='flex flex-col items-center justify-center'>
					<input
					 value={email}
                     onChange={(e)=>{
	setEmail(e.target.value)
}}
					 required 
					 className='text-black outline-none bg-transparent border-2 font-medium border-[#50C878] text-xl py-3 px-5 rounded-full placeholder:text-grey' type="email" placeholder="Enter Your Email"
					 />
					<input 
					value={password}
                    onChange={(e)=>{
	setPassword(e.target.value)
}}
					required 
					className='text-black outline-none bg-transparent font-medium border-2 border-[#50C878] text-xl py-3 px-5 rounded-full mt-3 placeholder:text-[grey]' type="password" placeholder="Enter password"/>
					<button className='mt-7 text-white outline-none font-semibold  border-none bg-[#50C878] text-lg py-2 px-8 w-full rounded-full mt-3 placeholder:text-[grey]'>Log in</button>
				</form>
			</div>
		</div>
	)
}

export default Login