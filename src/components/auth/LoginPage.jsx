import { useState } from 'react';
import Swal from 'sweetalert2';
import './LoginPage.css'; // Assuming you have a separate CSS file for custom styles

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        if (email && password) {
            const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });



            if (response.data?.success) {
                localStorage.setItem("token", response?.data?.data?.token);
                Swal.fire({
                    title: 'Login Successful',
                    text: 'Welcome back!',
                    icon: 'success',
                    background: '#1e1f20',
                    color: '#ffffff',
                    confirmButtonColor: '#3890d8',
                });
                window.location.reload()
            } else {
                Swal.fire({
                    title: 'Login Failed',
                    text: response?.data.message || 'Invalid credentials',
                    icon: 'error',
                    background: '#1e1f20',
                    color: '#ffffff',
                    confirmButtonColor: '#d65f63',
                });
            }
        } else {
            Swal.fire({
                title: 'Missing Fields',
                text: 'Please enter both email and password',
                icon: 'warning',
                background: '#1e1f20',
                color: '#ffffff',
                confirmButtonColor: '#d65f63',
            });
        }
    };

    return (
        <div className='whole'>
            <div className="login-container">
                <div className="login-box">
                    <h2 className="login-title">Sign In</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            {/* <FaUserAlt className="input-icon" /> */}
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            {/* <FaLock className="input-icon" /> */}
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;
