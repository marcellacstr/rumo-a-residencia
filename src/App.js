
import React from 'react';
import { useState } from 'react';
import './App.css';
import { GoogleLogin, GoogleOAuthProvider, GoogleLoginButton, useGoogleLogin } from '@react-oauth/google';
import CriaAgenda from './screens/CriaAgenda';



function App() {
  

  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
      scope="https://www.googleapis.com/auth/calendar"
    />
  );
}

export default App;
