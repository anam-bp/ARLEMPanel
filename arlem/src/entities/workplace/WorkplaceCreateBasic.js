import { Typography, Grid, Button, Box, TextField, MenuItem } from '@material-ui/core'
import React from 'react'
import * as Yup from 'yup'
import PersonCreate from '../tangible/PersonCreate'
import { makeStyles } from '@material-ui/core/styles';
import Operations from '../action/Operations'
import { Formik } from 'formik';
import InputSelect from '../../components/Inputs/InputSelect';
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
    category : ''
  }
  const validationSchema = Yup.object({
    name : Yup.string().required("Required"),
    category : Yup.string().required("Required"),
  })

  const onSubmit = values => {
    console.log("Form data" , values)
  }

function WorkplaceCreateBasic() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Workplace Details
            </Typography>
            <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                {(props) => (
                    <form className={classes.formStyles} onSubmit={props.handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField label="Name" 
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
                                <InputSelect  label="Category"/>
                            </Grid>
                        </Grid>
                        <Box display="flex" mt={3}>
                            <Button type="submit" variant="contained" color="primary">Start Adding Items</Button>
                        </Box>
                        
                    </form>
                )}
            </Formik>
            
        </div>
    )
}

export default WorkplaceCreateBasic
