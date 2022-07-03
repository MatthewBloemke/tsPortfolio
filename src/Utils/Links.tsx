import { AppBar, Toolbar, Typography } from "@mui/material"


const Links = (props:any) => {
    const {isMobile} = props
    if (isMobile) {
        return (
            <AppBar position='static'>
                <Toolbar sx={{justifyContent: "space-evenly"}}>
                    <Typography component='div' variant="body1"><a href="https://github.com/MatthewBloemke" target="_blank" rel="noopener noreferrer">GitHub</a></Typography>
                    <Typography component='div' variant="body1"><a href="https://linkedin.com/in/matthewbloemke" target="_blank" rel="noopener noreferrer">Linkedin</a></Typography>
                </Toolbar>
            </AppBar>
        )
    } else {
        return (
            <AppBar position='static' sx={{pb: '2px', pt: '2px'}}>
            <Toolbar sx={{justifyContent: "space-evenly"}}>
                <Typography component='div' variant="body1">Github Link: <a href="https://github.com/MatthewBloemke" target="_blank" rel="noopener noreferrer">https://github.com/MatthewBloemke</a></Typography>
                <Typography component='div' variant="body1">Linkedin Link: <a href="https://linkedin.com/in/matthewbloemke" target="_blank" rel="noopener noreferrer">https://linkedin.com/in/matthewbloemke</a></Typography>
            </Toolbar>
        </AppBar>
        )
    }
}

export default Links