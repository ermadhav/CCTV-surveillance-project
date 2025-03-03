import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <div className="bg-gray-200 rounded-t-lg py-2 text-center">
                    <h1 className="text-lg font-semibold">Settings</h1>
                </div>
                <div className="py-4">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-wifi text-purple-500 text-xl mr-4"></i>
                        <span className="flex-grow">Broadcast</span>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <i className="fas fa-search text-purple-500 text-xl mr-4"></i>
                        <span className="flex-grow">Search by IP domain</span>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Start IP</label>
                        <div className="relative">
                            <input type="text" value="171.35.0.0" className="w-full bg-green-50 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <i className="fas fa-network-wired absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">IP Number</label>
                        <div className="relative">
                            <input type="text" value="255" className="w-full bg-green-50 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <i className="fas fa-hashtag absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Default UserName</label>
                        <div className="relative">
                            <input type="text" value="admin" className="w-full bg-green-50 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <i className="fas fa-user absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Default Password</label>
                        <div className="relative">
                            <input type={passwordVisible ? "text" : "password"} value="********" className="w-full bg-green-50 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            <i className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer`} onClick={togglePasswordVisibility}></i>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded">Cancel</button>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;