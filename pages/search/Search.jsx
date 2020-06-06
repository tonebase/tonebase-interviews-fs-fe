import * as React from 'react'

import { view } from "react-easy-state";

import {Navbar, Searchbar, Footer} from 'components/Search'
import {PageStore} from 'stores'


class Search extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){

        console.log("PageStore: ", PageStore)
        return(
            
            
            <div>
                <Navbar/>
                <Searchbar 
                query = {PageStore.query}
                logo = {'static/images/google.png'}
                searchFunction = {PageStore.search}/>
                <Footer/>
            </div>
            
        )
        
    }
}

export default view(Search)