import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const Main = () => (
  <section className="banner">
    <h1 className="banner__title">Listmast</h1>
    <div className="banner__subtitle">Manage your Christmast list</div>
    <div className="banner__actions">
      <Link to="/list/new" className="banner__button">Create your list</Link>
    </div>
  </section>
)

const NewList = () => (
  <h1>Coucou</h1>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Main} />
          <Route path="/list/new" component={NewList} />
        </div>
      </Router>
    );
  }
}

export default App;
