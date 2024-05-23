import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import InputField from "../../formFields/input-field";
import CheckEmptyField from "../../globleActions/check-empty-fields";
import LoginAction from "./login-action";
import { LoginDetails } from "./login-model";

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [empty, setEmpty] = useState<boolean>(true);
  const [userDetails, setUserDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-red-200 bg-opacity-30 p-5 max-w-2/7 h-fit rounded-2xl relative"
    >
      <div className="form-group px-5 text-center">
        <h1 className="font-bold text-xl">Sign-In</h1>
      </div>

      <h1 className="font-bold text-sm text-red-800 py-5 text-center">
        {message}
      </h1>

      <InputField
        className={"form-group px-5 w-full"}
        label={"Email"}
        type={"text"}
        id={"email"}
        labelSpan={"*"}
        labelClass={"text-white"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          CheckEmptyField(e.target, setEmpty);
          setUserDetails({ ...userDetails, email: e.target.value });
        }}
      />

      <InputField
        className={"form-group px-5 w-full"}
        label={"Password"}
        type={"password"}
        id={"password"}
        labelSpan={"*"}
        labelClass={"text-white"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          CheckEmptyField(e.target, setEmpty);
          setUserDetails({ ...userDetails, password: e.target.value });
        }}
      />

      <NavLink
        to={"/admin-passwordReset"}
        className="w-full flex justify-end px-5"
      >
        <b className="hover:text-red-800">Forgot password</b>
      </NavLink>

      <div className="form-group p-5">
        <button
          className="bg-red-950 p-3 w-full text-white hover:bg-opacity-35 active: scale-20"
          onClick={() => {
            LoginAction(
              [
                document.getElementById("email") as HTMLInputElement,
                document.getElementById("password") as HTMLInputElement,
              ],
              setEmpty,
              userDetails,
              empty,
              setMessage,
              navigate
            );
          }}
        >
          Sign-In
        </button>
      </div>

      <div className="form-group p-5 text-red-950">
        <p>
          Have no account?{" "}
          <NavLink to={"/admin-signUp"}>
            <b className="text-red-950 hover:text-red-800"> Sign-Up</b>
          </NavLink>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
