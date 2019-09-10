import React from 'react'
import {Paper,TextField} from '@material-ui/core';

class SearchBar extends React.Component{
    state={
        SearchTerm:'',
    }

    handleChange = (event) => {
        this.setState({SearchTerm:event.target.value})
    }

    handleSubmit = (event) =>{
        const{SearchTerm} =this.state;
        const{onFormSubmit} =this.props;

        onFormSubmit(SearchTerm);
        
        //to prevent full page refresh
        event.preventDefault();
    }

    render(){
        return(
            <Paper elevation={6} style={{padding:'25px'}}>
                <form onSubmit={this.handleSubmit}> 
                    <TextField fullWidth label="Search.."onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;