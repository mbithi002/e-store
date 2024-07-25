import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// profile component
const Profile = () => {
    const { userData } = useSelector((state) => state.auth)
    const { slug } = useParams()
    console.log(slug);
    return (
        <div className='mt-[5rem] min-h-screen w-full'>
            <p className="text-black font-bold text-xl">
                {
                    slug
                }
            </p>
        </div>
    )
}

export default Profile