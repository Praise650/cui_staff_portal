// import ImageHeader from "./image-header";
import { Link } from "react-router-dom";
import routes from "../routes/dashboard_routes";
import logo from '../assets/logo/logo-white.png';
// import AppLogo from "./app-logo";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import MenuButton from "./buttons/MenuButton";

function SideBar({ open, setSidebar }) {
    return (
        <>
            {/* Backdrop for mobile when sidebar is open */}
            {open && (
                <div
                    className="fixed inset-0 bg-transparent bg-opacity-50 z-[999] lg:hidden"
                    onClick={() => setSidebar(false)}
                ></div>
            )}
            <div
                className={`fixed inset-y-0 left-0 z-[1000] w-64 sm:w-72 bg-[#4F1DA0] overflow-y-auto transition-transform duration-300 ease-linear lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center px-6 py-4">
                    {/* Placeholder for AppLogo */}
                    <div className="text-white text-lg font-bold">
                        <img src={logo} alt="Logo" className="h-10 w-auto" />
                    </div>
                    <button
                        onClick={() => setSidebar(false)}
                        className="lg:hidden text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col gap-2 px-4">
                    {routes.map((item, index) => (
                        <Link
                            key={item.title}
                            to={item.path}
                            className="text-white py-2 px-4 rounded hover:bg-[#A97DF3] transition-colors"
                            onClick={() => setSidebar(false)} // Close sidebar on link click for mobile
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SideBar;