import { Button, Grid, TextField, Typography } from "@mui/material"
import { ChangeEvent, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

type Values = {
    name: string,
    email : string,
    message : string
}

const Contact = () => {

    const [state, handleSubmit] = useForm('xknyavbk')

    const [formData, setFormData] = useState<Values>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Grid container alignItems="center" direction="column">
            <Typography component='div' variant='h5' sx={{ mt: '10px'}}>Contact Me</Typography>
            <Typography component='div' variant='body1'>Please fill out the form below to contact me</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="center" direction="column">
                <TextField sx={{width: "30%", minWidth:"250px", mt: "18px"}} id ="outlined-basic email" type="email" name="email" label="Email" onChange={handleChange} value={formData.email} />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <TextField sx={{width: "20%", minWidth:"250px", mb: "18px"}} multiline rows={4} id ="outlined-basic message" label="Message" name="message" margin="normal" onChange={handleChange} value={formData.message} />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <Button type="submit" variant='outlined' disabled={state.submitting}>
                    Submit
                </Button>
                </Grid>
            </form>
        </Grid>
        
    )
}

export default Contact;