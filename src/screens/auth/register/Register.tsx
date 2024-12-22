import React, { useReducer } from "react";
import registerStyles from './Register.module.css';

import { addUser } from "../../../features/Auth/addUser";
import { Box } from "@mui/material";
import AuthInput from "../components/authInput";
import { Link } from "react-router-dom";
import { SuccessRegister } from "./components/successRegister";


type State = {
     username: string;
     password: string;
     repeat_password: string;
     message: string;
     error: string | null;
}

type action = 
     | { type: 'SET_USERNAME'; payload: string }
     | { type: 'SET_PASSWORD'; payload: string }
     | { type: 'SET_REPEAT_PASSWORD'; payload: string }
     | { type: 'SET_MESSAGE'; payload: string }
     | { type: 'SET_ERROR'; payload: string | null }

const initialState: State = {
     username: '',
     password: '',
     repeat_password: '',
     message: '',
     error: null
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

const RegisterScreen: React.FC = () => {
     const [state, dispatch] = useReducer(reducer, initialState)

     const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const isRegistered = await addUser(state.username, state.password)

          if(isRegistered){
               dispatch({ type: 'SET_ERROR', payload: null })
               dispatch({ type: 'SET_MESSAGE', payload: 'Registro exitoso' })
          } 
          else if (state.password !== state.repeat_password){
               dispatch({ type: 'SET_MESSAGE', payload: '' })
               dispatch({ type: 'SET_ERROR', payload: "The password doesn't match" })
          }
          else{
               dispatch({ type: 'SET_MESSAGE', payload: '' })
               dispatch({ type: 'SET_ERROR', payload: 'No se puede registrar tu usuario' })
          }
     }

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
                         {state.error && <p className={registerStyles.error}>{state.error}</p>} 

                         <button type="submit" className={registerStyles['register-button']}>Sign up</button>
                         <p className={registerStyles['account-question']}>have an account? <Link  to="/login" className={registerStyles['link-signUp']}>Sign In</Link></p>
                    </Box>
               <SuccessRegister/>
               </div>

               {/* Mensajes */}
               {/* {state.message && <p style={{ color: "green" }}>{state.message}</p>}
               {state.error && <p style={{ color: "red" }}>{state.error}</p>} */}
          </div>
     )
}

export default RegisterScreen;