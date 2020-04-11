import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link, useLocation } from "react-router-dom";
// import MenuIcon from "@material-ui/icons/MenuIcon";

const Nav = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          //   className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography
          variant='h6'
          // className={classes.title}
        >
          <Link to='/'>Monica Dixon Yoga</Link>
        </Typography>
        <Button href='/resources' color='inherit'>
          Resources
        </Button>
        <Button href='/contact' color='inherit'>
          Contact
        </Button>
        <Button href='/support' color='inherit'>
          Donate
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
