import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PostField from './PostField';

class CreatePost extends Component {

    constructor( props ) {
        super();
        //this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.createPostTypeHandler = this.createPostTypeHandler.bind(this);
        this.postTypeComponent = this.postTypeComponent.bind(this);

    
        this.state = {
          
          postType : props.location.props.postType,
          form: {
            name:'',
            explanation:'',
            postFieldSet : [{  
                            required : false,
                            fieldLabel : '',
                            fieldType : '',
                            explanation : '' 
                        }]
          },
          result : ''
        }
      }

    createPostTypeHandler = event => {
    /*
      event.preventDefault();

      let communitydata = this.state.community;
      let postType =  this.state.form;
      communitydata.postTypeSet.push(postType);

    
      const requestbody = {
        "community" :  this.state.community
      }


      const url = "/saveCommunity";

      fetch(url, {  method: "POST", 
                    body: JSON.stringify(requestbody), 
                    headers:{ "Content-Type": "application/json" } 
                  })
                  .then( response => response.json())
                  .then( result => this.setState( { result : result.response.communityName }));
      // result.response buradaki response response objelerinin içerisindeki attribute name  
      
      var message = `Post type is added successfully.` ;

      console.log(message);
*/
    }
/*
    inputChangeHandler = event => {
        // event.target returns the <input/> component 
        // you should merge state !!!!
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          form : {
            ...this.state.form,
            [name]: value
          }
        });
    }

    addNewField = event  => {
        this.setState(
            {
                form : {
                    ...this.state.form,
                    postFieldSet : [ 
                                    ...this.state.form.postFieldSet,
                                    {  
                                        required : false,
                                        fieldLabel : '',
                                        fieldType : 'TEXT',
                                        explanation : '' 
                                    }
                                ]
                }
            }
        );
    }

    postFieldChangeHandler = event => {

        // event.target returns the <input/> component 
        // you should merge state !!!!
        const id = event.target.dataset.id;
        const name = event.target.dataset.name;
        const value = event.target.value;

        const updatedPostFieldSet = [...this.state.form.postFieldSet];
        updatedPostFieldSet[id][name] = value;

        this.setState({
          form : {
            ...this.state.form,
            postFieldSet : updatedPostFieldSet,       
          }
        });
     
    }

    postFieldDeleteHandler = event => {

        // event.target returns the <input/> component 
        // you should merge state !!!!
        const id = event.target.dataset.id;

        const postFieldSet = [...this.state.form.postFieldSet];

        postFieldSet.splice(id, 1);
    

        this.setState({
          form : {
            ...this.state.form,
            postFieldSet : postFieldSet     
          }
        });   
    }

*/


  postTypeComponent(field) {

    let type = field.fieldType;
    
    switch(type) {
      case 'TEXT':
        return <Input id = {field.fieldLabel} type = "text" 
                      name = {field.fieldLabel} 
                      value = "" 
                      onChange = {this.inputChangeHandler}></Input>;
      case 'NUMBER':
        return <Input id = {field.fieldLabel} type = "number" 
                      name = {field.fieldLabel} 
                      value = "" 
                      onChange = {this.inputChangeHandler}></Input>;
      case 'LOCATION':
        return "";
      case 'IMAGE':
          return "";
      case 'CHOICE':
        return "";
      default:
        return null;
    }
  }

  render(){

    let postType = this.state.postType;
    let postFieldSet = this.state.postType.postFieldSet;
    
    /* postFieldSet : [{  
      required : false,
      fieldLabel : '',
      fieldType : '',
      explanation : '' 
  }] */


    return (
        <Form onSubmit =  {this.createPostHandler}>

          <FormGroup row>
            <Label  sm={6} size="lg">{postType.name}</Label>
            <Label  sm={6} size="md">{postType.explanation}</Label>
          </FormGroup>

          {
              postFieldSet.map((val, idx) =>  (
                <FormGroup row>
                  <Label sm={4} size="md"> {postFieldSet[idx].fieldLabel} </Label>
                  <Col sm={8}>
                    {this.postTypeComponent(postFieldSet[idx])}
                  </Col>
                </FormGroup>
              ))  
          }

          <Button color = "success" >Create Post</Button>  
        </Form>
  
      );
  }
}
export default CreatePost;






