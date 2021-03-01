import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Styles from './Styles';
import { withStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';


const firebase = require('firebase/app');

class Navbar extends Component {

  signOut = () => {
    firebase.default.auth().signOut().then(
      console.log('signed out'));
  }

  render() { 
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <AppBar className={classes.navbar} position="static">
            <Toolbar>
              <Typography variant="h4" className={classes.title}>
              Open Note
              </Typography>
              <Button>
                <NavLink onClick={this.signOut} to='./signin' className={classes.link}>Sign out</NavLink>
              </Button>
            </Toolbar>
          </AppBar>
        </div>
    );
  }
}

export default withStyles(Styles)(Navbar);
