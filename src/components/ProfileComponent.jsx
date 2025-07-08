import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import notif from '../assets/svgs/notif.svg';
import avatar from '../assets/images/default-avatar-photo.jpg';
// import SearchBar from './inputs/SearchBar';

function ProfileComponent() {
    const items = [
        { title: 'Profile', path: '/profile' },
        { title: 'Settings', path: '/settings' },
        { title: 'Report', path: '/report' },
        { title: 'Sign Out', path: '/auth/signout' },
    ];
    const [dropdown, showDropdown] = useState(false);

    return (
        <div className="relative">
            <div onClick={() => showDropdown(!dropdown)} className='flex items-center gap-2 focus:outline-none'>
                <img
                    className="h-8 w-8 rounded-full border-2 border-white"
                    src={avatar}
                    alt="Avatar"
                />
                <div className="text-white text-right hidden sm:block">
                    <span>Praise Afuwape</span><br />
                </div>
                <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </div>

            {/* dropdown menu */}
            <div
                className={`absolute top-full mt-2 right-0 w-48 bg-white text-black shadow-lg rounded-md ${dropdown ? 'block' : 'hidden'} z-50`}>
                <div className="flex flex-col">
                    {items.map((item) => (
                        <Link
                            key={item.title}
                            to={item.path}
                            className="py-2 px-4 hover:bg-[#A97DF3] hover:text-white transition-colors"
                            onClick={() => showDropdown(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfileComponent;