import axios from "axios";
import CheckEmptyField from "../globleActions/check-empty-fields";
import { RecommendationModel } from "./recommendation-model";
import CheckEmptySelect from "../globleActions/check-empty-select";

const AddRecommendation = (
  inputArry: HTMLInputElement[],
  selectArry: HTMLSelectElement[],
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>,
  recommendation: RecommendationModel,
  empty: boolean
) => {
  var emptyStatus: boolean = true;

  inputArry.forEach((input) => {
    if (input.value.trim().length < 1) {
      emptyStatus = true;
      CheckEmptyField(input, setEmpty);
      inputArry[0].focus();
    } else {
      emptyStatus = false;
      CheckEmptyField(input, setEmpty);
    }
  });

  selectArry.forEach((select) => {
    if (select.value.trim().length < 1) {
      emptyStatus = true;
      CheckEmptySelect(select, setEmpty);
      selectArry[0].focus();
    } else {
      emptyStatus = false;
      CheckEmptySelect(select, setEmpty);
    }
  });

  if (!emptyStatus && !empty) {
    console.log(recommendation);
  } else {
    console.log("SOME EMPTY FIELDS WERE FOUND.");
  }
};

export default AddRecommendation;
