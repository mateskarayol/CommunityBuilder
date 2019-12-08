import React, { Component } from 'react';
import './App.css';
import Homepage from './forms/Homepage';
import { Route, Switch, Link } from "react-router-dom";
import CreateCommunityForm  from "./forms/CreateCommunityForm";
import CreatePostType  from "./forms/CreatePostType";
import ListCommunitiesForm  from "./forms/ListCommunitiesForm";
import CommunityHome  from "./forms/CommunityHome";
import CreatePost  from "./forms/CreatePost";






class App extends Component {
  state = {

  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <Link to = "/" color="secondary">Community Builder</Link>  
          </div>
        </header>
        <footer>
          <Switch>
              <Route  exact 
                      path="/" 
                      component={Homepage} />
              <Route  exact 
                      path="/createCommunity" 
                      component={CreateCommunityForm} />
              <Route  exact
                      path="/createPostType" 
                      component={CreatePostType} />
              <Route  exact 
                      path="/listCommunities" 
                      component={ListCommunitiesForm} />
              <Route  exact 
                      path="/communityHome"  
                      //component={CommunityHome} />
                      render={(props) => <CommunityHome {...props}/> }
              />
              <Route  exact 
                      path="/createPost"  
                      //component={CommunityHome} />
                      render={(props) => <CreatePost {...props}/> }
              />

            

          </Switch>
        </footer>
      </div>
    );
  }



}

export default App;