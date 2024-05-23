import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/client/login/login-page";
import SignupPage from "./components/client/signup/sign-up-page";
import PasswordResetPage from "./components/client/passwordReset/password-reset-page";
import ClientPage from "./components/client/client-page";
import Dashboard from "./components/admin/dashboard";
import UsersList from "./components/admin/users-list";
import RecommendationsList from "./components/admin/recommendations-list";
import ActivitiesList from "./components/admin/activities-list";
import AdminSignupPage from "./components/admin/signup/admin-signup-page";
import AdminLoginPage from "./components/admin/login/admin-login-page";
import AdminPasswordResetPage from "./components/admin/passwordReset/admin-password-reset-page";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/signUp" element={<SignupPage />} />
          <Route path="/admin-signUp" element={<AdminSignupPage />} />
          <Route path="/passwordReset" element={<PasswordResetPage />} />
          <Route
            path="/admin-passwordReset"
            element={<AdminPasswordResetPage />}
          />
          <Route path="/client" element={<ClientPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route
            path="/recommendations/:id"
            element={<RecommendationsList />}
          />
          <Route path="/activities" element={<ActivitiesList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
