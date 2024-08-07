import { Dialog } from '@headlessui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import adminConfig from '../../../appwrite/adminConfig'
import { fetchAllCategories } from '../../../features/admin/categoryThunks'
import { InputComponent, WifiLoaderComponent } from '../../components'

const CreateCategory = ({ isOpen, onClose }) => {
    const { register, handleSubmit } = useForm()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const create = async (data) => {
        setError('')
        setLoading(true)
        try {
            const res = await adminConfig.createCategory(data.category, data.description)
            if (!res) {
                setError('Failed to create category')
                setLoading(false)
            }
            dispatch(fetchAllCategories())
            setLoading(false)
            onClose()
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    return (
        <div>
            <Dialog onClose={onClose} open={isOpen} className={'relative z-40 min-h-screen'}>
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className='bg-white rounded-lg shadow-lg max-w-4xl w-full mx-auto my-auto min-h-[50dvh] max-h-full overflow-y-auto py-4 relative'>
                        <p className="text-center text-green-400 font-semibold text-xl">Add a category</p>
                        {
                            error && (
                                <p className="text-center text-red-500">{error}</p>
                            )
                        }
                        {
                            loading ? (
                                <div className="w-full h-full pt-10 flex items-center flex-col">
                                    <WifiLoaderComponent message='creating...' />
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(create)} className=" flex flex-col w-full h-full p-3">
                                    <InputComponent
                                        label='Category name'
                                        className='focus:bg-green-400 text-black focus:text-white placeholder:text-black '
                                        placeholder='Enter category name'
                                        {...register("category", { required: true })}
                                    />
                                    <InputComponent
                                        label='Category description'
                                        className='focus:bg-green-400 text-black focus:text-white placeholder:text-black '
                                        placeholder='Enter category description'
                                        {...register("description", { required: true })}
                                    />

                                    <button className="absolute bottom-3 self-center w-1/2 bg-green-500 hover:bg-green-600 transition-all duration-150 text-white p-2">Submit</button>
                                </form>
                            )
                        }
                    </Dialog.Panel>
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
                </div>
            </Dialog >
        </div >
    )
}

export default CreateCategory