import { Grid, Typography , Button} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
    root: {
        padding:'2.5rem',
        backgroundColor : '#009d88',
      },

      title : {
        display:'block',
        margin: 0,
        color: 'white',
        fontSize: '50px',
        display: 'block',
        lineHeight: '1em',
        
      },
      subtitle : {
        color: 'white',
        marginTop:0,
        fontSize:'30px',
        fontWeight:100,
        marginBottom:'30px',
        whiteSpace: 'inherit',
        marginTop:'1rem',
        lineHeight:'40px'
      }
      
}));

function Header({title, description, buttonURL, buttonText}) {
    const classes = useStyles();
    return (
        <Grid container align="left" className={classes.root} alignItems="center">
            <Grid item xs={12} md={10}>
                <Typography variant="h1" component="h1" className={classes.title}>
                    {title}
                </Typography>
                <Typography variant="subtitle-2" component="p" className={classes.subtitle}>
                    {description}
                </Typography>
            </Grid>
            <Grid item xs={12} md={2} align="right">
                <Button variant="contained" color="default">{buttonText}</Button>
            </Grid>
        </Grid>
    )
}

export default Header;
