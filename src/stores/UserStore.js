import { extendObservable } from 'mobx';

/**
 * UserStore
 */
class UserStore {
    constructor() {
        //extendObservable stores property for the store. 'this' refers to class/instance that is being used
        extendObservable(this, {

            loading: true,  //to know if loading form is loading or not
            isLoggedIn: false,  //To determine whether user is logged in or not
            username: ''    //Empty string on init
        })
    }
}

export default new UserStore(); //creating new instance of user store that contains new user information