import React from 'react'
import { Package as PackageIcon, Paid as PaidIcon, Return as ReturnIcon, Support as SupportIcon } from '../../assets/google/google'
import { FooterComponent } from '../components'
import FeaturedProducts from './FeaturedProducts'

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
                <FeaturedProducts />
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
                <FooterComponent />
            </div>
        </div>
    )
}

export default Home