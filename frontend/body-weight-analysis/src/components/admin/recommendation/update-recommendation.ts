import axios from "axios";
import { RecommendationModel } from "./recommendation-model";

const UpdateRecommendation = (
  recommendation_id: string | undefined,
  recommendation: RecommendationModel,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => error.response
  );

  axios
    .put(`/api/update-recommendation/${recommendation_id}`, recommendation)
    .then((res) => {
      if (res) {
        if (res.data.status) {
          setMessage(res.data.message);
        }
      } else {
        setMessage("Update failed please contanct support.");
      }
    });
};

export default UpdateRecommendation;
