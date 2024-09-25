import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box, Card, CardContent, CardActions } from '@mui/material';

const LandingPage = () => {

    return (
        <div>
            {/*/!* Header *!/*/}
            {/*<AppBar position="static">*/}
            {/*    <Toolbar>*/}
            {/*        <Typography variant="h6" sx={{ flexGrow: 1 }}>*/}
            {/*            MyWebsite*/}
            {/*        </Typography>*/}
            {/*        <Button color="inherit">Login</Button>*/}
            {/*    </Toolbar>*/}
            {/*</AppBar>*/}

            {/* Hero Section */}
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
                <Container maxWidth="sm">
                    <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                        Welcome to MyWebsite
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Here is a short description of your website and its offerings. Engage users with your message here.
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Get Started
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Learn More
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            {/* Features Section */}
            <Container sx={{ pt: 8, pb: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {[1, 2, 3].map((feature) => (
                        <Grid item key={feature} xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Feature {feature}
                                    </Typography>
                                    <Typography>
                                        This is a description of Feature {feature}. Highlight the benefits and uses.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    © 2024 MyWebsite. All rights reserved.
                </Typography>
            </Box>
        </div>
    );
};

export default LandingPage;
