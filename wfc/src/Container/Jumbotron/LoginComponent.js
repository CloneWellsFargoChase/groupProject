import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const LoginField = () => (
  <MuiThemeProvider>
    <div>
      <TextField
          hintText="Username/Email"
          floatingLabelText="Username/Email"
        
        /><br />
      <TextField
        hintText="Password Field"
        floatingLabelText="Password"
        type="password"
       
      /><br />
    </div>
  </MuiThemeProvider>
);

export default LoginField;