import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton,Typography, InputBase,Paper,Popper,MenuItem, MenuList,Button, Avatar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MoreIcon from '@material-ui/icons/MoreVert';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {Link} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    marginLeft: '1rem',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navStyle : {
    color : 'white'
  },
  menuStyle : {
    color : "rgba(0, 0, 0, 0.54)",
    textDecoration: "none"
  }
}));

export default function Navigation() {
  const classes = useStyles();
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          
        <Avatar alt="Remy Sharp" src="/logo_small.png" className="mr-1"/>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link className={classes.navStyle} to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
            <Link className={classes.navStyle} to="/workplaces">
              <Button color="inherit"
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              endIcon={<KeyboardArrowDownIcon/>}
            >Workplaces</Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                         <Link className={classes.menuStyle} to="/tangibles"><MenuItem onClick={handleClose}>Tangibles</MenuItem></Link>
                         <Link className={classes.menuStyle} to="/configurables"><MenuItem onClick={handleClose}>Configurables</MenuItem></Link>
                         <Link className={classes.menuStyle} to="/triggers"><MenuItem onClick={handleClose}>Triggers</MenuItem></Link>
                         <Link className={classes.menuStyle} to="/sensors"><MenuItem onClick={handleClose}>Sensors</MenuItem></Link>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  
                )}
              </Popper>
            
            </Link>
          <Link className={classes.navStyle} to="/activities"><Button color="inherit">Activities</Button></Link>
          <Link className={classes.navStyle} to="/learners"><Button color="inherit">Learners</Button></Link>
          <Link className={classes.navStyle} ><Button color="inherit">Sign Out</Button></Link>
          
          
          

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              
              aria-haspopup="true"
              
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
