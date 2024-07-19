import React from 'react'
import { Contact as ContactIcon, Package as PackageIcon, Paid as PaidIcon, Return as ReturnIcon, Support as SupportIcon } from '../assets/google/google'

function Home() {
    return (
        <div className="w-full h-full">
            <div className="container bg-[#d2d2d2] w-[100vw]">
                <div className="grid sm:grid-cols-2 items-center gap-3 content-center w-full sm:min-h-screen h-auto sm:pt-0 pt-[5rem]">
                    <div className="mx-auto h-[200px] w-full sm:px-10">
                        <div className="my-auto pl-10">
                            <h3 className="text-gray-700 font-semibold my-2">Haven Beauty</h3>
                            <h1 className='text-5xl font-bold text-black mb-4'>Beauty inspired <span className="block">by Real Life</span></h1>
                            <p className='text-gray-700 text-md'>Radiance Redefined, Transforming Beauty, <span className="block">Transforming You</span></p>
                        </div>
                        <button className="ml-10 my-5 px-5 py-3 bg-black text-white text-2xl font-bold text-center rounded-sm">Haven tour <i class="fa-solid fa-circle-play"></i></button>
                    </div>
                    <div className="flex justify-center items-center h-[480px] w-full sn:mt-10 mt-[10rem]">
                        <img src="https://i.pinimg.com/474x/26/93/b5/2693b56cef4d1a158a9a20c8dbd45992.jpg" className="h-full object-contain" alt="Centered Image" />
                    </div>
                </div>
            </div>
            <p className="text-center text-2xl font-semibold text-black mt-5">Our Featured Products</p>
            <div className="container bg-white pt-5 min-h-screen">
                <div className="grid sm:grid-cols-4 px-10 rounded-md">
                    <div className="sm:h-[40dvh] h-[23rem] my-5 sm:w-[10rem] w-[16rem] mx-auto shadow-lg flex flex-col">
                        <div className="h-[30dvh] w-full flex items-center justify-center">
                            <img src="https://i.pinimg.com/474x/09/2a/ff/092aff62be1ae73d697a3bc5f9612851.jpg" className='w-full h-full object-cover mx-auto' alt="product" />
                        </div>
                        <div className="h-[10dvh] w-full text-gray-700 text-center py-1">
                            <p className="text-md">Product this</p>
                            <p className="text-sm">THis is the description</p>
                        </div>
                    </div>
                    <div className="sm:h-[40dvh] h-[23rem] my-5 sm:w-[10rem] w-[16rem] mx-auto shadow-lg flex flex-col">
                        <div className="h-[30dvh] w-full flex items-center justify-center relative">
                            <div className="z-10 top-1 left-1 absolute h-[2rem] w-[2rem] text-center pt-1 rounded-[50%] bg-black text-white text-sm">new</div>
                            <img src="https://i.pinimg.com/474x/7e/f8/d7/7ef8d7b50853f179610f6ee24260885a.jpg" className='w-full h-full object-cover mx-auto' alt="product" />
                        </div>
                        <div className="h-[10dvh] w-full text-gray-700 text-center py-1">
                            <p className="text-md">Product this</p>
                            <p className="text-sm">THis is the description</p>
                        </div>
                    </div>
                    <div className="sm:h-[40dvh] h-[23rem] my-5 sm:w-[10rem] w-[16rem] mx-auto shadow-lg flex flex-col">
                        <div className="h-[80%] w-full flex items-center justify-center">
                            <img src="https://i.pinimg.com/474x/3e/27/48/3e2748ee043bb00063b9a8ac08d81802.jpg" className='w-full h-full object-cover mx-auto' alt="product" />
                        </div>
                        <div className="h-[10dvh] w-full text-gray-700 text-center py-1">
                            <p className="text-md">Product this</p>
                            <p className="text-sm">THis is the description</p>
                        </div>
                    </div>
                    <div className="sm:h-[40dvh] h-[23rem] my-5 sm:w-[10rem] w-[16rem] mx-auto shadow-lg flex flex-col">
                        <div className="h-[30dvh] w-full flex items-center justify-center relative">
                            <div className="z-10 top-1 left-1 absolute h-[2rem] w-[2rem] text-center pt-1 rounded-[50%] bg-black text-white text-sm">new</div>
                            <img src="https://i.pinimg.com/474x/f2/42/af/f242af117ec2c6246544ce99927fae27.jpg" className='w-full h-full object-cover mx-auto' alt="product" />
                        </div>
                        <div className="h-[10dvh] w-full text-gray-700 text-center py-1">
                            <p className="text-md">Product this</p>
                            <p className="text-sm">THis is the description</p>
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 px-10 sm:h-50dvh sm:mb-0 mb-10">
                    <div className="flex justify-center items-center sm:w-[50vw] h-full relative p-10">
                        <div className="absolute top-[3rem] left-[3rem] bg-pink-600 text-2xl p-2 font-bold text-white">Hair care</div>
                        <img src="https://i.pinimg.com/474x/46/bd/fa/46bdfa86dfe483a38eeea15ae0f0e648.jpg" className='sm:h-[80%] h-full object-contain w-full' alt="image" />
                        <div className="absolute bottom-[3rem] right-[4rem] bg-transparent text-black sm:pr-10 sm:pb-10 sm:pl-3 sm:pt-3 pt-5 pl-10 sm:-mb-0 -mb-10 border border-pink-600">
                            <p className="text-xl font-semibold">som text</p>
                            <p className="">som text goes over here</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center sm:w-[50vw] h-full relative p-10">
                        <div className="absolute top-[3rem] left-[3rem] bg-gray-400 text-2xl p-2 font-bold text-white">Make up</div>
                        <img src="https://i.pinimg.com/474x/e5/10/29/e51029667d510feb0f619cc518509db3.jpg" className='sm:h-[80%] h-full object-contain w-full' alt="image" />
                        <div className="absolute bottom-[3rem] right-[4rem] bg-transparent sm:pr-10 sm:pb-10 sm:pl-3 sm:pt-3 pt-5 pl-10 sm:-mb-0 -mb-10 border border-gray-400 sm:text-white text-gray-400">
                            <p className="text-xl font-semibold">som text</p>
                            <p className="">som text goes over here</p>
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-4 px-[6rem]">
                    <div className="h-[200px] flex flex-col items-center">
                        <PackageIcon h='40px' w='40px' />
                        <p className="text-lg font-semibold">Shipping</p>
                        <p className="text-sm">Reliable shipping</p>
                    </div>
                    <div className="h-[200px] flex flex-col items-center">
                        <ReturnIcon h='40px' w='40px' />
                        <p className="text-lg font-semibol">Returns</p>
                        <p className="text-sm">Return Policy Compliance</p>
                    </div>
                    <div className="h-[200px] flex flex-col items-center">
                        <SupportIcon w='40px' h='40px' />
                        <p className="text-lg font-semibol">Online Support</p>
                        <p className="text-sm">Customer Support Available 24/7</p>
                    </div>
                    <div className="h-[200px] flex flex-col items-center">
                        <PaidIcon w='40px' h='40px' />
                        <p className="text-lg font-semibol">Easy Payment</p>
                        <p className="text-sm">Payments done Electronically</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 px-[4rem] sm:h-[13rem] bg-gray-200">
                    <div className="mx-auto p-5">
                        <p className="text-3xl font-bold text-black">HAVEN BEAUTY:</p>
                        <p className="text-gray-700">Where Beauty Blossoms</p>
                    </div>
                    <div className="mx-auto p-5">
                        <div className="flex flex-row items-center">
                            <p className="text-xl font-semibold text-black mr-2">Contact</p>
                            <ContactIcon />
                        </div>
                        <p className="text-gray-700">123 Beauty Lane</p>
                        <p className="text-gray-700">Glamour City, GC 12345</p>
                        <p className="text-gray-700">Phone: (123) 456-7890</p>
                        <p className="text-gray-700">Email: info@havenbeauty.com</p>
                    </div>
                    <div className="mx-auto p-5">
                        <p className="text-xl font-semibold text-black">Follow Us <i class="fa-solid fa-user-plus"></i></p>
                        <p className="text-gray-700">
                            <a href="https://facebook.com" className="hover:text-blue-500">Facebook <i class="fa-brands fa-facebook-f"></i></a>
                        </p>
                        <p className="text-gray-700">
                            <a href="https://instagram.com" className="hover:text-pink-500">Instagram <i class="fa-brands fa-instagram"></i></a>
                        </p>
                        <p className="text-gray-700">
                            <a href="https://twitter.com" className="hover:text-blue-400">Twitter <i class="fa-brands fa-twitter"></i></a>
                        </p>
                        <p className="text-gray-700">
                            <a href="https://pinterest.com" className="hover:text-red-500">Pinterest <i class="fa-brands fa-pinterest-p"></i></a>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home