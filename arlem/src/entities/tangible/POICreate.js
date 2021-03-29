import { Card, CardContent, CardHeader, Typography, Box, IconButton,Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  center: {
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
  },
    poiHeader : {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:'2rem'
    },
    emptyState : {
        width:'360px',
        textAlign:'center',
        padding:'2rem',
        '& .MuiTypography-h4' : {
            fontSize: '26px'
        },
        
    },

    description : {
        margin: '1em 0',
            fontSize: '16px',
            lineHeight: '24px',
    }
    
}));

function POICreate() {
    const classes = useStyles();
    return (
        <div>
            <Card >
                <CardContent>
                    <div className={classes.poiHeader}>
                        <Typography variant="h5" component="h5" color="textSecondary">Point of Interest</Typography>
                        <IconButton variant="contained" color="primary">
                            <i className="fa fa-plus"></i>
                        </IconButton>
                    </div>
                    {/* <TableContainer >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name </TableCell>
                                    <TableCell>X-Offset  </TableCell>
                                    <TableCell>Y-Offset </TableCell>
                                    <TableCell>Z-Offset </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        abc
                                    </TableCell>
                                    <TableCell>
                                        1
                                    </TableCell>
                                    <TableCell>
                                        2
                                    </TableCell>
                                    <TableCell>
                                        3
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer> */}
                    <div className={classes.center}>
                        <Box className={classes.emptyState} alignSelf="center">
                            <Typography variant="h4" component="h4">No POI found</Typography>
                            <Typography variant="p" component="p" className={classes.description}>No point of intrests found. Add a new point of interest in this thing form button on top right.</Typography>
                        </Box>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default POICreate
