import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Rooter from "./router";
import "./App.css";

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Rooter />
    </GoogleOAuthProvider>
  );
};

export default App;
