import axios from "axios";
import CheckEmptyField from "../globleActions/check-empty-fields";
import PasswordResetModel from "./password-reset-model";

const HandlePasswordReset = (
  inputArry: HTMLInputElement[],
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>,
  userDetails: PasswordResetModel,
  empty: boolean
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
    console.log(userDetails);
  } else {
    console.log("SOME EMPTY FIELDS WERE FOUND.");
  }
};

export default HandlePasswordReset;
