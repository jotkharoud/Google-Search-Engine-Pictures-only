import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component{

    state = {images : [] }   // it is safer to use array , it will eventually to be an array 
    
     onSearchSubmit = async (term) =>{
     const response = await unsplash.get('/search/photos' , {
            params: { query : term},   //we have to define query in case what you are searching
            //i am taking headers properties to another folder to avoid conflictions,just a choice but not a good practice to put everything in class based components
        })
       this.setState({ images : response.data.results})
    }
  

   render(){
    return(
        <div className =" ui container" style = {{ marginTop : '10px'}}>
      <SearchBar  onSubmit = {this.onSearchSubmit}/>
       <ImageList images={this.state.images} />
      </div>
    )
}}

  

export default App