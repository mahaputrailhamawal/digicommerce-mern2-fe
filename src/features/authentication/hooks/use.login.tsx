import React, { useState } from 'react'
import { loginSchemaValidation } from '../validation/auth.validation';
import { ZodIssue } from 'zod';

export const useLogin = () => {
    const [ errors, setErrors ] = useState<ZodIssue[]>([]);
    const [ loading, setLoading ] = useState(false);

    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const errors = loginSchemaValidation({email, password});

        if (errors) {
            setLoading(false);
            return setErrors(errors);
        }

        setErrors([]);

        // Hit API
        setLoading(false);
    }
    
    return {
        errors,
        loading,
        handleLogin
    };
};
