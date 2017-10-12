import React, { Component } from 'react';
import { BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom'
import HomePage from "./components/Home/HomePage"
import IdeaPage from "./components/Idea/IdeaPage"
import LoginPage from "./components/Login/LoginPage"
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/Idea">Idea Page</Link>
          </div>
          <div>
            <Link to="/Login">Login Page</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Idea/:userId" component={IdeaPage} />
            <Route exact path="/Login" component={LoginPage} />

          </Switch>
        </div>
      
      </Router>
        
    );
  }
}

export default App;
