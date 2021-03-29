import { Button, Grid } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'

function EntityTabs() {
    return (
        <Grid container>
            <Grid item>
                <Link to="/workplaces">
                    <Button color="primary">Workplaces</Button>
                </Link>
            </Grid>
            <Grid item>
                <Link to="/tangibles">
                    <Button color="primary">Tangibles</Button>
                </Link>
            </Grid>
            <Grid item>
                <Link to="/configurables">
                    <Button color="primary">Configurables</Button>
                </Link>
            </Grid>
            <Grid item>
                <Link to="/triggers">
                    <Button color="primary">Triggers</Button>
                </Link>
            </Grid>
            <Grid item>
                <Link to="/sensors">
                    <Button color="primary">Sensors</Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default EntityTabs
