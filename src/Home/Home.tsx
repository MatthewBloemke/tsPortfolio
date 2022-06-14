import { Card, CardMedia, Grid, Typography } from '@mui/material'
import HomeImage from '../Assets/HomeImage.jpg';



const Home = () => {
    return (
        <Grid container sx={{alignContent: "center"}}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{justifyContent: 'space-evenly', mt: "10px"}}>
                <Grid container sx={{justifyContent: "center"}}>
                    <Card sx={{maxWidth: "80%", alignItems: 'center'}} raised={true}>
                        <CardMedia
                            component="img"
                            image={HomeImage}
                        />
                    </Card>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{textAlign: 'left', mt: "10px"}}>
                <Grid container sx={{justifyContent: 'center'}}>
                    <Card sx={{maxWidth: "80%", padding: "15px"}} raised={true} >
                        <Typography variant="h3" component="div">Hello, I'm Matthew Bloemke</Typography>
                        <Typography variant="h6" component="div">
                            I am a 23-year old software developer in-training. I currently live in Wisconsin. 
                            I am a graduate from Thinkful, a coding boot camp, where I learned how to develop 
                            websites and write code. Some languages I learned are HTML, JavaScript, and CSS. 
                            I also know some Java and Python, and I am learning more everyday.
                        </Typography>
                        <br/>
                        <Typography variant="h6" component="div">
                            Beyond coding, I am a hardworking, driven individual. 
                            I enjoy a challenge and love solving problems. I am a great team player and have a 
                            very positive outlook on difficult tasks, which makes work a lot more fun for me. 
                            I am a great addition to any team!
                        </Typography>                    
                    </Card>                    
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;