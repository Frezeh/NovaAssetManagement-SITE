import React, { Component } from 'react';
import Header from './HeaderComponent';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../redux/ActionCreators';

  const mapStateToProps = state => {
    return {
      auth: state.auth,
    }
  };

  const mapDispatchToProps = dispatch => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser()),
  });

class Main extends Component {

  render() {

  return (
      <div>
        <Header auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser} 
          /> 
      </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);