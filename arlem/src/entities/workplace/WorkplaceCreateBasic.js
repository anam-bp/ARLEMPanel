import { Typography, Grid, Button, Box } from '@material-ui/core'
import React from 'react'
import InputField from '../../components/Inputs/InputField'
import InputSelect from '../../components/Inputs/InputSelect'

import PersonCreate from '../tangible/PersonCreate'
import { makeStyles } from '@material-ui/core/styles';
import Operations from '../action/Operations'
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

function WorkplaceCreateBasic() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Workplace Details
            </Typography>
            <form className={classes.formStyles}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <InputField label="Name" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputSelect  label="Category"/>
                    </Grid>
                </Grid>
                <Box display="flex" mt={3}>
                    <Button type="submit" variant="contained" color="primary">Start Adding Items</Button>
                </Box>
                
            </form>
        </div>
    )
}

export default WorkplaceCreateBasic
