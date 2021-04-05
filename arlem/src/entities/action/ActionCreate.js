import { Typography, Grid, Button, Box } from '@material-ui/core'
import React from 'react'
import InputField from '../../components/Inputs/InputField';
import InputSelect from '../../components/Inputs/InputSelect'
import { Formik , Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import PersonCreate from '../../components/tangible/PersonCreate'
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
    viewport : '',
    instructionTitle : '',
    instructionDetail : ''
  }
  const validationSchema = Yup.object({
    name : Yup.string().required("Required"),
    viewport : Yup.string().required("Required"),
    instructionTitle : Yup.string().required("Required"),
    instructionDetail : Yup.string().required("Required")
  })

  const onSubmit = values => {
    console.log("Form data" , values)
    
  }
function ActionCreate() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Create Action
            </Typography>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                {(props) => {
                    <form  onSubmit={props.handleSubmit} className={classes.formStyles}>
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
                                {/* <TextField
                                    fullWidth
                                    id="viewport"
                                    name="viewport"
                                    label="Viewport"
                                    value={props.values.viewport}
                                    onChange={props.handleChange}
                                    error={props.touched.viewport && Boolean(props.errors.viewport)}
                                    helperText={props.touched.viewport && props.errors.viewport}
                                /> */}
                                <InputSelect label="View Port" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="instructionTitle"
                                    name="instructionTitle"
                                    label="Instruction Title"
                                    value={props.values.instructionTitle}
                                    onChange={props.handleChange}
                                    error={props.touched.instructionTitle && Boolean(props.errors.instructionTitle)}
                                    helperText={props.touched.instructionTitle && props.errors.instructionTitle}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    id="instructionDetails"
                                    name="instructionDetails"
                                    label="Instruction Details"
                                    value={props.values.instructionDetails}
                                    onChange={props.handleChange}
                                    error={props.touched.instructionDetails && Boolean(props.errors.instructionDetails)}
                                    helperText={props.touched.instructionDetails && props.errors.instructionDetails}
                                />
                                
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

export default ActionCreate
