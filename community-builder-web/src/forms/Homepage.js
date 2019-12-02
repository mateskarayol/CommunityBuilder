import React, {Component} from "react";
import { Link } from "react-router-dom";
import { InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';

class Homepage extends Component {

  constructor(){
    super();

    this.state = {
      keyword : '',
    }
  }

  inputChangeHandler  = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render(){
    return (
      <div>
        <div className="homeBody">
            
            <h2>Attend to a community </h2>
            <br/>
            <InputGroup>
              <Input type = "text" name = "keyword" sm={5} 
                value = {this.state.keyword}   
                onChange = {this.inputChangeHandler} 
                placeholder = "Search community"> </Input>
              <InputGroupAddon addonType="append"><Button color="success">Search</Button></InputGroupAddon>
            </InputGroup>
            
            <br/>
            
            <h2>or</h2>
            <br/>
            <Link to = "/listCommunities" color="secondary">List Communities</Link>  
            <br/>
            <Link to = "/createCommunity" color="secondary">Create New Community</Link>  
        
        </div>   
      </div>    
    );
  }
}


export default Homepage;