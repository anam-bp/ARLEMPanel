import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {FormControl, InputLabel,Select} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
    
      '& .MuiInputLabel-root' : {
        color:"#fff"
      }
    
  },
}));

export default function InputSelect({label, ...otherProps}) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    
    <FormControl className={classes.formControl} fullWidth="true">
        <InputLabel htmlFor="select">{label}</InputLabel>
        <Select
          native
          value={selectedValue}
          onChange={handleChange}
          inputProps={{
            name: 'category',
            id: 'select',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </Select>
      </FormControl>
  );
}
