import React from 'react';
import { Typography, Grid, Box, Button, TextField } from '@material-ui/core'
import { Formik , Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
// import InputField from '../../components/Inputs/InputField'
// import InputSelect from '../../components/Inputs/InputSelect'
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
    number : '',
    symbol : '',
    url : '',
    option : ''

  }
  const validationSchema = Yup.object({
    name : Yup.string().required("Required"),
    type : Yup.string().required("Required"),
    number : Yup.string().required("Required"),
    symbol : Yup.string().required("Required"),
    url : Yup.string().required("Required"),
    option : Yup.string().required("Required"),
  })

  const onSubmit = values => {
    console.log("Form data" , values)
  }

function PredicateCreate() {
    const classes = useStyles();
    return (
        <div align="left" className={classes.formContainer}>
            <Typography variant="h4" component="h4" className={classes.subTitle} color="textSecondary">
                Add Predicate
            </Typography>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {(props) => (
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
                                    id="type"
                                    name="type"
                                    label="Type"
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
                                id="number"
                                name="number"
                                label="Number"
                                value={props.values.number}
                                onChange={props.handleChange}
                                error={props.touched.number && Boolean(props.errors.number)}
                                helperText={props.touched.number && props.errors.number}
                            />
                                {/* <InputField label="Size" type="number"/> */}
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="symbol"
                                name="symbol"
                                label="Symbol"
                                value={props.values.symbol}
                                onChange={props.handleChange}
                                error={props.touched.symbol && Boolean(props.errors.symbol)}
                                helperText={props.touched.symbol && props.errors.symbol}
                            />
                            {/* <InputField label="Symbol" /> */}
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="url"
                                name="url"
                                label="Url"
                                value={props.values.url}
                                onChange={props.handleChange}
                                error={props.touched.url && Boolean(props.errors.url)}
                                helperText={props.touched.url && props.errors.url}
                            />
                                {/* <InputField label="URL" type="text"/> */}
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="option"
                                name="option"
                                label="Option"
                                value={props.values.option}
                                onChange={props.handleChange}
                                error={props.touched.option && Boolean(props.errors.option)}
                                helperText={props.touched.option && props.errors.option}
                            />
                            {/* <InputField label="Option" /> */}
                            </Grid>
                        </Grid>
                        <Box display="flex" mt={3}>
                            <Button type="submit" variant="contained" color="primary">Save Predicate</Button>
                        </Box>
                        
                    </form>
                )}
            </Formik>
            
        </div>
    )
}

export default PredicateCreate
