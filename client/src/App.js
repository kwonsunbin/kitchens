import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './containers/Main';
import Notice from './containers/Notice';
import Map from './containers/Map';
import Intro from './containers/Intro';
import Draft from './containers/Draft';
import Imgslide from './containers/Imgslide';
import Noticepost from './containers/Noticepost';
import Notfound from './containers/Notfound';
import Login from './containers/Login';
import Container from '@material-ui/core/Container';
import Product from './containers/Product';
import Example from './containers/Example';
import Law from './containers/Law';
import Consult from './containers/Consult';
import Consultpost from './containers/Consultpost';
import Updatereq from './containers/Updatereq';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }
  componentDidMount() {
    axios.get('/api/v1/login').then((res) => {
      if (res.status === 200) {
        this.setState({ loggedIn: true });
      } else {
        return;
      }
    });
  }

  render() {
    return (
      <Container maxWidth="xl" height="100%">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Main isLoggedIn={this.state.loggedIn} />}
            />
            <Route
              exact
              path="/notice"
              render={() => <Notice isLoggedIn={this.state.loggedIn} />}
            />
            <Route exact path="/map" component={Map} />
            <Route exact path="/intro" component={Intro} />
            <Route exact path="/draft" component={Draft} />
            <Route
              exact
              path="/noticepost/:id"
              render={(props) => (
                <Noticepost {...props} isLoggedIn={this.state.loggedIn} />
              )}
            />
            <Route
              exact
              path="/Imgslide/:id"
              render={(props) => (
                <Imgslide {...props} isLoggedIn={this.state.loggedIn} />
              )}
            />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/product/:id"
              render={(props) => (
                <Product {...props} isLoggedIn={this.state.loggedIn} />
              )}
            />
            <Route
              exact
              path="/example"
              render={() => <Example isLoggedIn={this.state.loggedIn} />}
            />
            <Route exact path="/law/:id" component={Law} />
            <Route
              exact
              path="/consult"
              render={(props) => (
                <Consult {...props} isLoggedIn={this.state.loggedIn} />
              )}
            />
            <Route
              exact
              path="/consultpost/:id"
              render={(props) => (
                <Consultpost {...props} isLoggedIn={this.state.loggedIn} />
              )}
            />
            <Route exact path="/updatereq" component={Updatereq} />
            <Route component={Notfound} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
