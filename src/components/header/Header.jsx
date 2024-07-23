import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import UserActions from './UserActions';

const shopComponent = React.lazy(() => import('../shop/AllProducts'));

const Header = () => {
    const { cart } = useSelector((state) => state.cart);
    const navigate = useNavigate();

    useEffect(() => {
        const preloadShop = () => {
            shopComponent.preload();
        };

        const shopLink = document.getElementById('shop-link');
        shopLink.addEventListener('mouseover', () => {
            preloadShop();
        });
    }, []);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const searchQuery = event.target.search.value;
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <header className="sm:block hidden">
            <div className="fixed container w-full h-[4rem] z-40 top-0 text-black px-2">
                <div className="flex flex-row items-center my-auto justify-between p-3 h-full bg-white rounded-xl shadow-md">
                    <div className="flex flex-row">
                        <div className="logo text-2xl font-semibold">Logo</div>
                        <nav className="flex flex-row items-center justify-evenly my-auto text-sm">
                            <ul className="flex flex-row items-center">
                                <Link to={'/'}><li className="mx-2">Home <i className="fa-solid fa-house"></i></li></Link>
                                <Link to={'/shop'} id='shop-link'><li className="mx-2">Shop <i className="fa-solid fa-shop"></i></li></Link>
                                <Link to={'/cart'}><li className="mx-2 my-auto">cart
                                    <div className="relative inline-block p-1 rounded-lg">
                                        <i className="fa-solid fa-cart-shopping text-black"></i>
                                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                            {cart.length}
                                        </span>
                                    </div></li></Link>
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
    );
};

shopComponent.preload = () => import('../shop/AllProducts');

export default Header;
