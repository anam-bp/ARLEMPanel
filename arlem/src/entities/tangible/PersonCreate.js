import React from 'react';
import { Typography, Grid, Box, Button, TextField } from '@material-ui/core'
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
    twitter : '',
    email : '',
    detectable : '',
    persona : ''
  }
  const validationSchema = Yup.object({
    name : Yup.string().required("Required"),
    type : Yup.string().required("Required"),
    url : Yup.string().required("Required"),
    username : Yup.string().required("Required"),
    password : Yup.string().required("Required"),
    
  })

  const onSubmit = values => {
    console.log("Form data" , values)
    
  }


function PersonCreate() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Add Person
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
                                {/* <InputField label="Name" /> */}
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="twitter"
                                name="twitter"
                                label="Twitter"
                                value={props.values.twitter}
                                onChange={props.handleChange}
                                error={props.touched.twitter && Boolean(props.errors.twitter)}
                                helperText={props.touched.twitter && props.errors.twitter}
                            />
                            {/* <InputField label="Twitter" /> */}
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
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
                                {/* <InputField label="Email" /> */}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="detectable"
                                    name="detectable"
                                    label="Detectable"
                                    value={props.values.detectable}
                                    onChange={props.handleChange}
                                    error={props.touched.detectable && Boolean(props.errors.detectable)}
                                    helperText={props.touched.detectable && props.errors.detectable}
                                />
                                {/* <InputSelect label="Detectable" /> */}
                            </Grid>
                            
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="persona"
                                    name="persona"
                                    label="Persona"
                                    value={props.values.persona}
                                    onChange={props.handleChange}
                                    error={props.touched.persona && Boolean(props.errors.persona)}
                                    helperText={props.touched.persona && props.errors.persona}
                                />
                                {/* <InputField label="Persona" /> */}
                            </Grid>
                            
                        </Grid>
                        <Box display="flex" mt={3}>
                            <Button type="submit" variant="contained" color="primary">Save Person</Button>
                        </Box>
                        
                    </form>
                }}
            </Formik>
            
        </div>
    )
}

export default PersonCreate
