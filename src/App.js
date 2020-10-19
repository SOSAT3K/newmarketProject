import React from 'react';
import { observer } from 'mobx-react';  //In order to listen to changes from the Uer Stores
import UserStore from './stores/UserStore';
import LoginForm from './LoginForm';
import SubmitButton from './SubmitButton';
import './App.css';

class App extends React.Component {

  //API call to check if user is logged in when component loads by checking session
  async componentDidMount() {

    try {
      //res = result --
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        //find 2 headers for the API request
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      //Fetch results from 'res' as a json file
      let result = await res.json();

      if (result && result.success) {
        UserStore.loading = false;  //If user is already logged in do not load app
        UserStore.isLoggedIn = true;
        UserStore.username = result.username; //Pass username through API
        this.render();
      }
      //If not logged in..
      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }
    //If error is returned from API from above if statement, catch(e) will be called
    catch(e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async DoLogOut() {

    try {
      //res = result --
      let res = await fetch('/logout', {
        method: 'post',
        //find 2 headers for the API request
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      //Fetch results from 'res' as a json file
      let result = await res.json();

      if (result && result.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = '';  //reset username to blank since user is logged out
      }
    }
    //If error is returned from API from above if statement, catch(e) will be called
    catch(e) {
      console.log(e)
    }
  }

  async AddActiveUser(){

    try {
      /**
      * Add code here to add to the connected database with sql query
      * using these users to access the network from the captive page
      * 
      **/

    } catch (e) {

    }
  }

  render(){
    //If app is loading, return HTML content
    if (UserStore.loading) {
      return (
        <div className="app">
          <div className='container'>
            Loading, please wait...
          </div>
        </div>
      );
    }
    else {
        //If not loading, check if user is logged in
        if (UserStore.isLoggedIn) {
          return (
            <div className="app">

              {/* Create the module in the main container with CSS*/}

              <div className='container'>

                <img src="./media/newmarket_apartments_logo.png" alt="main_logo"/>

                Welcome {UserStore.username}

                <SubmitButton
                  text={'Log Out'}
                  disabled={false}
                  onClick={ () => this.DoLogOut() } //Log user out if button is clicked
                />

                <SubmitButton
                  text={'Print User Credentials'}
                  disabled={false}
                  onClick={ () => this.(AddActiveUser() } //Add the user to an active database of Guests on the network
                />

              </div>
            </div>
          );
        }
        //If not logged in, display login form
        return (
          <div className="app">
            <div className='container'>
              <LoginForm />
            </div>
          </div>
        );
    }
  }
}

export default observer(App);
