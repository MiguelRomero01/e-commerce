import React, { useState } from "react";
import registerStyles from './Register.module.css';

import { addUser } from "../../../features/Auth/addUser";

const RegisterScreen: React.FC = () => {
     const [ username, setUsername ] = useState<string>('');
     const [ password, setPassword ] = useState<string>('');
     const [ message, setMessage ] = useState<string>('');
     const [ error, setError ] = useState<string | null>(null)

     const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const isRegistered = await addUser(username, password)

          if(isRegistered){
               setError(null)
               setMessage("Registro exitoso")
          } else{
               setMessage("")
               setError("Nombre o contraseña no se pueden registrar")
          }
     }

     return(
          <div className={registerStyles['register-container']}>
               <form onSubmit={handleRegister}>
                    <label htmlFor="username">Username</label>
                    <input
                         type="text"
                         id="username"
                         value={username}
                         className="inputs"
                         placeholder="Enter your username"
                         onChange={(e) => setUsername(e.target.value)}
                         required
                    />

                    <label htmlFor="password">Password</label>
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
     )
}

export default RegisterScreen;