import React from 'react'
import logo from '../assets/logo/logo-white.png';
import ProfileComponent from './ProfileComponent';
import MenuButton from './MenuButton';

function NavBar({ open, setAction }) {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#4F1DA0] py-3 px-4 sm:px-6 lg:px-8 drop-shadow-md">
            <div className="flex items-center justify-between">

                <div className="flex items-center gap-4 text-white text-2xl">
                    <h1>Welcome  Praise</h1>
                    <MenuButton open={open} setAction={setAction} />
                </div>
                {/* <div className="flex items-center gap-4"> */}
                <ProfileComponent />
                {/* </div> */}
            </div>
        </header>
    );
}

export default NavBar;