import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import BasicModal from './BasicModal';

class CreateCommunityForm extends Component {
  /*
    - the value of the name attribute on each input must be the same 
      with the state name declared in the formControls in the constructor. 

  */
  constructor() {
    super();
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.createCommunityHandler = this.createCommunityHandler.bind(this);
    this.toggle = this.toggle.bind(this);


    this.state = {
      form: {
        communityName:'',
        communityDescription:''
      },
      result : '',
      showMessage : false
    }
  }

  inputChangeHandler = event => {
    // event.target returns the <input/> component 
    // you should merge state !!!!
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      form : {
        ...this.state.form,
        [name]: value
      },
      result : ''
    });
  }

  createCommunityHandler = event => {
    
    event.preventDefault();
    const communitydata = {
      "community" :  {
        "id" : "7",
        "name" : this.state.form.communityName,
        "explanation" : this.state.form.communityDescription
      }
    }

    const url = "/saveCommunity"

    fetch(url, {  method: "POST", 
                  body: JSON.stringify(communitydata), 
                  headers:{ "Content-Type": "application/json" } 
                })
                .then( response => response.json())
                .then( result => this.setState( { result : result.response.communityName }));
    // result.response buradaki response response objelerinin içerisindeki attribute name  
    
    var message = `${this.state.result}  community is created` ;

    console.log(message);
    this.setState( { result: message , showMessage : true }) ;
  }

  toggle() {
    this.setState({
      showMessage: !this.state.showMessage
    });
  }


  render(){
    return (
      <div>
      <Form onSubmit =  {this.createCommunityHandler} >
        <FormGroup row>
          <Label  sm={12} size="lg">Create Community</Label>
        </FormGroup>
        <FormGroup row>
          <Label for = "communityNameInp" sm={4} size="md">Community Name</Label>
          <Col sm={8}>
            <Input id = "communityNameInp" type = "text" name = "communityName" value = {this.state.form.communityName} onChange = {this.inputChangeHandler}></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={12} size="md">Smart and brief description displayed in community card.</Label>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
            <Input id = "communityDescInp" type = "textarea" name = "communityDescription" value = {this.state.form.communityDescription} onChange = {this.inputChangeHandler}></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
            <Link to = "/createPostType" color="secondary">Create Post Type</Link>  
          </Col>
        </FormGroup>
      
        <Button color = "success" >Save</Button>        
      </Form>
      { this.state.showMessage && <BasicModal isOpen={true} message={this.state.result} 
                                              modalTitle ="Info" toggle = {this.toggle}/> }
    </div>
    );
  }
}

export default CreateCommunityForm;

