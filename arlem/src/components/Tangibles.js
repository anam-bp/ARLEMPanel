import { Grid, Typography , Button} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:'2rem',
        textAlign:'left',
        backgroundColor : '#009d88',
        color: "#ffffff"
        
      }
      
}));

function Tangibles() {
    const classes = useStyles();
    return (
        <Grid container align="left" className={classes.root} alignItems="center">
            <Grid item xs={12} md={10}>
                <Typography variant="h3" component="h2" >
                    Tangibiles
                </Typography>
                <Typography variant="subtitle-1" component="p" >
                Tangibles are the physical objects present within the workplace. These objects are used / required to complete the activity.
                </Typography>
            </Grid>
            <Grid item xs={12} md={2} align="right">
                <Button variant="contained" color="secondary">Create Tangibile</Button>
            </Grid>
        </Grid>
    )
}

export default Tangibles
