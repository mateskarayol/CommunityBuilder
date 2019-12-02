import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, ListGroup,ListGroupItem } from 'reactstrap';
import BasicModal from './BasicModal';
import CreatePostType from './CreatePostType';

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
    this.clearState = this.clearState.bind(this);

    this.state = {
      form: {
        communityName:'',
        communityDescription:'',
        bannerPic : '',
        postTypeSet : [
          {
            name : 'Basic Post',
            explanation : 'Basic post for general purposes',
            postFieldSet : [
                                {
                                  required : false,
                                  fieldLabel : '',
                                  fieldType : 'TEXT',
                                  explanation : ''
                                }
                              ]
          }
        ],
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

  clearState(){
    this.setState({
      form: {
        communityName:'',
        communityDescription:'',
        bannerPic:'',
        postTypeSet : []
      }
    });
  }

  savePostTypeHandler = form => {
    
    this.setState({
      
        form: {
          ...this.state.form,
          postTypeSet : [
            ...this.state.form.postTypeSet,
            {
              name : form.postTypeName,
              explanation : form.postTypeDesc,
              postFieldSet : form.postFields
            }
          ],
        },
        createPost : false

    });

  }

  createCommunityHandler = event => {
    
    event.preventDefault();
    const communitydata = {
      "community" :  {
        "name" : this.state.form.communityName,
        "explanation" : this.state.form.communityDescription,
        "bannerPic" : this.state.form.bannerPic,
        "postTypeSet" : this.state.form.postTypeSet
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
    
    var message = `Community is created successfully.` ;

    console.log(message);
    this.setState( { result: message , showMessage : true }) ;
    this.clearState();
  }

  toggle() {
    this.setState({
      showMessage: !this.state.showMessage
    });
  }

  addPostType = event => {
    this.setState({
      createPost : true
    });
  }


  render(){

    let postTypeSet = this.state.form.postTypeSet;

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
          <Label for = "bannerPicInp" sm={4} size="md">Picture</Label>
          <Col sm={8}>
            <Input id = "bannerPicInp" type = "text" name = "bannerPic" value = {this.state.form.bannerPic} onChange = {this.inputChangeHandler}></Input>
          </Col>
        </FormGroup>
        
        
        <FormGroup row>
          <Label  sm={12} size="lg">Post Type List</Label>

          { postTypeSet !== '' &&
            <ListGroup>
              {
                postTypeSet.map((val, idx) =>  (
                  <ListGroupItem className = "leftList" id = {idx} > {postTypeSet[idx].name} </ListGroupItem>
                ))
              }

            </ListGroup>
          }
        </FormGroup>

        <FormGroup row>
          <Col sm={12}>
            <Button onClick = {this.addPostType} > Add  New Post Type </Button>
          </Col>
        </FormGroup>

        { this.state.createPost && <CreatePostType savePostTypeHandler = {this.savePostTypeHandler} /> }
        <Button color = "success" >Create Community</Button>  

      </Form>
      { this.state.showMessage && <BasicModal isOpen={true} message={this.state.result} 
                                              modalTitle ="Info" toggle = {this.toggle}/> }
    </div>
    );
  }
}

export default CreateCommunityForm;

