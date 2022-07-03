import { AppBar,  Button, Grid, Toolbar, Typography, useMediaQuery } from "@mui/material"
import "./Layout.css"
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import AppRoutes from "./AppRoutes";
import BottomNav from "../Utils/BottomNav";
import Links from "../Utils/Links";

const Layout = () => {
    const theme = useTheme()
    const smallScreen = (!useMediaQuery(theme.breakpoints.up('sm')))
    
    return (
        <Grid>
            <AppBar position='static' sx={{pt: "10px", pb: "5px", backgroundColor: theme.palette.primary.dark}}/>
            <AppBar position="static" sx={{pt: "10px", pb: "10px"}}>
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
            <Links isMobile={smallScreen}/>
            <AppRoutes/>
            {smallScreen ? 
                <BottomNav/>
                : null }
        </Grid>
    )
}

export default Layout;