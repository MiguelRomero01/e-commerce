import React, { useState } from 'react';
import { authenticateUser } from '../../../features/Auth/authenticateUser';

import loginStyles from './Login.module.css';

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
                <form onSubmit={handleLogin}>

                    <label htmlFor="username"> Username </label>
                    <input
                        type="text"
                        id="username"
                        value={user}
                        className="inputs"
                        placeholder="Enter your username"
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />

                    <label htmlFor="password"> Password </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        className="inputs"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                    {message && <p className="message">{message}</p>}
                    {error && <p className="error">{error}</p>}

                </form>
            </div>
        </div>
    );
};

export default Login;