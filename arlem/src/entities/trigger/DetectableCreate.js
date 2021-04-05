import React from 'react';
import { Formik , Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { Typography, Grid, Box, Button, TextField} from '@material-ui/core'
import InputField from '../../components/Inputs/InputField'
import InputSelect from '../../components/Inputs/InputSelect'

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
    type : '',
    sensor : '',
    url : '',

  }
  const validationSchema = Yup.object({
    name : Yup.string().required("Required"),
    type : Yup.string().required("Required"),
    sensor : Yup.string().required("Required"),
    url : Yup.string().required("Required"),
  })

  const onSubmit = values => {
    console.log("Form data" , values)
    
  }

function DetectableCreate() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Add Detectable
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
                                type="name"
                                value={props.values.name}
                                onChange={props.handleChange}
                                error={props.touched.name && Boolean(props.errors.name)}
                                helperText={props.touched.name && props.errors.name}
                            />
                                {/* <InputField label="Name" /> */}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="type"
                                    name="type"
                                    label="Type"
                                    type="type"
                                    value={props.values.type}
                                    onChange={props.handleChange}
                                    error={props.touched.type && Boolean(props.errors.type)}
                                    helperText={props.touched.type && props.errors.type}
                                />
                            {/* <InputField label="Type" /> */}
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="sensor"
                                    name="sensor"
                                    label="Sensor"
                                    type="sensor"
                                    value={props.values.sensor}
                                    onChange={props.handleChange}
                                    error={props.touched.sensor && Boolean(props.errors.sensor)}
                                    helperText={props.touched.sensor && props.errors.sensor}
                                />
                                {/* <InputSelect label="Sensor" /> */}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="url"
                                    name="url"
                                    label="URL"
                                    type="url"
                                    value={props.values.url}
                                    onChange={props.handleChange}
                                    error={props.touched.url && Boolean(props.errors.url)}
                                    helperText={props.touched.url && props.errors.url}
                                />
                            {/* <InputField label="URL" /> */}
                            </Grid>
                        </Grid>
                        <Box display="flex" mt={3}>
                            <Button type="submit" variant="contained" color="primary">Save Detectable</Button>
                        </Box>
                        
                    </form>
                }}
            </Formik>
            
        </div>
    )
}

export default DetectableCreate
