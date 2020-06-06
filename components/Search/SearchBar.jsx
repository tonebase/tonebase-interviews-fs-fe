import * as React from 'react'
import {view} from 'react-easy-state'

import {Button, InputBase} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import styles from './styles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: "10%"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    searchPaper: {
        minHeight: "40px",
        color: theme.palette.text.secondary,
        borderStyle: "solid",
        borderColor: "#ececec",
        borderWidth: "1px",
        borderRadius: "25px",
        
    },
    searchBar: {
        width: "80%",
    },
    searchIcon: {
        verticalAlign: "middle",

        marginRight: "10px"
    },
    micIcon: {
        verticalAlign: "middle"
    },
    actionButton: {
        margin: "10px",
        color: "#585858",
        textTransform : "None",
        backgroundColor: "#F0F0F0",
        fontFamily: "Arial",
        


    }
  }));

const SearchBar = ({query, searchFunction}) => {
    const classes = useStyles();

    return(

        <div>
        <Grid container spacing={0}>
            <Grid item xs={2}/>
            <Grid item xs={8}>
                <Paper elevation = {0} className={classes.searchPaper}>
                    <SearchIcon className = {classes.searchIcon}/>
                    <InputBase 
                        id = "input" 
                        name = "input"
                        className = {classes.searchBar}
                        onChange = {(e) => {console.log("query:",query); query = e.target.value}}
                        onKeyDown = {(e)=> {
                            if(e.key == "Enter"){
                                console.log("hello")
                                searchFunction(query)
                            }
                        }
                        }/>
                    <MicIcon className = {classes.micIcon}/>
                </Paper>
            </Grid>
            <Grid item xs={2}/>
        </Grid>
      </div>
        
    )
} 

const Searchpage = (props) => {
    const classes = useStyles();

    return(

        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item className = {classes.paper} xs={12}/>
            <Grid item className = {classes.paper} xs={12}>
                <img src = {props.logo}/>
            </Grid>
            <Grid item className = {classes.paper} xs={12}>
                <SearchBar
                query = {props.query} 
                searchFunction = {props.searchFunction}/>
            </Grid>
            <Grid item className = {classes.paper} xs={12}>
                <Button disableElevation className = {classes.actionButton} variant="contained">Google Search</Button>
                <Button disableElevation className = {classes.actionButton} variant="contained">I'm Feeling Lucky</Button>
            </Grid>
        </Grid>
        </div>
        
    )
}

export default view(Searchpage)