import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import InputField from "../formFields/input-field";
import CheckEmptyField from "../globleActions/check-empty-fields";
import PasswordResetModel from "./password-reset-model";
import HandlePasswordReset from "./password-reset-action";

const PasswordResetForm: React.FC = () => {
  const [userDetails, setUserDetails] = useState<PasswordResetModel>({
    email: "",
    newPassword: "",
    confirm_password: "",
  });
  const [empty, setEmpty] = useState<boolean>(true);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-red-200 bg-opacity-30 p-5 w-2/7 h-fit rounded-2xl relative"
    >
      <div className="form-group px-5 text-center">
        <h1 className="text-xl">Reset password</h1>
      </div>

      <InputField
        className={"form-group px-5 w-full"}
        label={"Email"}
        type={"text"}
        id={"email"}
        labelSpan={"*"}
        labelClass="text-white"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          CheckEmptyField(e.target, setEmpty);
          setUserDetails({ ...userDetails, email: e.target.value });
        }}
      />

      <InputField
        className={"form-group px-5 w-full"}
        label={"New password"}
        type={"password"}
        id={"newPassword"}
        labelSpan={"*"}
        labelClass="text-white"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          CheckEmptyField(e.target, setEmpty);
          setUserDetails({ ...userDetails, newPassword: e.target.value });
        }}
      />

      <InputField
        className={"form-group px-5 w-full"}
        label={"Confirm password"}
        type={"password"}
        id={"confirmPassword"}
        labelSpan={"*"}
        labelClass="text-white"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          CheckEmptyField(e.target, setEmpty);
          setUserDetails({ ...userDetails, confirm_password: e.target.value });
        }}
      />

      <div className="form-group py-5">
        <button
          className="bg-red-950 p-3 w-full text-white hover:bg-opacity-35 active: scale-20"
          onClick={() =>
            HandlePasswordReset(
              [
                document.getElementById("email") as HTMLInputElement,
                document.getElementById("newPassword") as HTMLInputElement,
                document.getElementById("confirmPassword") as HTMLInputElement,
              ],
              setEmpty,
              userDetails,
              empty
            )
          }
        >
          Reset password
        </button>
      </div>

      <div className="form-group py-5 text-red-200">
        <p>
          Have no account?{" "}
          <NavLink to={"/signUp"}>
            <b className="text-red-950 hover:text-red-800"> Sign-Up</b>
          </NavLink>
          <b> OR </b>
          <NavLink to={"/"}>
            <b className="text-red-950 hover:text-red-800">Sign-In</b>
          </NavLink>
        </p>
      </div>
    </form>
  );
};

export default PasswordResetForm;
