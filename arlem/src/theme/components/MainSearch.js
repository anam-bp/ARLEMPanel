import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Icon, Input } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
    searchPanel :{
        // -webkit-box-align: center;
        // -ms-flex-align: center;
        alignItems: 'center',
        // -webkit-box-pack: center;
        // -ms-flex-pack: center;
        justifyContent: 'center',
        minWidth: '350px',
        maxWidth: '500px',
        position: 'relative',
        marginLeft: '25px',
        marginTop: '10px',

        '& .MuiInput-root ': {
            width: '100%',
            outline: 'none',
            border: 'none',
            padding: '15px 15px 15px 45px',
            marginTop: '6px',
            borderRadius: '2px',
            background: 'rgba(255,255,255,0.4)'
        },

        '& .MuiIcon-root' : {
            position: 'absolute',
            left: '10px',
            top: '15px',
            color: '#FFFFFF'
        }
    }

      
}));

function MainSearch() {
    const classes = useStyles();
    return (
        <div className={classes.searchPanel}>
            <Input type="text" placeholder="Search"></Input>
            <Icon className="fa fa-search icon"></Icon>
        </div>
    )
}

export default MainSearch
