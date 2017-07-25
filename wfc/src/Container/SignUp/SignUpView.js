import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {createAccount} from '../../Actions/createAccount'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import logo from '../../Images/Icons/Header-icons/white-logo.svg'
import chase from'../../Images/Icons/Header-icons/white-text.svg'
import './SignUpView.css'

class SignUpComponent extends Component {

 constructor(props){
   super(props);
   this.state = {
     firstName: '',
     lastName: '',
     userName: '',
     email: '',
     password: ''
   }
   this.firstNameChange = this.firstNameChange.bind(this);
   this.lastNameChange = this.lastNameChange.bind(this)
   this.userNameChange = this.userNameChange.bind(this)
   this.emailChange = this.emailChange.bind(this)
   this.passwordChange = this.passwordChange.bind(this)
   this.onFormSubmit = this.onFormSubmit.bind(this)


 }

 firstNameChange(event) {
   this.setState({
     firstName: event.target.value
   })
 }

 lastNameChange(event) {
   this.setState({
     lastName: event.target.value
   })
 }

 userNameChange(event) {
   this.setState({
     userName: event.target.value
   })
 }

 emailChange(event) {
   this.setState({
     email: event.target.value
   })
 }

 passwordChange(event) {
   this.setState({
     password: event.target.value
   })
 }

 onFormSubmit(event) {
   event.preventDefault();
   this.props.createAccount({
     firstName: this.state.firstName,
     lastName: this.state.lastName,
     userName: this.state.userName,
     email: this.state.email,
     password: this.state.password
   })
   console.log(this.state)
   this.setState({
     firstName: '',
     lastName: '',
     userName: '',
     email: '',
     password: ''
   })
   return this.props.history.push({ pathname: '/account'});
 }

 render() {
   return (
     <div className='signupMain'>
       <span className="signup-header">
          <a href="/">
            <img src={chase} alt="" className="signup-header-chase"/>
            <img src={logo} alt="" className="signup-header-logo"/>
          </a>
       </span>
         <form className='signupfield' onSubmit={this.onFormSubmit}>
           <TextField
             onChange={this.firstNameChange}
             hintText="First Name"
             floatingLabelText="First Name"
           /><br />
           <TextField
             onChange={this.lastNameChange}
             hintText="Last Name"
             floatingLabelText="Last Name"
           /><br />
           <TextField
             onChange={this.userNameChange}
             hintText="User Name"
             floatingLabelText="User Name"
           /><br />
           <TextField
             onChange={this.emailChange}
             hintText="Email"
             floatingLabelText="Email"
           /><br />
           <TextField
             onChange={this.passwordChange}
             hintText="Password Field"
             floatingLabelText="Password"
             type="password"
           /><br />
           <RaisedButton
           type="submit"
           label="Submit"
           primary={true}
           />
         </form>
     </div>
   );
 }
}
function mapDispatchToProps(dispatch) {
 return bindActionCreators({createAccount}, dispatch);
}
const CreateAccount = withRouter(connect(null, mapDispatchToProps)(SignUpComponent) );
export default CreateAccount
