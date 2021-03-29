import { Card, CardContent, Input, Typography,Grid, Table, TableHead, TableBody, TableRow, TableCell, Checkbox, IconButton, Box, Button } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import React from 'react'
import DataTable from '../../components/DataGrid'
import EntityTabs from '../../theme/components/EntityTabs'
import Header from '../../theme/components/Header'
import Navigation from '../../theme/components/Navigation'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

  root : {
    marginTop:'2rem',
    padding: '1rem',
    "&.MuiPaper-elevation1" : {
        boxShadow:'none',
        border: '1px solid rgba(0, 0, 0, 0.12)'
    }
  }  ,
 
  center: {
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      paddingTop:'2rem',
      
      
  },
  tableContainer : {
        marginTop:'2rem',
    },
    padding : {
        padding:'2rem'
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

function Configurable() {
    const classes = useStyles();
    return (
        <div>
            
            <Header title="Configurable" description="Configurables are the physical objects present within the workplace. These objects are used / required to complete the activity." buttonText="Create Configurable"/>
            <div className={classes.padding}>
            <EntityTabs/>
            <Card className={classes.root}> 
                <CardContent>
                <div>
                    <Grid container>
                        <Grid item xs={7} align="left">
                        <Typography variant="h6" component="h6" color="textSecondary" >Configurable</Typography>
                        </Grid>
                        <Grid item xs={5}>
                        <Input type="search" placeholder="Search by name..." fullWidth="true" />
                        </Grid>
                    </Grid>
                    {/* <Table className={classes.tableContainer}>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox></Checkbox>
                                </TableCell>
                                <TableCell>
                                    Z
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Type
                                </TableCell>
                                <TableCell>
                                    Detectable
                                </TableCell>
                                <TableCell>
                                    Author
                                </TableCell>
                                <TableCell>
                                    Created
                                </TableCell>
                                <TableCell>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        <TableRow>
                            <TableCell>
                                <Checkbox></Checkbox>
                            </TableCell>
                            <TableCell>
                                Z
                            </TableCell>
                            <TableCell>
                                John
                            </TableCell>
                            <TableCell>
                                Person
                            </TableCell>
                            <TableCell>
                                Z
                            </TableCell>
                            <TableCell>
                                John
                            </TableCell>
                            <TableCell>
                            March 23rd 2021
                            </TableCell>
                            <TableCell>
                                <IconButton>
                                    <i className="fa fa-pencil"></i>
                                </IconButton>
                                <IconButton>
                                    <i className="fa fa-trash"></i>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        </TableBody>
                    </Table> */}
                    <div className={classes.center}>
                        <Box className={classes.emptyState} alignSelf="center">
                            <Typography variant="h4" component="h4">No Configurable found</Typography>
                            <Typography variant="p" component="p" className={classes.description}>Try a different search term or create a new Configurable.</Typography>
                            <Button variant="contained" color="primary">Create New Configurable</Button>
                        </Box>
                    </div>
                    
                    
                </div>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}

export default Configurable
