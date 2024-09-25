import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { Container, CssBaseline, Avatar, Box } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from "axios";
//import Copyright from './Copyright';

export default function LoginForm() {
    const [values, setValues] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });

    const fields = [
        {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            helperText: 'Please enter a valid email',
            autoComplete: 'email',
            autoFocus: true,
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            helperText: 'Password must be at least 6 characters long',
            autoComplete: 'current-password',
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: validateField(name, value) });
    };

    const validateField = (name, value) => {
        switch (name) {
            case 'email':
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
                    ? ''
                    : 'Please enter a valid email';
            case 'password':
                return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value) ? '' : 'Password must be at least 6 characters long with at least one number and one special character';
            default:
                return '';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields before submitting
        const newErrors = {};
        for (const field of fields) {
            newErrors[field.name] = validateField(field.name, values[field.name]);
        }
        setErrors(newErrors);

        // Check if there are no validation errors
        if (Object.values(newErrors).every(error => error === '')) {
            alert("Form is valid! Submitting...");
            try {
                const response = await axios.post('http://localhost:8080/login', {
                    Email: values.email,
                    Password: values.password,
                });
                console.log(values.email, values.password);
                // Assuming response contains JWT token
                const {token} = response.data;

                // Store JWT in localStorage (or session storage)
                localStorage.setItem('token', token);

                alert("Login successful! Redirecting...");

                // Redirect user to the dashboard or another page
                // window.location.href = "/dashboard";

            } catch (error) {
                alert("Login failed! Please check your credentials.");
            }

        } else {
            alert("Form is invalid! Please fix the errors.");
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <AuthForm
                    formType="login"
                    fields={fields}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    values={values}
                    errors={errors}
                />
            </div>
            <Box mt={8}>
                {/*<Copyright />*/}
            </Box>
        </Container>
    );
}
