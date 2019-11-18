import React, { Component } from 'react';
import './App.css';
import Homepage from './forms/Homepage';
import { Route, Switch, Link } from "react-router-dom";
import CreateCommunityForm  from "./forms/CreateCommunityForm";
import CreatePostType  from "./forms/CreatePostType";



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
              <Route exact path="/" component={Homepage} />
              <Route exact path="/createCommunity" component={CreateCommunityForm} />
              <Route path="/createPostType" component={CreatePostType} />
          </Switch>
        </footer>
      </div>
    );
  }



}

export default App;