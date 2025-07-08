import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';


function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="bg-white min-h-screen w-full">
            <div className="flex h-screen overflow-hidden">
                <SideBar open={sidebarOpen} setSidebar={setSidebarOpen} />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <NavBar open={sidebarOpen} setAction={setSidebarOpen} />
                    <main className="flex-1 overflow-y-auto">
                        {/* <div className="mx-auto max-w-screen-2xl bg-amber-500 p-4 sm:p-6 lg:p-10"> */}
                        <div className="mx-auto">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;