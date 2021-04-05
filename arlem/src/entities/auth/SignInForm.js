
import React from 'react';
import { Formik , Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'

import {
    TextField,
    Link,
    Box,
    Grid,
    Button,
    AppBar,
    Typography,
    Card,

} from '@material-ui/core';



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

  const initialValues = {
    email : '',
    password : ''
  }
  const validationSchema = Yup.object({
    email : Yup.string().email("Invalid email format").required("Required"),
    password : Yup.string().required("Required"),
  })

  const onSubmit = values => {
    console.log("Form data" , values)
    
  }

 function SignInForm() {
  const classes = useStyles();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  console.log(isLoggedIn);

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
          <h2 align="left">Sign In</h2>
        </Typography>
      </AppBar>
      <Card>
      <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} className={classes.root}>
             <Grid container spacing={3}>
              <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={props.values.email}
                onChange={props.handleChange}
                error={props.touched.email && Boolean(props.errors.email)}
                helperText={props.touched.email && props.errors.email}
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={props.values.password}
                onChange={props.handleChange}
                error={props.touched.password && Boolean(props.errors.password)}
                helperText={props.touched.password && props.errors.password}
              />
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
                  <Button variant="contained" color="primary" type="submit" onClick={() => dispatch({type:'SIGN_IN'})}>Submit</Button>
                </Box>
              </Grid>
          </Grid>
        </form>
        )}
      </Formik>

      
    </Card>
    
    </div>
    </Grid>
  );
}
export default SignInForm