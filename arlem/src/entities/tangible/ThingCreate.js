import React from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import InputField from '../../components/Inputs/InputField'
import InputSelect from '../../components/Inputs/InputSelect'
import { makeStyles } from '@material-ui/core/styles';
import POICreate from './POICreate';
const useStyles = makeStyles((theme) => ({
  
    subTitle : {
        marginBottom:'1.5rem',
        fontWeight:200,
        lineHeight:'40px',
        fontSize:"34px",
        textAlign:"left"
    },
    formStyles: {
        width:"100%"
    },
    formContainer : {
        marginTop:'3rem'
    }
      
}));

function ThingCreate() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Add Thing
            </Typography>
            <form className={classes.formStyles}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <InputField label="Name" />
                    </Grid>
                    
                </Grid>
                
                <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <InputField label="URN" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputSelect label="Detectable" />
                    </Grid>
                    
                </Grid>
                <POICreate/>
                <Box display="flex" mt={3}>
                    <Button type="submit" variant="contained" color="primary">Save Thing</Button>
                </Box>
                
            </form>
        </div>
    )
}

export default ThingCreate
