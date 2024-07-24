import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import userService from '../../appwrite/userAuth'
import { login, logout } from '../../features/auth/authSlice'

const UserActions = () => {
    const { status, userData } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        navigate('/')
        userService.logout().then(() => {
            dispatch(logout())
        }).finally(() => navigate('/'))
    }
    useEffect(() => {
        const checkSession = async () => {
            try {
                if (!userData) {
                    const res = await userService.getCurrentUser();
                    dispatch(login({ res }))
                }
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };

        checkSession();
    }, [userData])
    return (
        <div>
            <div className="flex flex-row items-center justify-evenly">
                {
                    status && userData ? (
                        <div className="flex flex-row items-center">
                            <button onClick={() => handleLogout()} className="bg-red-500 text-white font-semibold py-1 px-3 rounded-md mx-2">Logout</button>
                            <div className="cursor-pointer">
                                <i class="fa-regular fa-circle-user text-3xl"></i>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link to={'/signup'}><button className="py-1 px-3 bg-black text-white font-semibold text-lg rounded-md">Sign-up</button></Link>
                            <Link to={'/signin'}><button className="py-1 px-3 bg-gray-300 text-gray-900 font-semibold text-lg rounded-md ml-3">Sign-in</button></Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default UserActions