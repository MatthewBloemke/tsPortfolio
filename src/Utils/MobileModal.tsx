import { Box, Grid, IconButton, Modal} from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import kegtracker_m_1 from '../Assets/kegtracker_m_1.png'
import kegtracker_m_2 from '../Assets/kegtracker_m_2.png'
import kegtracker_m_3 from '../Assets/kegtracker_m_3.png'
import kegtracker_m_4 from '../Assets/kegtracker_m_4.png'
import kegtracker_m_5 from '../Assets/kegtracker_m_5.png'
import kegtracker_m_6 from '../Assets/kegtracker_m_6.png'

const mobileImages = [kegtracker_m_1, kegtracker_m_2, kegtracker_m_3, kegtracker_m_4, kegtracker_m_5, kegtracker_m_6]

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    pr:0,
    p:1,
}

const MobileModal = (props:any) => {
    const {setOpen, open, index, setIndex} = props
    const handleClose = () => setOpen(false);

    const previous = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    const next = () => {
        if (index < mobileImages.length-1) {
            setIndex(index + 1)
        }
    }

    return (
    <Modal
        open={open}
        onClose={handleClose}
    >
        <Box sx={style}>
            <Grid container sx={{justifyContent: 'center'}}>

                <img src={mobileImages[index]} alt="dashboard" width="95%"/>
                <IconButton onClick={previous} sx={{height: '40px', mt: '23%'}}>
                    <ArrowBackIosIcon/>
                </IconButton>                
                <IconButton onClick={next} sx={{height: '40px', mt: '23%'}}>
                    <ArrowForwardIosIcon/>
                </IconButton> 
            </Grid>
        </Box>
    </Modal>
    )
}

export default MobileModal