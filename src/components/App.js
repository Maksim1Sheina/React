import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router';
import Article from './Article';

export default class App extends Component {
  render() {
    const Articles = [
      "Article One",
      "Article 2",
      "Article 3",
      "Article 4",
      "Article 5",
      "Article 6",
      "Article One",
      "Article 2",
      "Article 3",
      "Article 4",
      "Article 5",
      "Article 6",
      "Article One",
      "Article 2",
      "Article 3",
      "Article 4",
      "Article 5",
      "Article 6",
      
    ].map((titleee, i) => <Article key={i} title={titleee} /> );
    
    return (
      <div className="App">
        <div className="App-header">
          <a href="#">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p><code>{this.props.params.id_element}</code></p>
      
        <Link to="element"><button type="button" className="btn btn-primary">Element</button></Link>
        <Link to="layout"><button type="button" className="btn btn-primary">Layout</button></Link>
        <Link to="proplayout"><button type="button" className="btn btn-primary">PropLayout</button></Link>
        <Link to="todos"><button type="button" className="btn btn-primary">Todos</button></Link>
        
        {this.props.children}
          
        <div className="row">{Articles}</div> 
      </div>
    );
  }
}