import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import userService from '../../appwrite/userAuth';
import { logout } from '../../features/auth/authSlice';
import { getCart } from '../../features/user/cart/cartUtils';
import UserActions from './UserActions';

const shopComponent = React.lazy(() => import('../shop/AllProducts'));

const Header = () => {
    const { status, userData } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const [canvas, setCanvas] = useState(false)
    const dispatch = useDispatch()
    const [form, setForm] = useState(false)

    useEffect(() => {
        const preloadShop = () => {
            shopComponent.preload();
        };

        const shopLink = document.getElementById('shop-link');
        shopLink.addEventListener('mouseover', () => {
            preloadShop();
        });
    }, []);

    const handleProfile = () => {
        setCanvas(!canvas)
        userData ? navigate(`/profile/:${userData.name}`) : navigate('/signin')
    }

    const handleLogout = () => {
        setCanvas(!canvas)
        navigate('/')
        userService.logout().then(() => {
            dispatch(logout())
        }).finally(() => navigate('/'))
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const searchQuery = event.target.search.value;
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <>
            <header className="sm:block hidden">
                <div className="fixed container w-full h-[4rem] z-40 top-0 text-black px-2">
                    <div className="flex flex-row items-center my-auto justify-between p-3 h-full bg-white rounded-xl shadow-md">
                        <div className="flex flex-row">
                            <div className="logo text-2xl font-semibold">Logo</div>
                            <nav className="flex flex-row items-center justify-evenly my-auto text-sm">
                                <ul className="flex flex-row items-center">
                                    <Link to={'/'}><li className="mx-2">Home <i className="fa-solid fa-house"></i></li></Link>
                                    <Link to={'/shop'} id='shop-link'><li className="mx-2">Shop <i className="fa-solid fa-shop"></i></li></Link>
                                    <Link to={'/cart'}>
                                        <li className="mx-2 my-auto">cart
                                            <i className="fa-solid fa-cart-shopping text-black mx-1"></i>
                                        </li>
                                    </Link>
                                    <Link to={'/orders'}><li className="mx-2">Orders <i className="fa-solid fa-truck"></i></li></Link>
                                    {/* <Link to={'/search'}><li className="mx-2">Search <i class="fa-solid fa-search"></i></li></Link> */}
                                </ul>
                            </nav>
                        </div>
                        <form
                            className="flex relative items-center -ml-[6rem] w-[360px] h-[40px] px-3 rounded-full bg-gray-400 transition-all duration-500 focus-within:rounded-sm"
                            onSubmit={handleSearchSubmit}
                        >
                            <button className="border-none bg-none text-white">
                                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                            <input
                                name="search"
                                className="w-full h-full px-2 py-1.5 text-sm bg-transparent border-none focus:outline-none placeholder:text-white text-white font-semibold"
                                placeholder="Search for a product..."
                                required
                                type="text"
                            />
                            <button className="border-none bg-none opacity-0 visibility-hidden transition-opacity duration-300 ease-in-out focus:outline-none" type="reset">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2f2ee9] transform scale-x-0 transition-transform duration-300 ease-in-out origin-center form-focus:scale-x-100"></div>
                        </form>
                        <div className="">
                            <UserActions />
                        </div>
                    </div>
                </div>
            </header>
            <header className="block sm:hidden fixed top-0 z-40 w-full">
                {
                    form ? (
                        <form
                            className="flex relative items-center w-full sm:h-[40px] h-[50px] sm:mt-0 px-3 rounded-full bg-gray-400 transition-all duration-500 focus-within:rounded-sm"
                            onSubmit={handleSearchSubmit}
                        >
                            <button className="border-none bg-none text-white">
                                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                                    <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                            <input
                                name="search"
                                className="w-full h-full px-2 py-1.5 text-sm bg-transparent border-none focus:outline-none placeholder:text-white text-white font-semibold"
                                placeholder="Search for a product..."
                                required
                                type="text"
                            />
                            <i onClick={() => setForm(!form)} className="fa-regular fa-circle-xmark text-lg text-white"></i>
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2f2ee9] transform scale-x-0 transition-transform duration-300 ease-in-out origin-center form-focus:scale-x-100">
                            </div>
                        </form>
                    ) : (
                        <div className="flex flex-row items-center justify-between p-2 bg-gray-200">
                            <div onClick={() => setCanvas(!canvas)} className="">
                                {
                                    canvas ? (
                                        <i className="fa-regular fa-circle-xmark text-2xl"></i>
                                    ) : (
                                        <i class="fa-solid fa-bars text-2xl"></i>
                                    )
                                }
                            </div>
                            <Link to={'/'}>
                                <h1 onClick={() => setCanvas(false)} className="text-2xl font-bold">HAVEN</h1>
                            </Link>
                            <div onClick={() => setForm(!form)} className="">
                                <i className="fa-solid fa-search text-2xl"></i>
                            </div>
                        </div>
                    )
                }
                {
                    canvas && (
                        <div className="z-50 canvas w-[100vw] min-h-[100dvh] bg-gray-200 flex flex-col p-2 relative">
                            <ul className="flex flex-col">
                                <li onClick={() => setCanvas(!canvas)} className="text-2xl font-semibold w-full p-2 shadow-md rounded-e-md my-2 bg-gray-100">
                                    <Link to={'/'}>
                                        <p className="">
                                            <i className="fa-solid fa-house text-[1.3rem] mr-2"></i>
                                            Home
                                        </p>
                                    </Link>
                                </li>
                                <li onClick={() => setCanvas(!canvas)} className="text-2xl font-semibold w-full p-2 shadow-md rounded-e-md my-2 bg-gray-100">
                                    <Link to={'/shop'}>
                                        <p className="">
                                            <i className="fa-solid fa-shop text-[1.3rem] mr-2"></i>
                                            Shop
                                        </p>
                                    </Link>
                                </li>
                                <li onClick={() => setCanvas(!canvas)} className="text-2xl font-semibold w-full p-2 shadow-md rounded-e-md my-2 bg-gray-100">
                                    <Link to={'/cart'}>
                                        <div className="flex flex-row justify-between">
                                            <p>
                                                <i className="fa-solid fa-cart-shopping text-[1.3rem] mr-2"></i>
                                                Cart
                                            </p>
                                            <p className="text-xl font-bold">
                                                {getCart() ? getCart().length : 0}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li onClick={() => setCanvas(!canvas)} className="text-2xl font-semibold w-full p-2 shadow-md rounded-e-md my-2 bg-gray-100">
                                    <Link to={'/orders'}>
                                        <p className="">
                                            <i className="fa-solid fa-truck text-[1.3rem] mr-2"></i>
                                            Orders
                                        </p>
                                    </Link>
                                </li>
                                <li onClick={() => handleProfile()} className="text-2xl font-semibold w-full p-2 shadow-md rounded-e-md my-2 bg-gray-100">
                                    <p className="">
                                        <i className="fa-solid fa-circle-user text-[1.3rem] mr-2"></i>
                                        Profile
                                    </p>
                                </li>
                            </ul>
                            {
                                status || userData ? (
                                    <div className="w-full">
                                        <button
                                            onClick={() => handleLogout()}
                                            className="my-2 w-full text-white bg-red-500 hover:bg-red-700 transition-all duration-200 p-2 font-bold text-xl rounded-md">
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className="bottom-1 flex flex-col w-full">
                                        <Link to={'/signup'}>
                                            <button
                                                onClick={() => setCanvas(!canvas)}
                                                className="w-full text-white bg-green-500 hover:bg-green-700 transition-all duration-200 p-2 font-bold text-xl rounded-md">
                                                Sign-up
                                            </button>
                                        </Link>
                                        <p className="text-xl text-center font-semibold my-2">OR</p>
                                        <Link to={'/signin'}>
                                            <button
                                                onClick={() => setCanvas(!canvas)}
                                                className="w-full text-white bg-blue-500 p-2 font-bold text-xl rounded-md hover:bg-blue-700 transition-all duration-200">
                                                Sign-in
                                            </button>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </header >
        </>
    );
};

shopComponent.preload = () => import('../shop/AllProducts');

export default Header;
