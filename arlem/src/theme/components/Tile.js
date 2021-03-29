import { Grid, Icon, Paper, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tile: {
    minHeight: 'auto',
    minWidth: 'auto',
    textAlign: 'center',
    fontSize: '1em',
    width: 'auto',
    height: 'auto',
    padding: '1em',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
    border: '1px solid #efefef',
    cursor:'pointer',
    margin: '0.3em 0',
    textAlign:'center',
    '&:hover' : {
        boxShadow: '0 0px 0px 0 rgba(0,0,0,.14)'
    },
    '& .MuiIcon-root' : {
        fontSize: '3em',
        display:'block',
        width: 'auto'
    }
    },
   
    
    

      
}));



function Tile({icon, text, extraClass}) {
    const classes = useStyles();
    return (
    <Paper className={classes.tile}>
        <Icon className={`fa ${icon} icon`}></Icon>
        <Typography variant="p" component="p">{text}</Typography>
    </Paper>
    )
}

export default Tile
