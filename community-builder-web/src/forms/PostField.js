
import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';


const PostField = ({ idx, postFieldArr, postFieldChangeHandler, postFieldDeleteHandler }) => {

    let reqId = 'req-$(idx)', lblId = 'lbl-$(idx)', typId='typ-$(idx)', expId ='exp-$(idx)'

    return (
        <FormGroup row>
            <Col sm={2}>
                <Input type = "checkbox" 
                    data-id = {idx}
                    data-name = "required"
                    name = {reqId} 
                    value = {postFieldArr[idx].required}
                    onChange = {postFieldChangeHandler} 
                    className = "centeredCheck"></Input>
            </Col>
            <Col sm={3}>    
                <Input  type = "text" 
                    data-id = {idx}
                    data-name = "fieldLabel"
                    name = {lblId}
                    value = {postFieldArr[idx].fieldLabel}
                    onChange = {postFieldChangeHandler} ></Input>
            </Col>
            <Col sm={3}>    
                <Input type = "select" 
                    data-id = {idx}
                    data-name = "fieldType"
                    name = {typId} 
                    value = {postFieldArr[idx].fieldType}
                    onChange = {postFieldChangeHandler}  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </Input>
             </Col>
            <Col sm={3}>
                <Input type = "text" 
                    data-id = {idx}
                    data-name = "explanation"
                    name = {expId} 
                    value = {postFieldArr[idx].explanation}
                    onChange = {postFieldChangeHandler}  >
                </Input>
            </Col>
            <Col sm={1}>
                <Button  
                    data-id = {idx}
                    onClick = {postFieldDeleteHandler}  >
                Remove</Button>
            </Col>
        </FormGroup>
      );
};

PostField.propTypes = {
    idx : PropTypes.number,
    postFieldArr : PropTypes.array,
    postFieldChangeHandler : PropTypes.func,
};

export default PostField;