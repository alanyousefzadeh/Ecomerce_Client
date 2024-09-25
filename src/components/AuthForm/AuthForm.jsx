import React from 'react';
import { TextField, Button, Grid, FormControlLabel, Checkbox, Typography } from '@material-ui/core';

export default function AuthForm({ formType, fields, handleSubmit, handleChange, values, errors }) {
    return (
        <form onSubmit={handleSubmit} noValidate>
            <Typography component="h1" variant="h5">
                {formType === 'login' ? 'Sign In' : 'Register'}
            </Typography>
            {fields.map((field) => (
                <TextField
                    key={field.name}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    value={values[field.name]}
                    onChange={handleChange}
                    error={errors[field.name]}
                    helperText={errors[field.name] ? field.helperText : ''}
                    autoComplete={field.autoComplete}
                    autoFocus={field.autoFocus}
                />
            ))}

            {formType === 'login' && (
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
            )}

            <Button type="submit" fullWidth variant="contained" color="primary">
                {formType === 'login' ? 'Sign In' : 'Register'}
            </Button>

            <Grid container>
                {formType === 'login' ? (
                    <>
                        <Grid item xs>
                            <Button href="#" variant="body2">
                                Forgot password?
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button href="/register" variant="body2">
                                {"Don't have an account? Register"}
                            </Button>
                        </Grid>
                    </>
                ) : (
                    <Grid item>
                        <Button href="/login" variant="body2">
                            {"Already have an account? Sign in"}
                        </Button>
                    </Grid>
                )}
            </Grid>
        </form>
    );
}
