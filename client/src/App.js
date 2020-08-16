import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Notice from './components/Notice';
import Map from './components/Map';
import Intro from './components/Intro';
import Draft from './components/Draft';
import Gallerypost from './components/Gallerypost';
import Noticepost from './components/Noticepost';
import Manage from './components/Manange';
import Notfound from './components/Notfound';
import Login from './components/Login';
import Container from '@material-ui/core/Container';

class App extends Component {
  render() {
    return (
      <Container maxWidth="lg" height="100%">
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/notice" component={Notice} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/intro" component={Intro} />
            <Route exact path="/draft" component={Draft} />
            <Route exact path="/noticepost/:id" component={Noticepost} />
            <Route exact path="/gallerypost/:id" component={Gallerypost} />
            <Route exact path="/manage" component={Manage} />
            <Route exact path="/login" component={Login} />
            <Route component={Notfound} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
