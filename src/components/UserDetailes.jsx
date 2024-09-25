import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

export default function UserDetails() {
    const location = useLocation(); // Access the state passed through navigate
    const { user } = location.state || {}; // Destructure the user object

    if (!user) {
        return <div>No user details available.</div>;
    }


    return (
        <div>
            <h1>User Details</h1>
            <p><strong>Email:</strong> {user.Email}</p>
            <p><strong>Address:</strong> {user.Address}</p>
            <p><strong>Phone:</strong> {user.Phone}</p>
            <p><strong>Password:</strong> {user.Password}</p>
        </div>
    );
}
