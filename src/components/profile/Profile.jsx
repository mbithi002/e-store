import React from 'react';
import { useSelector } from 'react-redux';
import { ProfileHeroComponent } from '../components';

// profile component
const Profile = () => {
    const { userData } = useSelector((state) => state.auth)
    return (
        <div className='mt-[5rem] min-h-screen w-full'>
            <ProfileHeroComponent />
        </div>
    )
}

export default Profile