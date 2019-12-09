import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Input, Media, Container, Row, Col, Label} from 'reactstrap';
import CreatePostType from './CreatePostType';


class CommunityHome extends Component {

  constructor(props){
    super();
    this.openCreatePostTypeHandler.bind(this.openCreatePostTypeHandler);
    this.postTypeChangeHandler.bind(this.postTypeChangeHandler);

    this.state = {

      community : props.location.props.community,
      showCreatePostType : false,
      selectedPostType : 0

    }
  }

  openCreatePostTypeHandler  = event => {
    this.setState({
      ...this.state,
      showCreatePostType : true,
      community : JSON.parse(event.target.dataset.community)
    })
  }

  postTypeChangeHandler = event => {
    //const id = event.target.dataset.id;

    let index = event.nativeEvent.target.selectedIndex;
    let fieldId = event.nativeEvent.target[index].dataset.id
    let x = index-1;
    this.setState({
      ...this.state,
      selectedPostType : this.state.community.postTypeSet[x]
    })
  }
 

  render(){
    const postTypeSet = this.state.community.postTypeSet;
    const communityHome = (
    <div>
      <Container>
          <Row>
            <Col></Col>
            <Col className="centeredText">  <h2>{this.state.community.name}</h2> </Col>
            <Col></Col>
          </Row>
          <Row className="communityBanner">
            <Col></Col>
            <Col>
                <Media>
                  <Media object  middle src= {this.state.community.bannerPic}  />
                </Media>
            </Col>
            <Col></Col>
          </Row>
      </Container>
      <Container className ="fiveMargin" >
    
          <Row>
            <Col>
              <Label>Post Type : </Label>
            </Col>
            <Col>
              <Input type="select" name="select" onChange = {this.postTypeChangeHandler} >
                <option data-id = "0" > Select Post Type </option>
                  {
                      postTypeSet.map((val, idx) =>  (
                        <option data-id = {postTypeSet[idx].id} > {postTypeSet[idx].name} </option>
                    ))
                  }
              </Input>
            </Col>
            
            <Col xs="3"> 
              <Link to = {{
                                pathname : "/createPost",
                                props : {
                                  postType : this.state.selectedPostType
                                }
                              }} color="secondary">Create New Post</Link> 

            </Col>
          </Row>


          <Row>
            <Col xs="3"> 
              <Link to = {{
                                pathname : "/createPostType",
                                props : {
                                  community : this.state.community
                                }
                              }} color="secondary">Create New Post Type</Link> 

            </Col>
            <Col xs="auto"></Col>
            <Col xs="3"></Col>
          </Row>

        </Container>
      </div>
      );

    return (communityHome ) ;
  }
}


export default CommunityHome;