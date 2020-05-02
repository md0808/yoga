import React from "react";
import { Container, Typography } from "@material-ui/core/";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import resources from "./pages/resources";
import contact from "./pages/contact";
import support from "./pages/support";
import home from "./pages/home";
import GifOne from "./components/GifOne";
import "./App.css";

//import theme provider

//This is the landing page of the application.
//I will need to bring in React Router.
//Home page will have an intro, and some nice imagery.

function app() {
  return (
    <React.Fragment>
      <GifOne />

      <Router>
        <Nav />
        <Container>
          <Route exact path='/yoga/' component={home}></Route>
          <Route exact path='/yoga/resources' component={resources}></Route>
          <Route exact path='/yoga/contact' component={contact}></Route>
          <Route exact path='/yoga/support' component={support}></Route>
        </Container>
      </Router>
    </React.Fragment>
  );
}

export default app;
