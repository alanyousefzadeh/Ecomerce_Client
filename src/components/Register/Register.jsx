import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import { Container, CssBaseline, Avatar, Box, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios"; // Import Link from react-router-dom
//import Copyright from './Copyright';

export default function RegisterForm() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        phone: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        phone: ''
    });

    const fields = [
        {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            helperText: 'Please enter a valid email',
            autoComplete: 'email'
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            helperText: 'Password must be at least 6 characters long',
            autoComplete: 'new-password'
        },
        {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
            helperText: 'Passwords must match',
            autoComplete: 'new-password'
        },
        {
            name: 'address',
            label: 'Address',
            type: 'text',
            helperText: 'Please enter your first name',
            autoComplete: 'given-name',
            autoFocus: true
        },
        {
            name: 'phone',
            label: 'Phone',
            type: 'text',
            helperText: 'Please enter your last name',
            autoComplete: 'family-name'
        },
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
                return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value) ? '' : 'Password must be at least 6 characters long with at least one number and one special character'
            case 'confirmPassword':
                return value === values.password ? '' : 'Passwords do not match';
            case 'address':
                return value ? '' : 'This field is required';
            case 'phone':
                return /^\d{10}$/.test(value)? '' : 'Please enter a valid phone number';
            default:
                return '';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        for (const field of fields) {
            newErrors[field.name] = validateField(field.name, values[field.name]);
        }
        setErrors(newErrors);

        if (Object.values(newErrors).every(error => error === '')) {
            alert("Form is valid! Submitting...");
            try {
                const response = await axios.post('http://localhost:8080/register', {
                    Email: values.email,
                    Password: values.password,
                    Address: values.address,
                    Phone: values.phone
                });
                console.log(values.email, values.password, values.address, values.phone);

                alert("Register successful! Redirecting...");

                // Redirect user to the dashboard or another page
                 window.location.href = "/";

            } catch (error) {
                alert("Register failed! Please check your credentials.");
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
                    formType="register"
                    fields={fields}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    values={values}
                    errors={errors}
                />
                <Box mt={2}>
                    {/* Link back to Login page */}
                </Box>
            </div>
            <Box mt={8}>
                {/*<Copyright />*/}
            </Box>
        </Container>
    );
}
