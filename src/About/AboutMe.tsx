import { Card, CardMedia, Grid, Typography } from "@mui/material"
import gowild from '../Assets/gowild.jpg'

const AboutMe = () => {
    return (
        <Grid container sx={{alignContent: "center"}}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{justifyContent: 'space-evenly', mt: "10px"}}>
                <Grid container sx={{justifyContent: "center"}}>
                    <Card sx={{maxWidth: "80%", alignItems: 'center'}} raised={true}>
                        <CardMedia component='img' image={gowild}/>
                    </Card>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{textAlign: 'left', mt: "10px"}}>
                    <Grid container sx={{justifyContent: "center"}}>
                        <Card sx={{maxWidth: "80%", padding: "15px"}} raised={true}>
                            <Typography variant='h5' component='div'>About me</Typography>
                            <Typography variant='body1' component='div'>
                                I started coding in high school and loved it immediately. 
                                When I first got to college, I couldn't figure out what I wanted to do. 
                                Two years of major changes later, I found Thinkful and started my coding journey. 
                                I love the challenges presented in coding, and the satisfaction I 
                                get when solving any coding challenge is exciting. I thoroughly enjoy working with others. 
                                There is always more to learn, and working with people provides an opportunity to learn from them, 
                                and even teach them too.
                            </Typography>
                            <br/>
                            <Typography variant='body1' component='div'>
                                When I am not coding, I enjoy spending time with my wife, dog, and friends. 
                                I like to get out in nature and explore while hiking. I enjoy gaming, hockey, 
                                and many outdoor activities with my family. My favorite hockey team 
                                is the Minnesota Wild!
                            </Typography>
                        </Card>                        
                    </Grid>

            </Grid>
        </Grid>
    )
}

export default AboutMe