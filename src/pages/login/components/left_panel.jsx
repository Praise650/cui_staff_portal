import logo from "../../../assets/logo/logo-white.png"

function LeftPanel({setEmail, setPassword, handleClick}) {
    return (
        <>
            <div className="w-1/2 bg-gray-900 flex flex-col justify-center items-center px-12">
                {/* NITK Logo */}
                <div className="mb-12 ">
                    <div className="w-32 h-32 mb-8">
                        ,<div className="w-full h-full text-white">
                            <img src={logo} />
                        </div>
                    </div>
                </div>

                {/* Login Form */}
                <div className="w-full max-w-md">
                    <h1 className="text-4xl font-bold text-white mb-2">Login</h1>
                    <p className="text-gray-400 mb-8">Enter your account details</p>

                    <div className="space-y-6">
                        <div>
                            <input
                                type="email"
                                placeholder="Staff Email Id"
                                // value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                // value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                            />
                        </div>

                        <div className="text-left">
                            <button className="text-gray-400 hover:text-purple-400 transition-colors">
                                Forgot Password?
                            </button>
                        </div>

                        <div className="space-y-4">
                            <button
                                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                                onClick={handleClick}
                            >
                                Login
                            </button>

                            <div className="text-center text-gray-400">OR</div>

                            <button
                                className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors"
                            >
                                Login as admin
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <span className="text-gray-400">Don't have an account? </span>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftPanel;