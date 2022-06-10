import {AppBar, Button, Grid, Toolbar, Typography } from "@mui/material"
import "./Layout.css"

const Layout = () => {
    return (
        <Grid>
                <AppBar position="static" sx={{pt: "15px", pb: "15px"}}>
                    <Toolbar>
                        <Typography sx={{pl: "10px", flexGrow: 1}} component="div" variant="h4">Matthew Bloemke</Typography>
                            <Button color="inherit">Home</Button>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Projects</Button>
                            <Button sx={{float: "right"}} color="inherit">Contact Me</Button>

                    </Toolbar>
                    
                </AppBar>

        </Grid>
    )
}

export default Layout;