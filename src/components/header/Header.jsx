import { Link } from 'react-router-dom'

function Header() {

    return (
        <header className="sm:block hidden">
            <div className="fixed container w-full h-[4rem] z-40 top-0 text-black px-2">
                <div className="flex flex-row items-center my-auto justify-between p-3 h-full bg-white rounded-xl shadow-md">
                    <div className="flex flex-row">
                        <div className="logo px-10 text-3xl font-semibold">Logo</div>
                        <nav className="flex flex-row items-center justify-evenly my-auto">
                            <ul className="flex flex-row">
                                <Link to={'/'}><li className="mx-2">Home <i class="fa-solid fa-house"></i></li></Link>
                                <Link to={'/shop'}><li className="mx-2">Shop <i class="fa-solid fa-shop"></i></li></Link>
                                <Link to={'/cart'}><li className="mx-2">cart <i class="fa-solid fa-cart-shopping"></i></li></Link>
                                <Link to={'/orders'}><li className="mx-2">Orders <i class="fa-solid fa-truck"></i></li></Link>
                                <Link to={'/search'}><li className="mx-2">Search <i class="fa-solid fa-search"></i></li></Link>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-row items-center justify-evenly">
                        <Link to={'/signup'}><button className="py-1 px-3 bg-black text-white font-semibold text-lg rounded-md">Sign-up</button></Link>
                        <Link to={'/signin'}><button className="py-1 px-3 bg-gray-300 text-gray-900 font-semibold text-lg rounded-md ml-3">Sign-in</button></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header