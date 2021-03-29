import React from 'react'
import {Dialog, DialogActions, DialogContent, DialogTitle,  Grid, Button} from '@material-ui/core'
import InputField from '../../components/Inputs/InputField'
import InputSelect from '../../components/Inputs/InputSelect'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  
    root : {
        '& .MuiDialog-paperWidthSm' : {
            width:"510px"
        }
    }
      
}));


function Operations() {
    const classes = useStyles();
    return (
        <div>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="sm"
                className={classes.root}
                //   onEntering={handleEntering}
                aria-labelledby="confirmation-dialog-title"
                open={true}
                
                >
                <DialogTitle id="confirmation-dialog-title">Preferences </DialogTitle>
                <DialogContent dividers>
                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <InputSelect label="Activate / Deactivate" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputSelect label="Type" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <InputSelect label="Entity" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputSelect label="Viewport" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <InputSelect label="Predicate" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <InputSelect label="POI" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <InputField label="Options" error=" " />
                        </Grid>
                    </Grid>
                </form>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus  color="primary">
                    Close
                    </Button>
                    <Button variant="contained" color="primary">
                    Save
                    </Button>
                </DialogActions>
            </Dialog>
            
        </div>
    )
}

export default Operations
