import React, { useReducer } from 'react';
import { authenticateUser } from '../../../features/Auth/authenticateUser';
import loginStyles from './Login.module.css';
import Box from '@mui/material/Box';
import AuthInput from '../components/authInput';
import { Link } from 'react-router-dom';

type State = {
    user: string;
    password: string;
    error: string | null;
};

type Action =
    | { type: 'SET_USER'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string }
    | { type: 'SET_ERROR'; payload: string | null };

const initialState: State = {
    user: '',
    password: '',
    error: null,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload};
        default:
            return state;
    }
};

const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isAuthenticated = await authenticateUser(state.user, state.password);
        if (isAuthenticated) {
            console.log('User authenticated');
        } else {
            dispatch({ type: 'SET_ERROR', payload: 'Nombre de usuario o contraseña incorrectos.' });
        }
    };

    return (
        <div className={loginStyles['login-container']}>
            <div className={loginStyles['image-container']}>
                <img src='/Images/login/image.png' alt='Login' />
            </div>
            <div className={loginStyles['form-container']}>
                <header className={loginStyles['form-header']}>
                    <h1>Welcome 👋</h1>
                    <p>Enter your username and password to access your account</p>
                </header>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    autoComplete="off"
                    onSubmit={handleLogin}
                >
                    <AuthInput
                        type="text"
                        label="Username"
                        value={state.user}
                        onChange={(e) => dispatch({ type: 'SET_USER', payload: e.target.value })}
                    />
                    
                    <AuthInput
                        type="password"
                        label="Password"
                        value={state.password}
                        onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                    />

                    {state.error && <p className={loginStyles.error}>{state.error}</p>}
                    <button type="submit">sign in</button>
                    <p className={loginStyles['account-question']}>Don't have an account? <Link to="/register" className={loginStyles['link-signUp']}>Sign up</Link></p>
                </Box>  
            </div>
        </div>
    );
};

export default Login;
