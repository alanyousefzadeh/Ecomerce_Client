import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";




function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function LoginForm() {
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const [emailError,setEmailError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);


    const handleEmailValidation = e => {
        const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        setEmail(e.target.value);
        if(e.target.value.match(isValidEmail)) {
            setEmailError(false);
        }else{
            setEmailError(true);
        }
    }

    const handlePasswordValidation = e => {
        const isValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        setPassword(e.target.value);
        if (e.target.value.match(isValidPassword)) {
            setPasswordError(false);
        } else {
            setPasswordError(true);
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();

        // Check if both fields are empty
        if (!Email || !Password) {
            alert("Please fill in all fields");
            return;
        }

        // Check if there are no validation errors
        if (!emailError && !passwordError) {
            alert("Form is valid! Submitting the form...");
            // Perform further actions like submitting the form data to the server
            try {
                const response = await axios.post('http://localhost:8080/login', {
                    Email,
                    Password,
                });
                console.log(Email, Password);
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
            alert("Form is invalid! Please check the fields...");
        }
    };
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        value={Email}
                        label="Email Address"
                        onChange={handleEmailValidation}
                        error={emailError}
                        name="email"
                        helperText={emailError ? "Please enter valid email" : ""}
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={Password}
                        onChange={handlePasswordValidation}
                        error={passwordError}
                        helperText={passwordError ? "Please enter a password from 6 to 16 characters including at least 1 number and at least on special character" : ""}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
