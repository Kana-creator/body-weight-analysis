import axios from "axios";
import CheckEmptyField from "../globleActions/check-empty-fields";
import ClientQueryModel from "./query-model";

const CheckRecommendation = (
  inputArry: HTMLInputElement[],
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>,
  queryDetails: ClientQueryModel,
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
    console.log(queryDetails);
  } else {
    console.log("SOME EMPTY FIELDS WERE FOUND.");
  }
};

export default CheckRecommendation;
