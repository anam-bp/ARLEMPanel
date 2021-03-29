import { Typography, Grid, Button, Box, Input } from '@material-ui/core'
import React from 'react'
import InputField from '../../components/Inputs/InputField'
import InputSelect from '../../components/Inputs/InputSelect'

import PersonCreate from '../tangible/PersonCreate'
import { makeStyles } from '@material-ui/core/styles';
import InputArea from '../../components/Inputs/InputArea'
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
        // marginTop:'3rem'
    }
      
}));

function ActivityCreateBasic() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Basic Details
            </Typography>
            <form className={classes.formStyles}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <InputField label="Name" error="" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <InputSelect label="Workplace" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <InputSelect label="Language" />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <InputField label="Description" type="textarea" error="" />
                        {/* <InputArea/> */}
                    </Grid>
                </Grid>
                <Box display="flex" mt={3}>
                    <Button type="submit" variant="contained" color="primary">Start Adding Actions</Button>
                </Box>
                
            </form>
        </div>
    )
}

export default ActivityCreateBasic
