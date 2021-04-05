import React from 'react';
import { Typography, Grid, Button, Box } from '@material-ui/core'
import InputField from '../../components/Inputs/InputField';
import InputSelect from '../../components/Inputs/InputSelect'
import { Formik , Form, Field, ErrorMessage, yupToFormErrors } from 'formik';
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
    email : '',
    password : ''
  }
  const validationSchema = Yup.object({
    mode : Yup.string().required("Required"),
    workplace : Yup.string().required("Required"),
    description : Yup.string().required("Required"),
    language : Yup.string().required("Required")
  })

  const onSubmit = values => {
    console.log("Form data" , values)
    
  }

function TriggerCreate() {
    const classes = useStyles();
    return (
        <div>
            <Formik
             initialValues={initialValues}
             validationSchema={validationSchema}
             onSubmit={onSubmit}
            >
                {(props) => {
                    <form  onSubmit={props.handleSubmit} className={classes.formStyles}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <InputSelect label="Mode" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputSelect label="Workplace" />
                        </Grid>
                        
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="description"
                                name="description"
                                label="Description"
                                value={props.values.description}
                                onChange={props.handleChange}
                                error={props.touched.description && Boolean(props.errors.description)}
                                helperText={props.touched.description && props.errors.description}
                            />
                            {/* <InputField label="Description" type="textarea"/> */}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputSelect label="Language" />
                        </Grid>
                    </Grid>
                    <Box display="flex" mt={3}>
                        <Button type="submit" variant="contained" color="primary">Start Adding Actions</Button>
                    </Box>
                    
                </form>
                }}
            </Formik>
            
        </div>
    )
}

export default TriggerCreate
