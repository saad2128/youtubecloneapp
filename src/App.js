import React from 'react';

import {Grid} from '@material-ui/core';

import {SearchBar,VideoDetail,VideoList} from './components';


import youtube from './API/youtube';

class App extends React.Component{

    state={
        videos:[],
        selectedVideo:null,
    }

    componentDidMount(){
        this.handleSubmit('tech tology');
    }

    onVideoSelect =(video) =>{
    this.setState({selectedVideo:video});
    }

    handleSubmit = async (searchTerm) =>{
    const response =await youtube.get('search',{
        params:{
            part:'snippet',
            maxResults:5,
            key:'AIzaSyD_MegOkCmANsEe5VNqUFuS_Br-r2vrIc0',
            q:searchTerm,  
        }
    
    
    });
    this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
    
   
    }

    render(){
        //structuring
        const {selectedVideo,videos}=this.state;

        return(
            <Grid  justify='center' container spacing={10}>
                <Grid item xs={11}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                           <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                           <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        )
    }
}


export default App;