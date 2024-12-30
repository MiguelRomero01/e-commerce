import React, { useState } from 'react';
import { authenticateUser } from '../../../features/Auth/authenticateUser';
import loginStyles from './Login.module.css';
import Box from '@mui/material/Box';
import AuthInput from '../components/authInput';
import { useNavigate, Link } from 'react-router-dom';

interface LoginProps {
    onAuthSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onAuthSuccess }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const isAuthenticated = await authenticateUser(username, password);
            
            if (isAuthenticated) {
                onAuthSuccess();
                navigate('/');
            } else {
                setError('Invalid username or password. Please try again.');
            }
        } catch (err) {
            setError('An error occurred during login. Please try again later.');
        }
    };

    return (
        <div className={loginStyles['login-container']}>
            <div className={loginStyles['image-container']}>
                <img 
                    src="/Images/login/image.png" 
                    alt="Login illustration" 
                />
            </div>

            <div className={loginStyles['form-container']}>
                <header className={loginStyles['form-header']}>
                    <h1>Welcome 👋</h1>
                    <p>Enter your username and password to access your account</p>
                </header>

                <Box
                    component="form"
                    onSubmit={handleLogin}
                    className={loginStyles['login-form']}
                >
                    <AuthInput
                        type="text"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <AuthInput
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && (
                        <p className={loginStyles.error}>
                            {error}
                        </p>
                    )}

                    <button 
                        type="submit"
                        className={loginStyles['submit-button']}
                    >
                        Sign In
                    </button>

                    <p className={loginStyles['account-question']}>
                        Don't have an account?{' '}
                        <Link 
                            to="/register" 
                            className={loginStyles['link-signUp']}
                        >
                            Sign Up
                        </Link>
                    </p>
                </Box>
            </div>
        </div>
    );
};

export default Login;
