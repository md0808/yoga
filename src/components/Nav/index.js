import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link, useLocation } from "react-router-dom";
import Menu from "@material-ui/icons/Menu";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // marginRight: theme.spacing(2),
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='transparent'>
        <Toolbar>
          {/* <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <Menu />
          </IconButton> */}
          <Typography variant='h6' className={classes.title}>
            <Link className='logo' to='/'>
              Monica Dixon Yoga
            </Link>
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
    </div>
  );
};

export default Nav;
