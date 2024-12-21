import React, { useState } from 'react';
import { authenticateUser } from '../../../features/Auth/authenticateUser';

//styles
import loginStyles from './Login.module.css';
import Box from '@mui/material/Box';
import AuthInput from '../components/authInput';

const Login = () => {
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [error, setError] = useState<string | null >('');

    const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Lógica de autenticación aquí
        const isAuthenticated = await authenticateUser(user, password);
        if (isAuthenticated) {
            setError(null); // Limpia errores previos
            setMessage("Inicio de sesión exitoso.");
        } else {
            setMessage(""); // Limpia mensajes previos
            setError("Nombre de usuario o contraseña incorrectos.");
        }
    };

    return (
        <div className={loginStyles['login-container']}>
            <div className={loginStyles['image-container']}>
                <img src='/Images/register/image.png' alt='Login' />
            </div>

            <div className={loginStyles['form-container']}>
                <header className={loginStyles['form-header']}>
                    <h1>Welcome 👋</h1>
                    <p>Enter your username and password to access your account</p>
                </header>

                {/* Formulario de inicio de sesión */}
                    <Box 
                        component="form"
                        sx={{'& > :not(style)': { m: 1, width: '25ch' }}}
                        autoComplete='off'
                        onSubmit={handleLogin}
                    >
                    
                    {/*Username*/}
                    <AuthInput
                        type='text'
                        label='Username'
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />

                    {/*Password*/}
                    <AuthInput
                        type='password'
                        label='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Login</button>

                    {message && <p className="message">{message}</p>}
                    {error && <p className={loginStyles.error}>{error}</p>}
                </Box>
            </div>
        </div>
    );
};

export default Login;