import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
 

export class Success extends Component {
    Continue = e => {
        e.preventDefault();
       
        this.props.nextStep();
    }
    
    Back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
  render() {
       
    return (
        <MuiThemeProvider>
             <React.Fragment>
                 <AppBar title="Success" />
                 <h1>Thank you for your Submission</h1>
                 <p>You will get an email with the furthur steps </p>
             </React.Fragment>
           </MuiThemeProvider>
      
    );
  }
}
 
          export default Success;