import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/login-page";
import SignupPage from "./components/signup/sign-up-page";
import PasswordResetPage from "./components/passwordReset/password-reset-page";
import ClientPage from "./components/client/client-page";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signUp" element={<SignupPage />} />
          <Route path="/passwordReset" element={<PasswordResetPage />} />
          <Route path="/client" element={<ClientPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
