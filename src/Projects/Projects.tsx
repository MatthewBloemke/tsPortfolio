import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import { useState } from "react"
import DesktopModal from "../Utils/DesktopModal";
import KegTracker from '../Assets/KegTracker.png'
import animalCrossing from '../Assets/animalCrossing.jpg'
import MobileModal from "../Utils/MobileModal";

const Projects = () => {
    const theme = useTheme()
    const smallScreen = (!useMediaQuery(theme.breakpoints.up('sm')))
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [index, setIndex] = useState(0)

    return (
        <Grid container sx={{alignContent: 'center'}}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}  sx={{mt: '10px'}}>
                <Box sx={{width: "90%", ml: '5%'}}>
                    <Typography variant="h5" component="div" sx={{mb: '5px'}}>Keg Tracker</Typography>
                    <img src={KegTracker} alt='keg_tracker' width="100%" style={{borderRadius: "4px", border: '1px solid black'}}/>
                    <Typography variant="body1" component="div" sx={{mb: '5px'}}>
                        This is a project I have been developing for Four Daughters Winery. 
                        It is meant to track the shipment of Kegs, to and from distributors, 
                        and collect relevant data to display. Click the button below to view screenshots
                        of the website. Access cannot be granted to view the site as it contains company data.
                    </Typography>
                    <Typography variant="body1" component="div" sx={{mb: '5px'}}>
                        GitHub Repo: <a target="_blank" href="https://github.com/MatthewBloemke/keg-tracker" rel="noopener noreferrer">https://github.com/MatthewBloemke/keg-tracker</a>
                    </Typography>
                    <Button onClick={handleOpen} variant="outlined" sx={{mb: '10px'}}>View Photos</Button>
                    {smallScreen ? <MobileModal index={index} open={open} setIndex={setIndex} setOpen={setOpen}/> : <DesktopModal index={index} open={open} setIndex={setIndex} setOpen={setOpen} />}
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{mt: '10px'}}>
                <Box sx={{width: "90%", ml: '5%'}}>
                    <Typography variant="h5" component="div" sx={{mb: '5px'}}>Animal Crossing: What's the Catch?</Typography>
                    <img src={animalCrossing} alt='animalcrossingwtc' width="100%" style={{borderRadius: "4px", border: '1px solid black'}}/>
                    <Typography variant="body1" component="div" sx={{mb: '5px'}}>
                        This is a project I have been developing to use with the game series Animal Crossing by Nintendo.
                        The game has a calendar year and time, and bugs and fish will appear in game based on the season and time of day.
                        This App takes that info, and takes the computer's local time, (as most people set the in game time to match their local time)
                        and displays only the bugs and fish that can be caught at that time.
                    </Typography>
                    <Typography variant="body1" component="div" sx={{mb: '5px'}}>Link: <a rel="noopener noreferrer" target="_blank" href="https://animalcrossingwtc.com">Animal Crossing: WTC</a></Typography>
                    <Typography variant="body1" component="div" sx={{mb: '5px'}}>Link: <a rel="noopener noreferrer" target="_blank" href="https://github.com/MatthewBloemke/AnimalCrossingWTC">Animal Crossing WTC Repo</a></Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Projects