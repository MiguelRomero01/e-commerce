import React, { useEffect, useReducer } from "react";
import registerStyles from './Register.module.css';

import { addUser } from "../../../features/database/queries/post/users/createUser";
import { Box } from "@mui/material";
import AuthInput from "../components/authInput";
import { Link } from "react-router-dom";
import SuccessRegister from "./components/successRegister";
import errorRegister from "./components/errorRegister";


type State = {
     username: string;
     password: string;
     membership: null;
     repeat_password: string;
     message: string;
     error: string ;
}

type action = 
     | { type: 'SET_USERNAME'; payload: string }
     | { type: 'SET_PASSWORD'; payload: string }
     | { type: 'SET_REPEAT_PASSWORD'; payload: string }
     | { type: 'SET_MESSAGE'; payload: string }
     | { type: 'SET_ERROR'; payload: string}

const initialState: State = {
     username: '',
     password: '',
     membership: null,
     repeat_password: '',
     message: '',
     error: ''
}

const reducer = (state: State, action: action): State => {
     switch(action.type){
          case 'SET_USERNAME': return { ...state, username: action.payload }
          case 'SET_PASSWORD': return { ...state, password: action.payload }
          case 'SET_REPEAT_PASSWORD': return { ...state, repeat_password: action.payload }
          case 'SET_MESSAGE': return { ...state, message: action.payload }
          case 'SET_ERROR': return { ...state, error: action.payload }
          default: return state
     }
}

// Agregar interface para validación
interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Separar la lógica de validación
const validateForm = (username: string, password: string, repeatPassword: string): ValidationResult => {
  if (!username.trim()) {
    return { isValid: false, error: 'Username is required' };
  }
  if (password.length < 6) {
    return { isValid: false, error: 'Password must be at least 6 characters' };
  }
  if (password !== repeatPassword) {
    return { isValid: false, error: "Passwords don't match" };
  }
  return { isValid: true };
};

const RegisterScreen: React.FC = () => {
     const [state, dispatch] = useReducer(reducer, initialState)

     const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          
          // Validar antes de hacer la llamada al servidor
          const validation = validateForm(state.username, state.password, state.repeat_password);
          
          if (!validation.isValid) {
               dispatch({ type: 'SET_ERROR', payload: validation.error || '' });
               return;
          }

          try {
               const isRegistered = await addUser(state.username, state.password, state.membership);
               
               if (isRegistered) {
                    dispatch({ type: 'SET_ERROR', payload: '' });
                    dispatch({ type: 'SET_MESSAGE', payload: 'User was added successfully' });
               } else {
                    dispatch({ type: 'SET_ERROR', payload: 'User already exists' });
               }
          } catch (error) {
               dispatch({ type: 'SET_ERROR', payload: 'An error occurred during registration' });
          }
     }

     // Mover el error register al efecto para evitar renders innecesarios
     useEffect(() => {
          if (state.error) {
               errorRegister({ text: state.error, icon: "error" });
          }
     }, [state.error])

     return(
          
          <div className={registerStyles['register-container']}>
               <div className={registerStyles['image-container']}>
                    <img src='/Images/register/registerImage.jpg' alt='Register' />
               </div>

               <div className={registerStyles['form-container']}>
                    <header className={registerStyles['form-header']}>
                         <h1>Creat New Account</h1>
                         <p>please enter details</p>
                    </header>

                    <Box
                         component="form"
                         sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                         autoComplete="off"
                         onSubmit={handleRegister}
                         noValidate // Agregar noValidate para manejar validación custom
                    >
                         <AuthInput
                              type="text"
                              label="Username"
                              value={state.username}
                              onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
                         />

                         <AuthInput
                              type="password"
                              label="Password"
                              value={state.password}
                              onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                         />

                         <AuthInput
                              type="password"
                              label="Repeat Password"
                              value={state.repeat_password}
                              onChange={(e) => dispatch({ type: 'SET_REPEAT_PASSWORD', payload: e.target.value })}
                         />
                         
                         {state.message && <SuccessRegister />}
                         {state.error && <div className={registerStyles['error-message']}>{state.error}</div>}
                         
                         <button type="submit" className={registerStyles['register-button']}>Sign up</button>
                         <p className={registerStyles['account-question']}>have an account? <Link  to="/login" className={registerStyles['link-signUp']}>Sign In</Link></p>
                    </Box>
               
               </div>
          </div>
     )
}

export default RegisterScreen;