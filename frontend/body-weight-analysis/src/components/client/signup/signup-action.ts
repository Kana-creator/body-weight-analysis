import axios from "axios";
import CheckEmptyField from "../../globleActions/check-empty-fields";
import SignUpModel from "./sign-up-model";
import { NavigateFunction } from "react-router-dom";

const SignupAction = (
  inputArry: HTMLInputElement[],
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>,
  userDetails: SignUpModel,
  empty: boolean,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  password: HTMLInputElement[],
  navigate: NavigateFunction
) => {
  var emptyStatus: boolean = true;

  // CHECK FOR REQUIRED FIELDS
  inputArry.forEach((input) => {
    if (input.value.length < 1) {
      emptyStatus = true;
      CheckEmptyField(input, setEmpty);
    } else {
      emptyStatus = false;
      CheckEmptyField(input, setEmpty);
    }
  });

  // CONFIRM IF ALL THE REQUIRED FIELDS ARE FILLED
  if (!emptyStatus && !empty) {
    // CHECK IF PASSWORD MATCK
    if (password[0].value.trim() !== password[1].value.trim()) {
      setMessage("Passwords do not match.");
    } else {
      axios.interceptors.response.use(
        (response) => response,
        (error) => error.response
      );
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/save-user`, userDetails)
        .then((res) => {
          if (res) {
            if (res.data.status && res.data.status !== "OK") {
              setMessage(res.data.message);
            } else {
              localStorage.setItem("user", JSON.stringify(res.data));
              window.location.href = "/client";
            }
          } else {
            setMessage("Sign up failed please contact support.");
          }
        })
        .catch((error) => console.log(error));
    }
  } else {
    setMessage("Please fill all the required fields.");
  }
};

export default SignupAction;
