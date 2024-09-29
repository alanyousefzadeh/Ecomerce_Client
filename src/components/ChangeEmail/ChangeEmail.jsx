import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ChangeEmail() {
    const { token } = useParams();  // Get the token from the URL
    const [newEmail, setNewEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send request to backend to update the email
            const response = await axios.post('http://localhost:8080/login/change-email', {
                token,
                newEmail,
            });

            setSuccess('Email changed successfully!');
            setTimeout(() => navigate('/'), 3000);  // Redirect back after 3 seconds

        } catch (error) {
            setError('Failed to change email. Please try again.');
        }
    };

    return (
        <div>
            <h1>Change Your Email</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {!success && (
                <form onSubmit={handleSubmit}>
                    <label>
                        New Email:
                        <input
                            type="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}
