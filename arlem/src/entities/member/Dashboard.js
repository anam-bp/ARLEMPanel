import { Card, CardContent, CardHeader, Grid , Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:'2rem',
        textAlign:'left'
      }
      
}));

function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            
            <Grid container spacing={3}> 
                <Grid item xs={12}>
                    <Typography variant="h3" component="h3" align="left" gutterBottom>
                        Dashboard
                    </Typography>
                    <Typography variant="h6" component="h6" align="left" gutterBottom>
                        An overview of everything present in ARLEM Panel
                    </Typography>
                </Grid>
                
                <Grid item  xs={12} sm={4}>
                    <Card>
                        <CardHeader title="Workplaces" subheader="Everything that is present in the environment of system under consideration"/>
                        <CardContent>
                            <Typography variant="h2" component="p" align="right">
                                0
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item  xs={12} sm={4}>
                <Card>
                    <CardHeader title="Activites" subheader="All the activites that can be performed in the order to achieve a goal."/>
                    <CardContent>
                        <Typography variant="h2" component="p" align="right">
                            0
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid item  xs={12} sm={4}>
                <Card>
                <CardHeader title="Entities" subheader="All the entities like triggers, tangibles, configurables and sensors."/>
                <CardContent>
                    <Typography variant="h2" component="p" align="right">
                        0
                    </Typography>
                </CardContent>   
                </Card>
                </Grid>
            </Grid>

        </div>
    )
}

export default Dashboard
