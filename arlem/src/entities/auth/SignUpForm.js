import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    IconButton,
    Link,
    Box,
    Grid,
    Button,
    AppBar,
    Typography,
    Card,
    CardHeader
    
    

} from '@material-ui/core';

import { Visibility, VisibilityOff} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:'2rem'
      },
      margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      spaceBetween : {
          display: "flex !important",
          justifyContent:'space-between !important'
      },
      header : {
          padding:'0.2rem 2rem',
          textAlign:'left'
         
      },

      formWrapper : {
        width : "450px"
      },

      cardHeader : {
        backgroundColor : "#009d88"
      }
      
}));

export default function SignUpForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
      <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}>
        <div className={classes.formWrapper}>
      <AppBar position="static" className={classes.header}> 
        <Typography>
          <h2 align="left">Sign Up</h2>
        </Typography>
      </AppBar>
      <Card>
        
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl fullWidth className={classes.margin, classes.textField} my={2}>
          <Grid container spacing={3}>
              <Grid item xs={12}>
              <TextField fullWidth id="email" label="Email" />
              </Grid>
              <Grid item xs={12}>
              <FormControl fullWidth className={classes.margin, classes.textField}>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              </Grid>
              <Grid item xs={12}>
              <Box style={{display:'flex',justifyContent:'space-between'}}>
                  <Link href="#" >
                      Sign in!
                  </Link>
                  
              </Box>
              </Grid>
              <Grid item xs={12} >
                <Box style={{display:'flex',justifyContent:'flex-end'}}>
                  <Button variant="contained" color="primary" >Submit</Button>
                </Box>
              </Grid>
          </Grid>
        </FormControl>
    </form>
    </Card>
    </div>
    </Grid>
  );
}
