import React from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import InputField from '../../components/Inputs/InputField'
import InputSelect from '../../components/Inputs/InputSelect'
import { makeStyles } from '@material-ui/core/styles';
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

function HazardCreate() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Add Hazard
            </Typography>
            <form className={classes.formStyles}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <InputField label="Name" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <InputField label="Type" />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <InputField label="Size" type="number"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <InputField label="Symbol" />
                    </Grid>
                </Grid>
                <Box display="flex" mt={3}>
                    <Button type="submit" variant="contained" color="primary">Save Hazard</Button>
                </Box>
                
            </form>
        </div>
    )
}

export default HazardCreate
