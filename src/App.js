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

function app() {
  return (
    <React.Fragment>
      <GifOne />

      <Router>
        <Nav />
        <Container>
          <Route path='/yoga/' component={home}></Route>
          <Route exact path='/yoga/resources' component={resources}></Route>
          <Route exact path='/yoga/contact' component={contact}></Route>
          <Route exact path='/yoga/support' component={support}></Route>
        </Container>
      </Router>
    </React.Fragment>
  );
}

export default app;
