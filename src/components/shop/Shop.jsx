import React, { useEffect, useState } from 'react';
import { Close as CloseIcon, Menu as MenuIcon } from '../../assets/google/google';
import AllProducts from './AllProducts';

const Shop = () => {
    const [sideBar, setSideBar] = useState(false);
    const [sideBarClass, setSideBarClass] = useState('');
    const [displayClass, setDisplayClass] = useState('');
    const [category, setCategory] = useState('')
    const categories = [
        {
            bodyCare: ['moisturizers', 'cleansers', 'treatments', 'skincare', 'fragrance']
        },
        { makeUp: ['face', 'eyes', 'lips', 'chicks', 'tools'] }
    ]

    useEffect(() => {
        if (sideBar) {
            setSideBarClass('slide-in');
            setDisplayClass('fade-in');
        } else {
            setSideBarClass('slide-out');
        }
    }, [sideBar]);

    return (
        <>
            <div className="sm:mt-[4rem]">
                <div className="container min-w-[100vw] bg-gray-200">
                    <div className="flex flex-row">
                        {sideBar && (
                            <div className={`side-bar w-[18rem] h-[inherit] bg-gray-700 ${sideBarClass} px-2`}>
                                <div className="flex flex-col justify-start items-center relative">
                                    <div onClick={() => setSideBar(false)} className="absolute top-1 right-1 cursor-pointer">
                                        <CloseIcon w='32px' h='32px' c='#fff' />
                                    </div>
                                    <h1 className="text-white text-2xl font-bold self-start my-2">Categories</h1>
                                    <button className="w-full p-1 text-start bg-gray-200 my-2">
                                        {/* <i class="fa-solid fa-chevron-down mx-2"></i> */}
                                        Body care
                                    </button>
                                    <nav className='w-full'>
                                        <ul className="flex flex-row flex-wrap w-full">
                                            {categories[0].bodyCare.map((item, index) => (
                                                <li key={index} className="text-white text-sm font-semibold self-start mb-1 mr-2 my-1">
                                                    <button onClick={() => setCategory(item)} className="w-full py-1 text-start bg-gray-400 rounded-sm px-3">
                                                        {item}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                    <button className="w-full p-1 text-start bg-gray-200 my-2">
                                        {/* <i class="fa-solid fa-chevron-down mx-2"></i> */}
                                        Makeup
                                    </button>
                                    <nav className='w-full'>
                                        <ul className="flex flex-row flex-wrap w-full">
                                            {categories[1].makeUp.map((item, index) => (
                                                <li key={index} className="text-white text-sm font-semibold self-start mb-1 mr-2 my-1">
                                                    <button onClick={() => setCategory(item)} className="w-full py-1 text-start bg-gray-400 rounded-sm px-3">
                                                        {item}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                        <div className={`display w-full min-h-screen relative ${displayClass}`}>
                            <div onClick={() => setSideBar(!sideBar)} className="cursor-pointer absolute z-30 top-2 left-4">
                                {sideBar ? '' : <MenuIcon w='28px' h='28px' />}
                            </div>
                            <p className="text-center text-2xl font-semibold my-1">Skin Care</p>
                            <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 items-center">
                                <AllProducts />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop