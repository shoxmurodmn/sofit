import { useState } from 'react'
import Register from "./pages/Register"
import { GoogleOAuthProvider }  from  '@react-oauth/google';
import Rooter from './router'
import './App.css'


function App() {


  return (
    <GoogleOAuthProvider>
      <Rooter/>
    </GoogleOAuthProvider>
  )
}

export default App;
