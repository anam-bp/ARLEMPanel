import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    loader : {
        margin: '20px auto',
        width: '40px',
        height: '40px',
        position: 'relative',
        // webkitTransform: 'rotateZ(45deg)',
        transform: 'rotateZ(45deg)',
        // display: none;
        '&.show' : {
            display : 'block'
        },
        '& .cube' : {
            float: 'left',
            width: '50%',
            height: '50%',
            position: 'relative',
            transform: 'scale(1.1)',
        },
        '& .cube:before' : {
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#333',
        },
        '& .cube2' : {
            transform: 'scale(1.1) rotateZ(90deg)'
        },

        '& .cube3' : {
            
        }

    }      
}));

function Loader() {
    const classes = useStyles();
    return (
        <div className="loader ">
            <div class="cube1 cube"></div>
            <div class="cube2 cube"></div>
            <div class="cube4 cube"></div>
            <div class="cube3 cube"></div>
        </div>
    )
}

export default Loader
