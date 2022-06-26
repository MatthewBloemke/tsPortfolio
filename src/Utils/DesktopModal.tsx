
import { Box, Grid, IconButton, Modal} from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Dashboard from '../Assets/Dashboard.png'
import SideMenu from '../Assets/SideMenu.png'
import ShippingPage from '../Assets/ShippingPage.png'

const images = [Dashboard, SideMenu, ShippingPage]

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    p:1,
}

const DesktopModal = (props:any) => {
    const {setOpen, open, index, setIndex} = props
    const handleClose = () => setOpen(false);

    const previous = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    const next = () => {
        if (index < images.length-1) {
            setIndex(index + 1)
        }
    }

    return (
    <Modal
        open={open}
        onClose={handleClose}
    >
        <Box sx={style}>
            <Grid container sx={{justifyContent: 'space-between'}}>
                <IconButton onClick={previous} sx={{height: '40px', mt: '23%'}}>
                    <ArrowBackIosIcon/>
                </IconButton>
                <img src={images[index]} alt="dashboard" width="90%"/>
                <IconButton onClick={next} sx={{height: '40px', mt: '23%'}}>
                    <ArrowForwardIosIcon/>
                </IconButton> 
            </Grid>
        </Box>
    </Modal>
    )
}

export default DesktopModal