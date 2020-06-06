import React from 'react';
import {view} from 'react-easy-state'

import {makeStyles} from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import {Button} from '@material-ui/core/';
import AppsIcon from '@material-ui/icons/Apps';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    fontFamily: "Arial",
    fontSize: "13px",
    color: "#303030",
    textTransform : "None",
    '&:hover': {
        textDecoration: 'underline',
        backgroundColor: "transparent",
    }
  },
  containedButton:{
    fontFamily: "Arial",
    fontSize: "13px",
    textTransform : "None",
    variant: "contained",
    color: "white",
    backgroundColor: "#2196f3",
    '&:hover': {
        backgroundColor: "#2196f3",
    }
  },
  title: {
    justifyContent: "left",
    flexGrow: 1,
    
  },

  toolbar: {
    minHeight: "0px"
  }
}));

function SearchNavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
        <Toolbar className = {classes.toolbar}>
        <Button className = {classes.menuButton}
            href = {"https://about.google"}
        >
            About
        </Button>
        <Button href = {"https://store.google.com"} className = {classes.menuButton}>Store</Button>
        <span className = {classes.title}/>
        <Button className = {classes.menuButton}>Gmail</Button>
        <Button className = {classes.menuButton}>Images</Button>
        <Button className = {classes.menuButton}><AppsIcon/></Button>
        <Button disableElevation className = {classes.containedButton}> <b>Sign In</b></Button>
        </Toolbar>
      
    </div>
  );
}

export default view(SearchNavbar);