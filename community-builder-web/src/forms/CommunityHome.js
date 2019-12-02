import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Input, Media, Container, Row, Col,Button} from 'reactstrap';
import CreatePostType from './CreatePostType';


class CommunityHome extends Component {

  constructor(props){
    super();
    this.openCreatePostTypeHandler.bind(this.openCreatePostTypeHandler);
    this.state = {

      community : props.location.props.community,
      showCreatePostType : false

    }
  }

  openCreatePostTypeHandler  = event => {
    this.setState({
      ...this.state,
      showCreatePostType : true,
      community : JSON.parse(event.target.dataset.community)
    })
  }

  render(){
    const communityHome = (
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
        <Row>
          <Col xs="3"> 
            <Link to = {{
                              pathname : "/createPostType",
                              props : {
                                community : this.state.community
                              }
                            }} color="secondary">Create New Post Type</Link> 

          </Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col>
        </Row>
                      

        
        { /* 
        
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        </Row>

        */}
      </Container>

      );

    return (communityHome ) ;
  }
}


export default CommunityHome;