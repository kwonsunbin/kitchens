import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Notice from './components/Notice';
import Map from './components/Map';
import Intro from './components/Intro';
import Draft from './components/Draft';
import Imgslide from './components/Imgslide';
import Noticepost from './components/Noticepost';
import Manage from './components/Manange';
import Notfound from './components/Notfound';
import Login from './components/Login';
import Container from '@material-ui/core/Container';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Product3 from './components/Product3';
import Example from './components/Example';
import Law1 from './components/Law1';
import Law2 from './components/Law2';
import Law3 from './components/Law3';

class App extends Component {
  render() {
    return (
      <Container maxWidth="lg" height="100%">
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/notice" component={Notice} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/intro" component={Intro} />
            <Route exact path="/draft" component={Draft} />
            <Route exact path="/noticepost/:id" component={Noticepost} />
            <Route exact path="/Imgslide/:id" component={Imgslide} />
            <Route exact path="/manage" component={Manage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/product1" component={Product1} />
            <Route exact path="/product2" component={Product2} />
            <Route exact path="/product3" component={Product3} />
            <Route exact path="/example" component={Example} />
            <Route exact path="/law1" component={Law1} />
            <Route exact path="/law2" component={Law2} />
            <Route exact path="/law3" component={Law3} />
            <Route component={Notfound} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
