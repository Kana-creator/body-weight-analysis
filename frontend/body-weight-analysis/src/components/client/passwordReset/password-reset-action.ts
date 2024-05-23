import axios from "axios";
import CheckEmptyField from "../../globleActions/check-empty-fields";
import PasswordResetModel from "./password-reset-model";
import { NavigateFunction } from "react-router-dom";

const HandlePasswordReset = (
  inputArry: HTMLInputElement[],
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>,
  userDetails: PasswordResetModel,
  empty: boolean,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  navigaet: NavigateFunction
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
      .put(`${process.env.REACT_APP_API_URL}/api/reset-password`, userDetails)
      .then((res) => {
        if (res) {
          if (res.data.status && res.data.status !== "OK") {
            setMessage(res.data.message);
          } else {
            localStorage.setItem("user", JSON.stringify(res.data));
            navigaet("/client");
          }
        } else {
          setMessage("Password reset failed please contact support.");
        }
      });
  } else {
    setMessage("Please fill all the required fields.");
  }
};

export default HandlePasswordReset;
