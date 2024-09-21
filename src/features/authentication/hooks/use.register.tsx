import React, { useState } from 'react'
import { registerSchemaValidation } from '../validation/auth.validation';
import { ZodIssue } from 'zod';

export const useRegister = () => {
    const [ errors, setErrors ] = useState<ZodIssue[]>([]);
    const [ loading, setLoading ] = useState(false);
    const [ isRegistered, setIsRegistered ] = useState(false);

    function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        const errors = registerSchemaValidation({name, email, password});

        if (errors) {
            setLoading(false);
            return setErrors(errors);
        }

        setErrors([]);

        // Hit API
        setLoading(false);
        setIsRegistered(true);
    }
    
    return {
        errors,
        loading,
        isRegistered,
        handleRegister
    };
};
