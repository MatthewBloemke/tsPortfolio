import {AppBar, BottomNavigation, BottomNavigationAction, Button, Grid, Paper, Toolbar, Typography, useMediaQuery } from "@mui/material"
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from "../Home/Home"
import "./Layout.css"
import {useTheme} from '@mui/material/styles';
import { useState } from "react";
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import EmailIcon from '@mui/icons-material/Email';

const Layout = () => {
    const theme = useTheme()
    const smallScreen = (!useMediaQuery(theme.breakpoints.up('sm')))
    const [value, setValue] = useState(0);
    return (
        <Grid>
                <AppBar position="static" sx={{pt: "15px", pb: "15px"}}>
                    <Toolbar>
                        <Typography sx={{pl: "10px", flexGrow: 1}} component="div" variant="h4">Matthew Bloemke</Typography>
                        {smallScreen ? null :
                            <div>
                                <Button component={Link} to="/home" color="inherit">Home</Button>
                                <Button component={Link} to="/about" color="inherit">About</Button>
                                <Button component={Link} to="/projects" color="inherit">Projects</Button>
                                <Button component={Link} to="/contact" color="inherit">Contact Me</Button>                                  
                            </div>
                      
                        }
                    </Toolbar>
                </AppBar>
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home />} />
                </Routes>
                {smallScreen ? 
                    <Paper sx={{  position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                        <BottomNavigation
                            sx={{background: theme.palette.primary.main, }}
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        >
                            <BottomNavigationAction component={Link} to="/home" label="Home" icon={<HomeIcon/>}/>
                            <BottomNavigationAction component={Link} to="/about" label="About" icon={<InfoIcon/>}/>
                            <BottomNavigationAction component={Link} to="/projects" label="Projects" icon={<BuildIcon/>}/>
                            <BottomNavigationAction component={Link} to="/contact" label="Contact" icon={<EmailIcon/>}/>
                        </BottomNavigation>
                    </Paper>
                    : null }
        </Grid>
    )
}

export default Layout;