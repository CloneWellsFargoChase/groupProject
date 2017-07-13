import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin} from '../../Actions/userLogin';

class LoginField extends Component{

    constructor(props) {
    super(props);

    this.state = {
      username:'',
      password:''
    };

    this.handleUserChange=this.handleUserChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);
  }

  handleUserChange(event){
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event){
    this.setState({password:event.target.value});
  }

  onFormSubmit(event){
      event.preventDefault();
      this.props.userLogin({username:this.state.username,password:this.state.password});
      this.setState({username:'',password:''});
  }

  render(){
    return(
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <TextField
              floatingLabelText="Username/Email"
              onChange={this.handleUserChange}
          />
          <br />
          <TextField
            floatingLabelText="Password"
            type="password"
            onChange={this.handlePasswordChange}
          />
          <br />
          <RaisedButton type="submit" label="Login" primary={true} className="login-button"/>
        </form>
      </div>
      );
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({userLogin},dispatch);
}

var UserLoginContainer = connect(null,mapDispatchToProps)(LoginField);

export default UserLoginContainer;
