import React, { Component } from 'react';
import { Row, Col, Button, Card, CardTitle, CardText, Form, FormGroup, Label,Input} from 'reactstrap';


class ListCommunitiesForm extends Component {
  /*
    - the value of the name attribute on each input must be the same 
      with the state name declared in the formControls in the constructor. 

  */
  constructor() {
    super();
    
    this.state = {
      criteria : {
          inCommunityName : '',
          inCommunityDescription : ''
      },
      result : {
          communityName : '',
          communitDescription : ''
      }
    }
  }

  inputChangeHandler = event => {
    // event.target returns the <input/> component 
    // you should merge state !!!!
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      criteria : {
        ...this.state.criteria,
        [name]: value
      }
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
  }

  render(){
    return (
        <Form>
            <FormGroup row>
                <Label for = "inCommunityNameInp" sm={12} size="lg">Search Community</Label>
            </FormGroup>
            <FormGroup row>
                <Label for = "inCommunityNameInp" sm={4} size="md">By name</Label>
                <Col sm={8}>
                    <Input id = "inCommunityNameInp" type = "text" name = "inCommunityName" value = {this.state.criteria.inCommunityName} onChange = {this.inputChangeHandler}></Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label sm={4} size="md">By description</Label>
            </FormGroup>
            <FormGroup row>
                <Col sm={8}>
                    <Input id = "inCommunityDescInp" type = "textarea" name = "inCommunityDescription" value = {this.state.criteria.inCommunityDescription} onChange = {this.inputChangeHandler}></Input>
                </Col>
            </FormGroup>
            <Button color = "success" >Search</Button>{' '}
            <Row>
                <Col sm="6">
                    <Card>
                        <CardTitle> {this.state.result.communityName} </CardTitle>
                        <CardText> {this.state.result.communityDescription} </CardText>
                        <Button>Join</Button>
                    </Card> 
                </Col>
            </Row>
        </Form>
    );
  }
}

export default ListCommunitiesForm;

