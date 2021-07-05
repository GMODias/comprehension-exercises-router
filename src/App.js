import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    const user={username: 'joão', password: '1234'}
    return (
      <BrowserRouter>
        <Link to="/">Home</Link><span> </span>
        <Link to="/about">About</Link><span> </span>
        <Link to="/users">Users</Link><span> </span>
        <Link to="/strictaccess">StrictAcess</Link>
        <Switch>
          <Route exact path ="/users/:id" render={ (props) => <Users {...props} greetingsMessage="Good Morning" /> } />
          <Route exact path ="/strictaccess" render={() => <StrictAccess user={user} />} />
          <Route exact path ="/about" component={About} />
          <Route exact path ="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
