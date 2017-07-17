import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';

const mapStateToProps = (state) =>{
  const {login} = state.login;
  console.log(login)
  return {
      login
    };
}

export const AppContainer = withRouter(connect(mapStateToProps)(App));