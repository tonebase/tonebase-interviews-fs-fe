
import { makeStyles } from '@material-ui/core/styles';

const styles = {

    navbar: makeStyles((theme) => ({
        root    : {
          flexGrow: 1,
          
        },
        menuButton: {
          fontFamily: "Arial",
          
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
      })),
      
    searchbar: makeStyles((theme) => ({
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
      })),
    

      footer: makeStyles((theme) => ({
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
      }))
      
}

export default styles