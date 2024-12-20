import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import placeholderImg from '../../assets/changePass.png'; // Replace with your dummy image path

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false); // For toggling new password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For toggling confirm password visibility

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Password:', newPassword);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-start lg:mt-24 -mt-14   min-h-screen bg-gray-50 p-6 ">
            {/* Left Section - Form */}
            <div className="w-full lg:w-1/3 p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Change Password</h2>
                <form onSubmit={handleSubmit}>
                    {/* New Password Field */}
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2">New password</label>
                        <input
                            type={showNewPassword ? 'text' : 'password'} // Toggle between text and password
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-gray-300"
                        />
                        <div
                            className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center text-gray-700 cursor-pointer"
                            onClick={() => setShowNewPassword(!showNewPassword)} // Toggle show/hide for new password
                        > <span className='mt-6'>               {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Confirm new password</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'} // Toggle between text and password
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm password"
                            required
                            className="w-full px-3 py-2  border border-gray-300 rounded-lg focus:outline-gray-300"
                        />
                        <div
                            className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center text-gray-700 cursor-pointer"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle show/hide for confirm password
                        >
                            <span className='mt-6'>
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}

                            </span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center space-x-4 mt-12">
                        <button
                            type="button"
                            className="px-12 py-2 border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-green-700 hover:text-white"
                            onClick={() => console.log('Close')}
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="px-12 py-2 bg-[#022213] text-white rounded-lg hover:bg-green-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2   items-center justify-center hidden lg:flex">
                <img
                    src={placeholderImg}
                    alt="Illustration"
                    className="w-full max-w-xs xl:max-w-sm"
                />
            </div>
        </div>
    );
};

export default ChangePassword;
