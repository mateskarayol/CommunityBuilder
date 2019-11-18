import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Input} from 'reactstrap';

class Homepage extends Component {

  constructor(){
    super();

    this.state = {
      searchKey : '',
    }
  }

  inputChangeHandler  = event => {

  }

  render(){
    return (
      <div>
        <div className="homeBody">
            
            <h2>Attend to a community </h2>
            <br/>
           
            <Input type = "text" name = "name" sm={5} 
              value = {this.state.searchKey}   
              onChange = {this.inputChangeHandler} 
              placeholder = "Search community"> </Input>
            <br/>
            
            <h2>or</h2>
            <br/>
            
            <Link to = "/createCommunity" color="secondary">Create New Community</Link>  
        
        </div>   
      </div>    
    );
  }
}


export default Homepage;