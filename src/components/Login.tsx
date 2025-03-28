import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'

import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { ImAppleinc } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const Login = () => {

	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className='w-full h-screen flex items-center justify-center'>
			<div className='w-[90%] max-w-sm md:max-w-md lg:max-w-md bg-gray-900 flex flex-col items-center rounded-xl shadow-slate-500 shadow-lg p-5 gap-3'>
				<img src={reactLogo} alt='logo' className='w-12 md:w-14'/>
				<h1 className='text-lg md:text-xl font-semibold'>Welcome Back</h1>
				<p className='text-xs md:text-sm text-gray-500 text-center'>
					Don't have an account?
					<span className='text-white hover:text-blue-500 hover:underline cursor-pointer ms-2'>Sign up</span>
				</p>

				<div className='w-full flex flex-col gap-3'>
					<div className='w-full flex bg-gray-800 rounded-xl items-center p-2 gap-2'>
						<MdAlternateEmail />
						<input 
							type='email' 
							placeholder='Email account' 
							className='w-full bg-transparent border-0 outline-none text-sm md:text-base'/>
					</div>
					<div className='w-full flex bg-gray-800 rounded-xl items-center p-2 gap-2 relative'>
						<FaFingerprint />
						<input 
							type={showPassword ? 'text' : 'password' } 
							placeholder='Password' 
							className='w-full bg-transparent border-0 outline-none text-sm md:text-base'/>
						{
							showPassword ? (
								<FaRegEyeSlash 
									className='absolute cursor-pointer right-3'
									onClick={()=>{setShowPassword(!showPassword)}}
								/>
							) : (
								<FaRegEye
									className='absolute cursor-pointer right-3'
									onClick={()=>{setShowPassword(!showPassword)}}
								/>
							)
						}
					</div>
				</div>

				<button className='w-full p-2 bg-blue-500 rounded-xl hover:bg-blue-600 text-sm md:text-base cursor-pointer mt-3'>Login</button>

				<div className='w-full flex items-center'>
					<div className='w-2/3 h-[2px] bg-gray-800'></div>
					<h1 className='text-xs md:text-sm text-gray-500 px-5'>Or</h1>
					<div className='w-2/3 h-[2px] bg-gray-800'></div>
				</div>


				<div className='w-full flex items-center justify-between'>
					<div className='bg-slate-700 rounded-xl hover:bg-slate-800 cursor-pointer p-2 md:px-10'>
						<ImAppleinc className='text-lg md:text-xl'/>
					</div>
					<div className='bg-slate-700 rounded-xl hover:bg-slate-800 cursor-pointer p-2 md:px-10'>
						<FaGoogle className='text-lg md:text-xl'/>
					</div>
					<div className='bg-slate-700 rounded-xl hover:bg-slate-800 cursor-pointer p-2 md:px-10'>
						<FaXTwitter className='text-lg md:text-xl'/>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Login