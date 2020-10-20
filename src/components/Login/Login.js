import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import "firebase/auth";
import { UserContext } from '../../App';
import './Login.css'
import logo from '../../../src/images/logos/logo.png'


const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);


  const [error, setError] = useState({});
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }

  var googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleLogin = () => {
      firebase.auth().signInWithPopup(googleProvider)
          .then(result => {
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {name: displayName, email, img: photoURL}
            setLoggedInUser(signedInUser);
            storeAuthToken();
          }).catch(error => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setError({ errorCode, errorMessage });
          });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }


  return (
    <div className="login">
            <img className="img-fluid mt-5 pt-5" width="200px" src={logo} />
            <div className="login-box mt-5 p-5">
                <h3>Login With</h3><br />
                <button className="login-btn text-left" onClick={handleLogin}>
                    <img width="30px" src="https://img.icons8.com/color/48/000000/google-logo.png" />
                    <b className="pr-5">Continue with Google</b>
                </button>

                <p>Don't have an account? Create One</p>

                <p style={{ color: 'red' }}>{error.errorCode} {error.errorMessage}</p>
            </div>

        </div>
  );
};

export default Login;