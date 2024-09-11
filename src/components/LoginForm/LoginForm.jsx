import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleValidation = () => {
        let formIsValid = true;

        // Email Validation
        if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            setEmailError("Email is not valid");
        } else {
            setEmailError("");
        }

        // Password Validation
        if (!password.match(/^(?=.*\d)(?=.*[a-zA-Z]).{8,22}$/)) {
            formIsValid = false;
            setPasswordError(
                "Password must contain letters, numbers and be 8 to 22 characters long"
            );
        } else {
            setPasswordError("");
        }

        return formIsValid;
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            alert("Welcome! You have successfully logged in.");
        }
    };

    return (
        <div className="App">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <form id="loginform" onSubmit={loginSubmit}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="EmailInput"
                                    name="EmailInput"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <small id="emailHelp" className="text-danger form-text">
                                    {emailError}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <small id="passworderror" className="text-danger form-text">
                                    {passwordError}
                                </small>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
