import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  
   textAreaStyles : {
    width:"100%",
    padding:"1rem"

   }
      
}));


function InputArea() {
    const classes = useStyles();
  return <TextareaAutosize fullWidth="true" aria-label="empty textarea" placeholder="Description" className={classes.textAreaStyles} />;
}

export default InputArea;