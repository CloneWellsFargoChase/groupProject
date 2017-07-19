import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './SignUpView.css'

const SignUpComponent = () => (
  <div className='signupfield'>
    <TextField
      hintText="First Name"
      floatingLabelText="First Name"
    /><br />
    <TextField
      hintText="Last Name"
      floatingLabelText="Last Name"
    /><br />
    <TextField
      hintText="User Name"
      floatingLabelText="User Name"
    /><br />
    <TextField
      hintText="Email"
      floatingLabelText="Email"
    /><br />
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    /><br />
    <RaisedButton label="Submit" primary={true} />
  </div>
);

export default SignUpComponent;