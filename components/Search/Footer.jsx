import React from 'react';
import {view} from 'react-easy-state'

import { makeStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import {Button} from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 60,
    textAlign: 'center'
  },
  menuButton: {
    fontFamily: "Arial",
    color: "#585858",
    textTransform : "None",
    '&:hover': {
        textDecoration: 'underline',
        backgroundColor: "transparent",
    }
    
  },
  containeButton:{
    
  },
  title: {
    justifyContent: "left",
    flexGrow: .9,
  },

  toolbar: {
    minHeight: 0,
    bottom: 0,
    width: '100%',
    position: 'fixed',
    background: '#e8e8e8',
    
    
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      
        <Toolbar className = {classes.toolbar}>
        <Button href = {"https://ads.google.com"} className = {classes.menuButton}>Advertising</Button>
        <Button href = {"https://smallbusiness.withgoogle.com/"} className = {classes.menuButton}>Business</Button>
        <Button href = {"https://www.google.com/search/howsearchworks/?fg=1"} className = {classes.menuButton}>How Search works</Button>
        <span className = {classes.title}/>
        <Button href = {"https://policies.google.com/privacy?fg=1"} className = {classes.menuButton}>Privacy</Button>
        <Button href = {"https://policies.google.com/terms?fg=1"} className = {classes.menuButton}>Terms</Button>
        <Button href = {"https://www.google.com/preferences?hl=en"} className = {classes.menuButton}>Settings</Button>
        </Toolbar>
      
    </footer>
  );
}

export default view(Footer);