import { Dialog } from '@headlessui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import adminConfig from '../../../appwrite/adminConfig'
import { fetchAllUsers } from '../../../features/admin/userThunks'
import { InputComponent } from '../../components'

const CreateUser = ({ isOpen, onClose }) => {
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const create = async (data) => {
        try {
            const res = await adminConfig.createUser(data)
            if (!res) {
                setError("Failed to create user.")
            }
            onClose()
            dispatch(fetchAllUsers())
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    }
    return (
        <div>
            <Dialog open={isOpen} onClose={onClose} className="relative z-40 h-[95dvh]">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4 sm:h-[90dvh] h-[100dvh]">
                    <Dialog.Panel className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-auto my-auto sm:h-[90dvh] h-[90dvh]">
                        <p className="text-center text-black text-xl font-semibold">Fill out the form below</p>
                        {
                            error && (
                                <p className="text-center text-red-500">{error}</p>
                            )
                        }
                        <form onSubmit={handleSubmit(create)} className="px-5">
                            <InputComponent
                                label="User Name"
                                type='text'
                                placeholder='Enter user name'
                                className='text-black focus:bg-blue-100 focus:text-black'
                                {...register("name", { required: true })}
                            />
                            <InputComponent
                                label="E-mail  ( optional )"
                                type='email'
                                placeholder='Enter e-mail address'
                                className='text-black focus:bg-blue-100 focus:text-black'
                                {...register("email", { required: false })}
                            />
                            <InputComponent
                                label="Phone number"
                                type='tel'
                                placeholder='Enter phone'
                                className='text-black focus:bg-blue-100 focus:text-black'
                                {...register("phone", { required: true })}
                            />
                            <InputComponent
                                label="Password"
                                type='password'
                                placeholder='Enter password'
                                className='text-black focus:bg-blue-100 focus:text-black'
                                {...register("password", { required: true })}
                            />
                            <button type="submit" className="mt-5 p-1 w-full bg-blue-500 hover:bg-blue-300 text-white text-xl font-semibold">Submit</button>
                        </form>
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-6 h-6 text-gray-800"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </Dialog.Panel >
                </div >
            </Dialog >
        </div >
    )
}

export default CreateUser