import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import ContryPicker from './ContryPicker'
import CoronaImage from './image.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "white",
    padding: 30,
    flexGrow: 5,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 1,
    borderRadius: 3,
    color: 'white',
    height: 5,
    padding: '20px 30px',
 
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header({handleCountryChange}) {

    
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" style= {{backgroundColor: "#34495E"}}>
        <Toolbar>
  
          <Typography className={classes.title} variant="h6" noWrap>
                               COVID-19 Tracker
          </Typography>
          <div className={classes.search}>
                        <ContryPicker handleCountryChange = {handleCountryChange} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}