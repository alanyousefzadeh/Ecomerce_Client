import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios"; // Import useLocation

export default function UserDetails() {
    const location = useLocation(); // Access the state passed through navigate
    const { user } = location.state || {}; // Destructure the user object
    const [emailSent, setEmailSent] = useState(false);

    if (!user) {
        return <div>No user details available.</div>;
    }

    const handleChangeEmail = async () => {
        try {
            const token = localStorage.getItem('token'); // Get the JWT token from localStorage

            if (!token) {
                throw new Error('No token found. Please login again.');
            }

            const response = await axios.post('http://localhost:8080/user/request-change-email',
                {userId: user.ID},

                { headers: { Authorization: `Bearer ${token}` } });
            console.log(response.data);

            setEmailSent(true); // Update state to show a success message
        } catch (error) {
            console.error('Failed to request email change:', error);
        }
    };


    return (
        <div>
            <h1>User Details</h1>
            <p><strong>Email:</strong> {user.Email}</p>
            <p><strong>Address:</strong> {user.Address}</p>
            <p><strong>Phone:</strong> {user.Phone}</p>
            <p><strong>Password:</strong> {user.Password}</p>

            {!emailSent ? (
                <button onClick={handleChangeEmail}>Change Email</button>
            ) : (
                <p>An email with instructions to change your email has been sent.</p>
            )}
        </div>
    );
}
