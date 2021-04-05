import React from 'react';
import { Typography, Grid, Box, Button } from '@material-ui/core'
import InputField from '../../components/Inputs/InputField'
import InputSelect from '../../components/Inputs/InputSelect'
import { Formik , Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  
    subTitle : {
        marginBottom:'1.5rem',
        fontWeight:200,
        lineHeight:'40px',
        fontSize:"34px",
        textAlign:"left"
    },
    formStyles: {
        width:"100%"
    },
    formContainer : {
        marginTop:'3rem'
    }
      
}));

const initialValues = {
    name : '',
    type : ''
  }
  const validationSchema = Yup.object({
    name : Yup.string().required("Required"),
    type : Yup.string().required("Required"),
  })

  const onSubmit = values => {
    console.log("Form data" , values)
    
  }

function DeviceCreate() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Add Device
            </Typography>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                {(props) => {
                    <form onSubmit={props.handleSubmit} className={classes.formStyles}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                value={props.values.name}
                                onChange={props.handleChange}
                                error={props.touched.name && Boolean(props.errors.name)}
                                helperText={props.touched.name && props.errors.name}
                            />
                                
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="type"
                                    name="type"
                                    label="Type"
                                    value={props.values.type}
                                    onChange={props.handleChange}
                                    error={props.touched.type && Boolean(props.errors.type)}
                                    helperText={props.touched.type && props.errors.type}
                                />
                            
                            </Grid>
                        </Grid>
                        <Box display="flex" mt={3}>
                            <Button type="submit" variant="contained" color="primary">Save Device</Button>
                        </Box>
                        
                    </form>
                }}
            </Formik>
            
        </div>
    )
}

export default DeviceCreate
