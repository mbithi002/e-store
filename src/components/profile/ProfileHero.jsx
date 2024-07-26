import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ProfilePic } from '../../assets/google/google'
import { CustomCheckBoxComponent } from '../components'
import CreateAddress from './adresses/CreateAddress'

const ProfileHero = () => {
    const userData = useSelector((state) => state.auth.userData)
    const [createModal, setCreateModal] = useState(false)

    return (
        <div>
            <CreateAddress isOpen={createModal} onClose={() => setCreateModal(!createModal)} />
            <div className="container w-[100vw]">
                <div className="grid sm:grid-cols-12 gap-4 w-full">
                    <div className="sm:col-span-4 flex flex-col items-center content-center">
                        <ProfilePic w='240px' h='240px' />
                        <div className="flex flex-col rounded-sm shadow-lg w-full py-4 px-2">
                            <div className="text-teal-500 bg-white p-2 rounded-md shadow-md">User:
                                <span className="block font-bold text-lg">
                                    {userData.name ? (
                                        <div className="">
                                            <i className="fa-solid fa-user mx-1"></i>
                                            {userData.name.toUpperCase()}
                                        </div>
                                    ) : 'user'}
                                </span>
                            </div>
                            <div className="text-teal-500 bg-white p-2 my-2 shadow-md rounded-md">Phone:
                                <span className="block text-green-500">
                                    {userData.phone ? (
                                        <div className="">
                                            <i className="fa-solid fa-phone mx-1"></i>
                                            {userData.phone}
                                        </div>
                                    ) : 'user'}
                                </span>
                            </div>
                            <div className="text-teal-500 bg-white p-2 shadow-md rounded-md">Email: <span className="block text-blue-500">{userData.email ? userData.email : 'user'}</span> </div>
                        </div>
                    </div>
                    <div className="sm:col-span-8 flex flex-col items-start p-5 w-full h-full">
                        <div className="flex flex-row w-full items-center justify-between pb-4">
                            <p className="font-bold my-3">Address Book</p>
                            <button onClick={() => setCreateModal(!createModal)} className="bg-green-500 text-white py-2 px-5 text-md font-bold hover:bg-green-700 transition-all duration-200x">+ Add an address</button>
                        </div>
                        <div className="w-full h-full grid sm:grid-cols-2">
                            <div className="relative address-card flex flex-col items-start p-4 justify-normal rounded-md shadow-lg w-full h-[40dvh]">
                                <div className="w-full flex flex-row justify-between">
                                    <p>
                                        <i className="fa-solid fa-user mx-2 text-lg text-black"></i>
                                        {userData.name.toUpperCase()}
                                    </p>
                                    <p className='text-green-500 font-semibold'>
                                        Pickup Station
                                    </p>
                                </div>
                                <p className="my-2"><i className="fa-solid fa-phone mx-2"></i> {userData.phone} </p>
                                <p className="my-2 text-sm">
                                    <i className="fa-solid fa-location-dot mx-2 text-lg"></i>
                                    TALA TOWN, Reinnotec Solutions Behind Matungulu medical health and wellness,Opposit Makawasco Kiosk, Cellphone:715907508
                                </p>
                                <div className="flex flex-row items-start justify-between absolute bottom-3 w-full pr-7">
                                    <div className="flex flex-row items-center">
                                        <CustomCheckBoxComponent />
                                        Set as default
                                    </div>
                                    <div className="flex flex-row justify-between w-1/2">
                                        <button className="py-1 w-1/2 px-2 bg-blue-500 text-white text-sm rounded-sm">Edit <i class="fa-solid fa-pen-to-square mx-2"></i> </button>
                                        <button className="py-1 w-1/2 sm:px-2 ml-2 bg-red-500 text-white text-sm rounded-sm">Delete <i className="mx-1 fa-solid fa-trash text-xs"></i> </button>
                                    </div>
                                </div>
                            </div>
                            <div className="relative address-card flex flex-col items-start p-4 justify-normal rounded-md shadow-lg w-full h-[40dvh]">
                                <div className="w-full flex flex-row justify-between">
                                    <p>
                                        <i className="fa-solid fa-user mx-2 text-lg text-black"></i>
                                        {userData.name.toUpperCase()}
                                    </p>
                                    <p className='text-green-500 font-semibold'>
                                        Pickup Station
                                    </p>
                                </div>
                                <p className="my-2"><i className="fa-solid fa-phone mx-2"></i> {userData.phone} </p>
                                <p className="my-2 text-sm">
                                    <i className="fa-solid fa-location-dot mx-2 text-lg"></i>
                                    TALA TOWN, Reinnotec Solutions Behind Matungulu medical health and wellness,Opposit Makawasco Kiosk, Cellphone:715907508
                                </p>
                                <div className="flex flex-row items-start justify-between absolute bottom-3 w-full pr-7">
                                    <div className="flex flex-row items-center">
                                        <CustomCheckBoxComponent />
                                        Set as default
                                    </div>
                                    <div className="flex flex-row justify-between w-1/2">
                                        <button className="py-1 w-1/2 px-2 bg-blue-500 text-white text-sm rounded-sm">Edit <i class="fa-solid fa-pen-to-square mx-2"></i> </button>
                                        <button className="py-1 w-1/2 sm:px-2 ml-2 bg-red-500 text-white text-sm rounded-sm">Delete <i className="mx-1 fa-solid fa-trash text-xs"></i> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHero