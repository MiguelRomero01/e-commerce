import React from "react";
import TextField from '@mui/material/TextField';

interface input {
    type: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput: React.FC<input> = ({ type, label, value, onChange }) => {
    return (
        <TextField 
            type={type}
            id={label}
            label={label} 
            variant='outlined' 
            value={value}
            onChange={onChange}
            required
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'black',
                        borderRadius: '12px',
                        width: '18vw', // Ajusta el ancho del input
                    },
                    '& input': {
                        fontSize: '1rem', // Aumenta la fuente
                    },
                },
                '& .MuiInputLabel-root': {
                    color: 'black',
                    fontSize: '1rem', // Aumenta la fuente de la etiqueta
               },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'black',
                },
            }}
        />
    );
};

export default AuthInput;