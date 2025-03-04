import React from "react";
import TextField from '@mui/material/TextField';

interface InputProps {
    type: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const AuthInput: React.FC<InputProps> = ({ type, label, value, onChange }) => {
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
                    },
                },
                '& .MuiInputLabel-root': {
                    color: 'gray',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: 'black',
                },
            }}
            style={{
                fontSize: '2rem',
            }}
        />
    );
};

export default AuthInput;
