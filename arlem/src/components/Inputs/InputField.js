import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function InputField(props) {
    // const classes = useStyles();
    const {label = "text" , model,error, cssClass, type} = props
  
    return (
    
        <TextField fullWidth="true" id="standard-basic" label={`${label}`} type= {`${type}`} />
      
    );
  }