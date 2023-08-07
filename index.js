import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Router, Route, Link } from 'react-router-dom';


function Spa(){
  const Route = ReactRouterDOM.Route;
  const Link = ReactRouterDOM.Link;
  const HashRouter = ReactRouterDOM.HashRouter;

  return(
        <HashRouter>
            <div>
                <h1>Routing - Hello World </h1>
                <Link to="/">Home</Link> --
                <Link to="/about/">about</Link> --
                <Link to="/products/">products</Link>
                <hr/>
                <Route path="/" exact   component={Home}    />
                <Route path="/about/" exact   component={about}    />
                <Route path="/products/" exact   component={products}    />




            </div>
        </HashRouter>
      )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>
)


/*

//Loads application
ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
)


import App from './App';

*/