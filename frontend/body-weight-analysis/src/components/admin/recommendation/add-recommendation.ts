import axios from "axios";
import CheckEmptyField from "../../globleActions/check-empty-fields";
import { RecommendationModel } from "./recommendation-model";
import CheckEmptySelect from "../../globleActions/check-empty-select";

const AddRecommendation = (
  inputArry: HTMLInputElement[],
  selectArry: HTMLSelectElement[],
  setEmpty: React.Dispatch<React.SetStateAction<boolean>>,
  recommendation: RecommendationModel,
  empty: boolean,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
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
    axios.interceptors.response.use(
      (response) => response,
      (error) => error.response
    );

    console.log(recommendation);

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/save-recommendation`,
        recommendation
      )
      .then((res) => {
        if (res) {
          if (res.data.status && res.data.status !== "OK") {
            setMessage(res.data.message);
            window.alert(res.data.message);
          } else {
            setShowForm(false);
            window.alert("Recommendation saved successfully.");
          }
        } else {
          setMessage("Save recommendation failed please contact support.");
        }
      });
  } else {
    setMessage("Please fill all the required fields.");
  }
};

export default AddRecommendation;
