import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import InputField from "../formFields/input-field";
import SignUpModel from "./sign-up-model";
import CheckEmptyField from "../globleActions/check-empty-fields";
import SignupAction from "./signup-action";

const SignupForm = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<SignUpModel>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [empty, setEmpty] = useState<boolean>(true);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-red-200 bg-opacity-30 p-5 max-w-2/7 h-fit rounded-2xl relative"
    >
      <div className="form-group px-5 text-center">
        <h1 className="text-xl">Sign Up</h1>
      </div>

      <InputField
        className={"form-group px-5 w-full"}
        label={"First name"}
        type={"text"}
        id={"firstName"}
        labelSpan={"*"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          CheckEmptyField(e.target, setEmpty);
          setUserDetails({ ...userDetails, first_name: e.target.value });
        }}
      />

      <InputField
        className={"form-group px-5 w-full"}
        label={"Last name"}
        type={"text"}
        id={"lastName"}
        labelSpan={"*"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          CheckEmptyField(e.target, setEmpty);
          setUserDetails({ ...userDetails, last_name: e.target.value });
        }}
      />

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

      <InputField
        className={"form-group px-5 w-full"}
        label={"Confirm password"}
        type={"password"}
        id={"confirmPassword"}
        labelSpan={"*"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          CheckEmptyField(e.target, setEmpty);
          setUserDetails({ ...userDetails, confirm_password: e.target.value });
        }}
      />

      <div className="form-group px-5">
        <button
          className="bg-red-950 p-3 w-full text-white hover:bg-opacity-35 active: scale-20"
          onClick={() =>
            SignupAction(
              [
                document.getElementById("firstName") as HTMLInputElement,
                document.getElementById("lastName") as HTMLInputElement,
                document.getElementById("email") as HTMLInputElement,
                document.getElementById("password") as HTMLInputElement,
                document.getElementById("confirmPassword") as HTMLInputElement,
              ],
              setEmpty,
              userDetails,
              empty
            )
          }
        >
          Sign-Up
        </button>
      </div>

      <div className="form-group px-5 text-red-200">
        <p>
          Have account already?{" "}
          <NavLink to={"/"}>
            <b className="text-red-950 hover:text-red-800"> Sign-In</b>
          </NavLink>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
