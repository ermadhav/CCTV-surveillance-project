// import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Login = () => {
//     const [passwordVisible, setPasswordVisible] = useState(false);

//     const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     return (
//         <div className="bg-gray-100 flex items-center justify-center min-h-screen">
//             <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
//                 <div className="bg-gray-200 rounded-t-lg py-2 text-center">
//                     <h1 className="text-lg font-semibold">Settings</h1>
//                 </div>
//                 <div className="py-4">
//                     <div className="flex items-center mb-4">
//                         <i className="fas fa-wifi text-purple-500 text-xl mr-4"></i>
//                         <span className="flex-grow">Broadcast</span>
//                         <label className="switch">
//                             <input type="checkbox" />
//                             <span className="slider round"></span>
//                         </label>
//                     </div>
//                     <div className="flex items-center mb-4">
//                         <i className="fas fa-search text-purple-500 text-xl mr-4"></i>
//                         <span className="flex-grow">Search by IP domain</span>
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Start IP</label>
//                         <div className="relative">
//                             <input type="text" value="171.35.0.0" className="w-full bg-green-50 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                             <i className="fas fa-network-wired absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">IP Number</label>
//                         <div className="relative">
//                             <input type="text" value="255" className="w-full bg-green-50 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                             <i className="fas fa-hashtag absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Default UserName</label>
//                         <div className="relative">
//                             <input type="text" value="admin" className="w-full bg-green-50 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                             <i className="fas fa-user absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Default Password</label>
//                         <div className="relative">
//                             <input type={passwordVisible ? "text" : "password"} value="********" className="w-full bg-green-50 border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//                             <i className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer`} onClick={togglePasswordVisibility}></i>
//                         </div>
//                     </div>
//                     <div className="flex justify-end space-x-4">
//                         <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded">Cancel</button>
//                         <button className="bg-blue-500 text-white py-2 px-4 rounded">OK</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;

import React, { useState } from 'react';
const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div>
            <style>
                {`
                body {
                    background-color: #f3f4f6;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    margin: 0;
                    font-family: Arial, sans-serif;
                }

                .container {
                    background-color: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    padding: 50px;
                    width: 100%;
                    max-width: 400px;
                }

                .header {
                    background-color: #e5e7eb;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                    padding: 8px 0;
                    text-align: center;
                }

                .header h1 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                }

                .section {
                    padding: 16px 0;
                }

                .section .item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 16px;
                }

                .section .item i {
                    color: #8b5cf6;
                    font-size: 24px;
                    margin-right: 16px;
                }

                .section .item span {
                    flex-grow: 1;
                }

                .section .item input[type="checkbox"] {
                    margin-left: auto;
                }

                .section .input-group {
                    margin-bottom: 16px;
                }

                .section .input-group label {
                    display: block;
                    color: #4b5563;
                    margin-bottom: 4px;
                }

                .section .input-group .relative {
                    position: relative;
                }

                .section .input-group input {
                    width: 100%;
                    background-color: #f0fdf4;
                    border: 1px solid #d1d5db;
                    border-radius: 4px;
                    padding: 8px 12px;
                    color: #4b5563;
                }

                .section .input-group i {
                    position: absolute;
                    right: -10px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #6b7280;
                    cursor: pointer;
                }

                .buttons {
                    display: flex;
                    justify-content: center;
                    gap: 8px;
                }

                .buttons button {
                    padding: 8px 16px;
                    border-radius: 4px;
                    border: none;
                    cursor: pointer;
                }

                .buttons .cancel {
                    background-color: #e5e7eb;
                    color: #4b5563;
                }

                .buttons .ok {
                    background-color: #3b82f6;
                    color: white;
                }
                `}
            </style>
            <div className="container">
                <div className="header">
                    <h1>Settings</h1>
                </div>
                <div className="section">
                    <div className="item">
                        <i className="fas fa-wifi"></i>
                        <span>Broadcast</span>
                        <input type="checkbox" />
                    </div>
                    <div className="item">
                        <i className="fas fa-search"></i>
                        <span>Search by IP domain</span>
                    </div>
                    <div className="input-group">
                        <label>Start IP</label>
                        <div className="relative">
                            <input type="text" value="171.35.0.0" readOnly />
                            <i className="fas fa-network-wired"></i>
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Port Number</label>
                        <div className="relative">
                            <input type="text" value="255" readOnly />
                            <i className="fas fa-hashtag"></i>
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Default UserName</label>
                        <div className="relative">
                            <input type="text" value="admin" readOnly />
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Default Password</label>
                        <div className="relative">
                            <input type={passwordVisible ? "text" : "password"} value="********" readOnly />
                            <i className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`} onClick={togglePasswordVisibility}></i>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="cancel">Cancel</button>
                        <button className="ok">OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;