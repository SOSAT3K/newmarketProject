import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './stores/UserStore'; //To check if user is logged in or not

class LoginForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      buttonDisabled: false   //State to pass to disable button if user is already logged in/exists 
    }
  }

  //To avoid double requests
  setInputValue(property, val) {
    val = val.trim(); //remove spaces from string
    if (val.length > 12) {  //Max length of password/user is 12 characters (might need to change)
      return;
    }
    this.setState({
      [property]: val //passing through input (username or password, [by using this.setstate we can reuse this])
    })
  }

  //In case of any incorrect inputs, reset inputs & disable logout button
  resetForm() {
    this.setState({
      username: '',
      password: '',
      buttonDisabled: false
    })
  }

  async doLogIn() {
    //If username or password do not exist, return function & disable logout button
    if (!this.state.username) {
      return;
    }
    if (!this.state.password) {
      return;
    }

    this.setState({
      buttonDisabled: true
    })

    try {
      let res = await fetch('/login', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        //Stringify inputs and send through API to compare against database user/password combinations
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      });
      //resolve data as JSON format
      let result = await res.json();

      //Check if login has been (un)successful & run appropriate functions
      if (result && result.success) {
        UserStore.isLoggedIn = true;
        UserStore.username = result.username; 
      }

      else if (result && result.success === false) {
        this.resetForm();
        alert(result.msg); 
      }
    }

    catch(e) {
      console.log(e);
      this.resetForm();
    }
  }

  //Login Form HTML
  render(){
    return (
      <div className="loginForm">
        
        Log In
        <InputField
          type='text'
          placeholder='THIS HASNT UPDATED'
          value={this.state.username ? this.state.username :''}
          onChange={ (val) => this.setInputValue('username', val) }
        />

        <InputField
          type='password'
          placeholder='password'
          value={this.state.password ? this.state.password : ''}
          onChange={ (val) => this.setInputValue('password', val) }
        />

        <SubmitButton
          text='Login'
          disabled={this.state.buttonDisabled}
          onClick={ () => this.doLogIn() }
        />
      </div>
    );
  }
}

export default LoginForm;