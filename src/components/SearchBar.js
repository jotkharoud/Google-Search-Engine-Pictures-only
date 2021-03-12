import React from 'react'


class SearchBar extends React.Component{
   state = { term : ''}

   onFormSubmit = e =>{
       e.preventDefault() //we are preventing the form to submit automatically
      
       this.props.onSubmit(this.state.term)
   }

// event = e in line 14
    render(){
        return(

            <div className = "ui segment">
                <form onSubmit = {this.onFormSubmit} className = "ui form">
                    <div className = "field">
                        <label className =" ui label"> Image Search</label>
                <input  type = "text"  
                value = {this.state.term}
                onChange = { e => this.setState({term : e.target.value})} />
                </div>
                </form>
            </div>
        )
    }
}

export default SearchBar