import { Typography, Grid, Box, TextField, List, ListItem, ListItemText, IconButton } from '@material-ui/core'
import React from 'react'
import Tile from '../../theme/components/Tile'
import {makeStyles} from '@material-ui/core/styles';
import WorkplaceCreateBasic from './WorkplaceCreateBasic';
import DetectableCreate from '../trigger/DetectableCreate';
import HazardCreate from '../trigger/HazardCreate';
import WarningCreate from '../trigger/WarningCreate';
import POICreate from '../tangible/POICreate';
import PredicateCreate from '../trigger/PredicateCreate';
import AppCreate from '../configurable/AppCreate';
import SensorCreate from '../sensors/SensorCreate';
import PersonCreate from '../tangible/PersonCreate';
import ThingCreate from '../tangible/ThingCreate';
import PlaceCreate from '../tangible/PlaceCreate';
import InputField from '../../components/Inputs/InputField';
const useStyles = makeStyles((theme) => ({
    root : {
        '& .MuiGrid-item': {
            // padding: '30px'

        }
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
    title : {
        fontSize:'45px',
        // marginTop:'1rem',
        // marginBottom:'1rem',
        textAlign:'left'
    },
    subTitle : {
        marginBottom:'1.5rem',
        fontWeight:200,
        lineHeight:'40px',
        fontSize:"34px",
        textAlign:"left"
    },
    middleContainer : {
        padding:'1.5rem 2rem',
        '& .MuiBox-root-67' : {
            alignSelf : "top"
        }
    },
    rightContainer : {
        padding:'1.5rem 2rem',
        width:"20%",
        height:"100vh",
        backgroundColor: "#efefef"
    },
    searchInput : {
        '& .MuiFilledInput-underline::before' : {
            borderBottom:"0px"
        },
        '& .MuiFilledInput-underline::after' : {
            borderBottom : "0px"
        },
        '& .MuiFilledInput-root' : {
            backgroundColor:"#ffffff",
            borderRadius : "0px"
        },
        '& .MuiFilledInput-input': {
            padding: "12px 12px 10px"
        }
    },
    listStyles : {
        "& .MuiListItem-root" : {
            backgroundColor : "#ffffff"
        }
    }
    


}));
    
    


function WorkplaceCreate() {
    const classes = useStyles();
    return (
        <Box display="flex" justifyContent="space-between" alignItems="stretch">
            <Box className={classes.tilesContainer}>
                <Tile icon="fa-home" text="Workplace Details" />
                <Typography variant="h4" component="h4" className={classes.categoryHeading}>Tangibles</Typography>
                <Tile icon="fa-user" text="Add Person" />
                 <Tile icon="fa-bicycle" text="Add Thing" />
                <Tile icon="fa-map-marker" text="Add Location" />
                <Typography variant="h4" component="h4" className={classes.categoryHeading}>Configurables</Typography>
                 <Tile icon="fa-th" text="Add App" />
                 <Tile icon="fa-mobile" text="Add Device" />
                <Typography variant="h4" component="h4" className={classes.categoryHeading}>Triggers</Typography>
                <Tile icon="fa-lightbulb-o" text="Add App" />
                <Tile icon="fa-mobile" text="Add Device" />  
                 <Tile icon="fa-lightbulb-o" text="Add Hazard" />
                <Tile icon="fa-mobile" text="Add Detectable" />    
            </Box>
            <Box flexGrow={3} className={classes.middleContainer}>
                <Typography variant="h2" component="h2" color="textSecondary" className={classes.title}>
                Create Workplace
                </Typography>
                <WorkplaceCreateBasic />
            </Box>
            <Box className={classes.rightContainer}>
                <Typography variant="h4" component="h4" color="textSecondary" className={classes.subTitle}>
                        Added Entities
                </Typography>
                <TextField 
                type="search"
                fullWidth="true"
                placeholder="Search Entities"
                variant="filled"
                className={classes.searchInput}
                />
                <List className={classes.listStyles}>
                    <ListItem>
                        <ListItemText primary="Person" secondary="John Doe" />
                        <IconButton variant="contained" color="primary">
                            <i className="fa fa-trash"></i>
                        </IconButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
            
    )
}

export default WorkplaceCreate
