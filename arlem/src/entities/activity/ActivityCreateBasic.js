import { Typography, Grid, Button, Box, Input, TextField } from '@material-ui/core'
import React from 'react'
import InputField from '../../components/Inputs/InputField'
import InputSelect from '../../components/Inputs/InputSelect'
import { Formik , Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import PersonCreate from '../tangible/PersonCreate'
import { makeStyles } from '@material-ui/core/styles';
import InputArea from '../../components/Inputs/InputArea'
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
        // marginTop:'3rem'
    }
      
}));
const initialValues = {
    name : '',
    workplace : '',
    language : '',
    description : ''
  }
  const validationSchema = Yup.object({
    name : Yup.string().required("Required"),
    workplace : Yup.string().required("Required"),
    language : Yup.string().required("Required"),
    description : Yup.string().required("Required"),
  })

  const onSubmit = values => {
    console.log("Form data" , values)
    
  }


function ActivityCreateBasic() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Basic Details
            </Typography>
            <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                {(props) => {
                    <form onSubmit={props.handleSubmit} className={classes.formStyles}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
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
                                {/* <InputField label="Name" error="" /> */}
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    id="workplace"
                                    name="workplace"
                                    label="Workplace"
                                    value={props.values.workplace}
                                    onChange={props.handleChange}
                                    error={props.touched.workplace && Boolean(props.errors.workplace)}
                                    helperText={props.touched.workplace && props.errors.workplace}
                                />
                                {/* <InputSelect label="Workplace" /> */}
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    id="language"
                                    name="language"
                                    label="Language"
                                    value={props.values.language}
                                    onChange={props.handleChange}
                                    error={props.touched.language && Boolean(props.errors.language)}
                                    helperText={props.touched.language && props.errors.language}
                                />
                                {/* <InputSelect label="Language" /> */}
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
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
                                {/* <InputField label="Description" type="textarea" error="" /> */}
                                {/* <InputArea/> */}
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

export default ActivityCreateBasic
