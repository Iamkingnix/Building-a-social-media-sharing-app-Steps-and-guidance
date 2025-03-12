import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import LinkAccount from './components/SocialMedia/LinkAccount';
import CreatePost from './components/Post/CreatePost';
import SchedulePost from './components/Post/SchedulePost';

// Add any existing imports here

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/link-account" component={LinkAccount} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/schedule-post" component={SchedulePost} />
          {/* Add any existing routes here */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;