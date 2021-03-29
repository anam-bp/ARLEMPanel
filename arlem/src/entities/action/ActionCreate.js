import { Typography, Grid, Button, Box } from '@material-ui/core'
import React from 'react'
import InputField from '../../components/Inputs/InputField';
import InputSelect from '../../components/Inputs/InputSelect'

import PersonCreate from '../../components/tangible/PersonCreate'
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

function ActionCreate() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Create Action
            </Typography>
            <form className={classes.formStyles}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <InputField label="Name" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputSelect label="View Port" />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <InputField label="Instruction Title" type="text"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputField label="Instruction Details" type="text"/>
                    </Grid>
                </Grid>
                <Box display="flex" mt={3}>
                    <Button type="submit" variant="contained" color="primary">Start Adding Actions</Button>
                </Box>
                
            </form>
        </div>
    )
}

export default ActionCreate
