import React from 'react';
import { Typography, Grid, Box, Button, TextField } from '@material-ui/core'
import InputField from '../../components/Inputs/InputField'
import InputSelect from '../../components/Inputs/InputSelect'
import { makeStyles } from '@material-ui/core/styles';
import { Formik , Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import POICreate from './POICreate';
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
    urn : '',
    detectable : ''
  }
  const validationSchema = Yup.object({
    name : Yup.string().required("Required"),
    urn : Yup.string().required("Required"),
    detectable : Yup.string().required("Required"),
  })

  const onSubmit = values => {
    console.log("Form data" , values)
    
  }

function ThingCreate() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Add Thing
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
                    </Grid>
                    
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            id="urn"
                            name="urn"
                            label="URN"
                            value={props.values.urn}
                            onChange={props.handleChange}
                            error={props.touched.urn && Boolean(props.errors.urn)}
                            helperText={props.touched.urn && props.errors.urn}
                        />
                        {/* <InputField label="URN" /> */}
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
                    <POICreate/>
                    <Box display="flex" mt={3}>
                        <Button type="submit" variant="contained" color="primary">Save Thing</Button>
                    </Box>
                    
                </form>
                }}
            </Formik>
            
        </div>
    )
}

export default ThingCreate
