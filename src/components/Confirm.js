import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    Continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    }
    
    Back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
  render() {
      const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
    return (
        <MuiThemeProvider>
             <React.Fragment>
                 <AppBar title="Confirm User Data" />
                   <List>
                       <ListItem
                         primaryText="First Name"
                         secondaryText={ firstName }
                       />
                        <ListItem
                         primaryText="Last Name"
                         secondaryText={ lastName }
                       />
                        <ListItem
                         primaryText="E-mail"
                         secondaryText={ email }
                       />
                        <ListItem
                         primaryText="occupation"
                         secondaryText={ occupation }
                       />
                        <ListItem
                         primaryText="City"
                         secondaryText={ city }
                       />
                        <ListItem
                         primaryText="Bio"
                         secondaryText={ bio }
                       />
                   </List>
                   <br/>
                 <RaisedButton
                    label="Confirm & Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.Continue}
                 />
                 <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.Back}
                 />
             </React.Fragment>
           </MuiThemeProvider>
      
    )
  }
}
const styles = {
    button: {
        margin: 15
    }
}

export default Confirm