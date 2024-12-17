import React, { useState } from "react";
import loginStyles from './Login.module.css';

import { authenticateUser } from "../../../features/Auth/authenticateUser";

const LoginScreen: React.FC = () => {
    const [user, setUser] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                
                <button type="submit">Submit</button>
            </form>

            {/* Mensajes */}
            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default LoginScreen;
