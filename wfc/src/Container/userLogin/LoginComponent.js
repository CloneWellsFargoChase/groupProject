import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {withRouter,Redirect} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {userLogin,loginSuccess} from '../../Actions/userLogin';
    
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

  componentWillReceiveProps(nextProps) {
    console.log('nextprops:',nextProps);
    if(nextProps.login.profile === 'user not found'){
      return alert("wrong username or password!");
    }
    else if (Number.isInteger(nextProps.login.profile[0].account)){
      this.props.loginSuccess();
      return this.props.history.push({ pathname: '/account'});
    }
  }
  

  render(){

    return(
      <div>
        <h3 className="login-welcome">Welcome</h3>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <TextField
              placeholder="Username" onChange={this.handleUserChange}/>
          <br />
          <TextField placeholder="Password" type="password" onChange={this.handlePasswordChange}/>
          <br />
          <span>
                <p1>
                Remember me
                </p1>    
                <p2>
                  Use token <br/>
                </p2>
          </span>
          <RaisedButton type="submit" label="Sign in" primary={true} className="login-button"/>
          </form>
      </div>
      );
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({userLogin,loginSuccess},dispatch);
}

function mapStateToProps({login}){
  return {login};
}

var UserLoginContainer = withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginField));

export default UserLoginContainer;
