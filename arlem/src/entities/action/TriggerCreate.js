import React from 'react';
import { Typography, Grid, Button, Box } from '@material-ui/core'
import InputField from '../../components/Inputs/InputField';
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

function TriggerCreate() {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.formStyles}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <InputSelect label="Mode" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputSelect label="Workplace" />
                    </Grid>
                    
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <InputField label="Description" type="textarea"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputSelect label="Language" />
                    </Grid>
                </Grid>
                <Box display="flex" mt={3}>
                    <Button type="submit" variant="contained" color="primary">Start Adding Actions</Button>
                </Box>
                
            </form>
        </div>
    )
}

export default TriggerCreate
