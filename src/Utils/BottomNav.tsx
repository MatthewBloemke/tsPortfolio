import { Box, Paper, BottomNavigation, BottomNavigationAction, useTheme } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import EmailIcon from '@mui/icons-material/Email';

const BottomNav = () => {
    const theme = useTheme()
    const ref = useRef<HTMLDivElement>(null)
    const [value, setValue] = useState(0);
    useEffect(() => {
        (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    }, [value])
    return (
        <Box ref={ref} sx={{mt: '65px'}}>
            <Paper sx={{  position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                sx={{background: theme.palette.primary.main }}
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
        </Box>

    )
}

export default BottomNav;