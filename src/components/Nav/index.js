import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 3,
    // marginRight: theme.spacing(2),
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='transparent'>
        <div className='mon-nav'>
          <Grid
            container
            justify='space-between'
            direction='row'
            // spacing={2}
            xs={12}
            alignItems='center'
          >
            <Grid item xs={2} md={4}></Grid>
            <Grid item xs={10} md={4} justify='center'>
              <Link className='logo' to='/yoga/'>
                <h2 className='logo'>Monica Dixon Yoga</h2>
              </Link>
            </Grid>
            <Hidden mdUp>
              <Grid item xs={2} sm={0}></Grid>
            </Hidden>

            <Grid item xs={8} md={3} justify='right'>
              <Button href='/yoga/resources' color='inherit'>
                Resources
              </Button>
              <Button href='/yoga/contact' color='inherit'>
                Contact
              </Button>
              <Button href='/yoga/support' color='inherit'>
                Support
              </Button>
            </Grid>
          </Grid>
        </div>
      </AppBar>
    </div>
  );
};

export default Nav;
