import { Grid, Typography, Box } from '@material-ui/core'
import React from 'react'
import Tile from '../../theme/components/Tile'

import {makeStyles} from '@material-ui/core/styles';
import ActivityCreateBasic from './ActivityCreateBasic';

const useStyles = makeStyles((theme) => ({
    root : {
        height:'100%'
        
    },
    section : {
        // height:'100vh'
    },
    tilesContainer : {
        padding: "0rem 0.5rem"
    },

    categoryHeading : {
        fontSize:'19px',
        letterSpacing:'0.01em', 
        textAlign:'left',
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    middleContainer : {
        padding:'2rem 2rem',
        '& .MuiBox-root-67' : {
            alignSelf : "top"
        }
    },

}));


function ActivityCreate() {
    const classes = useStyles();
    return (
        
            <Box style={{minHeight:'100vh'}}>
                <Grid container alignItems="stretch" >
                    <Grid item xs={12} md={2} className={classes.section ,classes.tilesContainer} >
                        <Tile icon="fa-info-circle" text="Activity Details" />
                        <Typography variant="h4" component="h4" className={classes.categoryHeading}>Activity Actions</Typography>
                        <Tile icon="fa-plus" text="Add Action" />
                    </Grid>
                    <Grid item xs={12} md={10} className={classes.section,classes.middleContainer} >
                        <ActivityCreateBasic/>
                    </Grid>
                    
                </Grid>
            </Box>
        
    )
}

export default ActivityCreate
