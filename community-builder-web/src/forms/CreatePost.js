import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';
import LocationPicker from 'react-location-picker';
import ImageUploader from 'react-images-upload';
import ReactTags from 'react-tag-autocomplete'


class CreatePost extends Component {

    constructor( props ) {
        super();
        
        /* Bindings */
        this.createPostHandler = this.createPostHandler.bind(this);
        this.createPostTypeComponentHandler = this.createPostTypeComponentHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.dateChangeHandler = this.dateChangeHandler.bind(this);
        this.timeChangeHandler = this.timeChangeHandler.bind(this);
        this.locationChangeHandler = this.locationChangeHandler.bind(this);
        this.imageChangeHandler = this.imageChangeHandler.bind(this);
        this.choiceAddHandler = this.choiceAddHandler.bind(this);
        this.choiceDeleteHandler = this.choiceDeleteHandler.bind(this);
        this.redirectToCommunityHome = this.redirectToCommunityHome.bind(this);
        
        /* State */
        this.state = {
          
          postType : props.location.props.postType,
          communityId : props.location.props.communityId,
          form: {
              post : {
                      postTypeId : '',
                      fieldValueMap :  {
                                        fieldLabel : '',
                                        fieldValue : '',
                                      }
                      }
                },
          pictures: [],
          result : ''
        }
      }

    // To save post
    createPostHandler = event => {
      event.preventDefault();
      const a = this.state.form;
      console.log(a);

      const postData = this.state.form;
  
      const url = "/savePost"
  
      fetch(url, {  method: "POST", 
                    body: JSON.stringify(postData), 
                    headers:{ "Content-Type": "application/json" } 
                  })
                  .then( response => response.json())
                  .then( result  => {  this.setState({
                                                  ...this.state,
                                                  form : result.response.post
                                              });
                                  this.redirectToCommunityHome();
                                }
                  );
      // result.response buradaki response response objelerinin içerisindeki attribute name  
      
      var message = `Community is created successfully.` ;
  
      console.log(message);
      this.setState( { result: message , showMessage : true }) ;






    }
    redirectToCommunityHome (){
      this.setState({
        ...this.state,
        showCommunityHome : true
      })
    }
  
    imageChangeHandler(picture) {
      this.setState({
          pictures: this.state.pictures.concat(picture),
      });
    }

 

  /*-------------------------------*/
  /* Input Handlers                */
  /*-------------------------------*/

  inputChangeHandler = event => {
    // event.target returns the <input/> component 
    // you should merge state !!!!
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      form : {
        ...this.state.form,
        post : {
          ...this.state.form.post,
          fieldValueMap : {
            [name]: value,
          }
        }
      },
      result : ''
    });
  }

  dateChangeHandler = event => {

  }

  timeChangeHandler = event => {
    
  }

  locationChangeHandler = event => {
    
  }

  imageChangeHandler = event => {
    
  }
  
  choiceDeleteHandler = event => {
    
  }

  choiceAddHandler = event => {
    
  }



  createPostTypeComponentHandler(field) {

    let type = field.fieldType;
    let valueId = `this.state.form.post.postFieldSet.${field.fieldKey}`;
    
    /*--------------------------------------------*/
    /* Constant values for components             */
    /*--------------------------------------------*/
    const startDate = new Date();
    const defaultPosition = {
      lat: 27.9878,
      lng: 86.9250
    };

    /*-------------------------------------------*/
    /* Return different components based on type */
    /*-------------------------------------------*/
    switch(type) {
      case 'TEXT':
        return <Input id = {field.fieldKey} type = "text" 
                      name = {field.fieldKey} 
                      value = {this.state.form.post.fieldValueMap[field.fieldKey]} 
                      onChange = {this.inputChangeHandler}></Input>;
      case 'NUMBER':
        return <Input id = {field.fieldKey} type = "number" 
                      name = {field.fieldKey} 
                      value = {valueId}
                      onChange = {this.inputChangeHandler}></Input>;
      case 'DECIMAL':
        return <Input id = {field.fieldKey} type = "number" 
                      name = {field.fieldKey} 
                      value = {valueId}
                      onChange = {this.inputChangeHandler}></Input>;
      case 'DATE':
        return  <DatePicker
                      showPopperArrow={false}
                      selected = {startDate}
                      onChange={this.dateChangeHandler}
                    />;
      case 'TIME':
        return <DatePicker
                      selected={startDate}
                      onChange={this.timeChangeHandler}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
      case 'LOCATION':
        return (<div>
                  <LocationPicker
                      containerElement={ <div style={ {height: '100%'} } /> }
                      mapElement={ <div style={ {height: '400px'} } /> }
                      defaultPosition={defaultPosition}
                      onChange={this.locationChangeHandler}
                  />
                </div>);
      case 'URI':
          return <Input id = {field.fieldKey} type = "text" 
                      name = {field.fieldKey} 
                      value = {valueId} 
                      onChange = {this.inputChangeHandler}></Input>;
      case 'IMAGE':
            return <ImageUploader
                      withIcon={true}
                      buttonText='Choose images'
                      onChange={this.imageChangeHandler}
                      imgExtension={['.jpg', '.gif', '.png', '.gif']}
                      maxFileSize={5242880}
                  />;
      case 'CHOICE':
        return  <div>
                    <Input id = {field.fieldKey} type = "text" 
                      name = {field.fieldKey} 
                      value = {valueId} 
                      onChange = {this.inputChangeHandler}></Input>;;
                    <ReactTags
                      tags={this.state.tags}
                      suggestions={this.state.suggestions}
                      handleDelete={this.choiceDeleteHandler.bind(this)}
                      handleAddition={this.choiceAddHandler.bind(this)} />
                </div>;
      default:
        return null;
    }
  }

 
  render(){

    let postType = this.state.postType;
    let postFieldSet = this.state.postType.postFieldSet;
    
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
                    {this.createPostTypeComponentHandler(postFieldSet[idx])}
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






