// import { lineSpinner } from 'ldrs';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userService from '../../appwrite/userAuth';
import { login as authLogin } from '../../features/auth/authSlice';
import WifiLoader from '../loaders/WifiLoader';

// lineSpinner.register()

const Signin = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userData } = useSelector((state) => state.auth)

    if (userData) navigate('/')

    const login = async (data) => {
        setError('')
        setLoading(true)
        try {
            const session = await userService.loginEmail(data)
            if (session) {
                const userData = await userService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin({ userData }))
                    navigate('/')
                }
            }
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }

    if (loading) return (
        <div className="h-screen w-full flex items-center justify-center bg-white">
            <WifiLoader message='Authenticating' />

            {/* <l-line-spinner
                size="70"
                stroke="3"
                speed="1"
                color="black"
            ></l-line-spinner> */}
        </div>
    )
    return (
        <div className="w-full h-full flex items-center justify-center sm:mt-16 py-5 sm:px-0 px-3">
            <form onSubmit={handleSubmit(login)} className="sm:mt-0 mt-5 sm:w-[30vw] w-[100vw] h-[70dvh] flex flex-col items-center justify-center bg-white p-8 shadow-lg relative overflow-hidden">
                <p className="text-2xl font-bold text-gray-800 mb-5 z-10">Sign-in</p>
                {
                    error && (
                        <p className="text-red-500 text-sm z-10">{error}</p>
                    )
                }
                <div className="w-full relative flex items-center justify-center z-10 mb-4">
                    <svg className="absolute left-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#232323" viewBox="0 0 16 16">
                        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                    </svg>
                    <input {
                        ...register("email", {
                            required: true,
                        })
                    } type="email" className="w-full h-[30px] bg-transparent border-b-2 border-gray-400 focus:border-gray-200 focus:outline-none pl-7 text-black text-sm font-medium placeholder-gray-600" id="email" placeholder="Email-address" />
                </div>
                <div className="w-full relative flex items-center justify-center z-10 mb-4">
                    <svg className="absolute left-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#232323" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                    </svg>
                    <input {
                        ...register("password", {
                            required: true,
                        })
                    } type="password" className="w-full h-[30px] bg-transparent border-b-2 border-gray-400 focus:border-gray-200 focus:outline-none pl-7 text-black text-sm font-medium placeholder-gray-600" id="password" placeholder="Password" />
                </div>
                <button id="button" className="w-full h-[30px] bg-gray-200 hover:bg-gray-100 text-gray-800 text-sm font-medium tracking-wide mt-2 cursor-pointer z-10">Submit</button>
                <a className="text-xs font-medium text-purple-800 no-underline py-2 px-3 rounded-full mt-2 z-10" href="#">Forgot your password?</a>
                <div className="absolute w-[300px] h-[300px] bg-gray-200 transform rotate-45 left-[-180px] bottom-7 z-0 rounded-[30px] shadow-lg"></div>
            </form>
        </div>
    );
};

export default Signin;
