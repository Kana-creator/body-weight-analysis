import axios from "axios";
import CheckEmptyField from "../../globleActions/check-empty-fields";
import { LoginDetails } from "./login-model";
import { NavigateFunction } from "react-router-dom";

const LoginAction = (
  inputArry: HTMLInputElement[],
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>,
  loginDetails: LoginDetails,
  empty: boolean,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction
) => {
  var emptyStatus: boolean = true;

  inputArry.forEach((input) => {
    if (input.value.length < 1) {
      emptyStatus = true;
      CheckEmptyField(input, setEmpty);
    } else {
      emptyStatus = false;
      CheckEmptyField(input, setEmpty);
    }
  });

  if (!emptyStatus && !empty) {
    axios.interceptors.response.use(
      (response) => response,

      (error) => error.response
    );
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/user-login`, loginDetails)
      .then((res) => {
        if (res) {
          if (res.data.status && res.data.status !== "OK") {
            setMessage(res.data.message);
          } else {
            localStorage.setItem("user", JSON.stringify(res.data));
            window.location.href = "/client";
          }
        } else {
          setMessage("Login failed please contact admin");
        }
      });
  } else {
    setMessage("Please fill all the required fields.");
  }
};

export default LoginAction;
