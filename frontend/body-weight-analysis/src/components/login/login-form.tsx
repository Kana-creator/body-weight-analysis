import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import InputField from "../formFields/input-field";
import CheckEmptyField from "../globleActions/check-empty-fields";
import LoginAction from "./login-action";
import { LoginDetails } from "./login-model";

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const nagigate = useNavigate();
  const [empty, setEmpty] = useState<boolean>(true);
  const [userDetails, setUserDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-red-200 bg-opacity-30 p-5 max-w-2/7 h-fit rounded-2xl relative"
    >
      <div className="form-group px-5 text-center">
        <h1>SignIn</h1>
      </div>

      <InputField
        className={"form-group px-5 w-full"}
        label={"Email"}
        type={"text"}
        id={"email"}
        labelSpan={"*"}
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          CheckEmptyField(e.target, setEmpty);
          setUserDetails({ ...userDetails, password: e.target.value });
        }}
      />

      <NavLink to={"/passwordReset"} className="w-full flex justify-end px-5">
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
              empty
            );
          }}
        >
          Sign-In
        </button>
      </div>

      <div className="form-group p-5 text-red-200">
        <p>
          Have no account?{" "}
          <NavLink to={"/signUp"}>
            <b className="text-red-950 hover:text-red-800"> Sign-Up</b>
          </NavLink>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
