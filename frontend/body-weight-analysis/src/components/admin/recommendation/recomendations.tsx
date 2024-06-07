import React, { useEffect, useState } from "react";
import { RecommendationModel } from "./recommendation-model";
import RecommendationForm from "./recommendation-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface Props {}
const Recommendations: React.FC<Props> = () => {
  const [editableRecom, setEditableRecom] = useState<RecommendationModel[]>([]);
  const [message, setMessage] = useState<string>("");

  const [recommendations, setRecommendations] = useState<RecommendationModel[]>(
    []
  );
  const [showForm, setShowForm] = useState<boolean>(false);
  const navigate = useNavigate();
  const { recommendationId } = useParams();

  useEffect(() => {
    recommendationId
      ? setEditableRecom(
          recommendations.filter(
            (rec) => rec.recommendationId == recommendationId
          )
        )
      : setEditableRecom([]);
  }, [recommendationId]);

  useEffect(() => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => error.response
    );

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/fetch-recommendations`)
      .then((res) => {
        if (res) {
          if (res.data.status && res.data.status !== "OK") {
            setMessage(res.data.message);
          } else {
            console.log(res.data);
            setRecommendations(res.data);
          }
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full flex from-inheritlex flex-wrap h-full pb-20">
      <div className="flex justify-between w-full flex-wrap p-5 bg-red-200">
        <h1>Health Recommendations</h1>
        <h1>{recommendations.length}</h1>
        <button
          className="rounded-sm bg-blue-200 w-20"
          onClick={() => setShowForm(true)}
        >
          Add
        </button>
        <input
          type="search"
          name=""
          id=""
          className="w-1/3 p-2 border-2 border-red-200 outline-none rounded-md"
          placeholder="Search"
        />
      </div>
      {!recommendationId && !showForm ? (
        recommendations.length < 1 ? (
          <div className="w-full flex flex-wrap justify-center items-center h-full">
            <h1>NO RECOMMENDATION</h1>
          </div>
        ) : (
          <div className="w-full">
            {recommendations.map((recommendation, index) => (
              <div key={index} className="w-full min-h-60 p-5">
                <div className="w-full h-full bg-white p-2 hover:shadow-red-900 shadow-2xl text-xs">
                  <div className="w-full">
                    <h1 className="font-bold text-xl text-red-900">
                      REC #{index + 1}
                    </h1>
                    <p>
                      <b>Age Limit: </b>
                      <span>
                        {recommendation.ageLowerLimit +
                          "-" +
                          recommendation.ageUpperLimit}{" "}
                        Yrs
                      </span>
                    </p>
                    <p>
                      <b>Weight: </b>
                      <span>{recommendation.weight} Kg</span>
                    </p>
                    <p>
                      <b>Height: </b>
                      <span>{recommendation.height} cm</span>
                    </p>
                  </div>

                  <div className="w-full flex flex-wrap justify-around">
                    <h1 className="font-bold text-xl text-red-900 mt-5 w-full text-left">
                      Nutrition recommendation
                    </h1>
                    <div className="w-1/3">
                      <h1 className="font-bold text-md text-red-900 mt-5">
                        General
                      </h1>
                      <p>
                        <b>Water: </b>
                        <span>
                          {recommendation.nutritionRecommendation.water}
                        </span>
                      </p>
                      <p>
                        <b>Carbohydrates: </b>
                        <span>
                          {recommendation.nutritionRecommendation.carbohydrates}
                        </span>
                      </p>

                      <p>
                        <b>Proteins: </b>
                        <span>
                          {recommendation.nutritionRecommendation.proteins}
                        </span>
                      </p>

                      <p>
                        <b>Fats: </b>
                        <span>
                          {recommendation.nutritionRecommendation.fats}
                        </span>
                      </p>
                    </div>

                    <div className="w-1/3">
                      <h1 className="font-bold text-md text-red-900 mt-5 w-full">
                        Vitamins
                      </h1>

                      <p>
                        <b>Vitamin A: </b>
                        <span>
                          {
                            recommendation.nutritionRecommendation.vitamins
                              .vitaminA
                          }
                        </span>
                      </p>
                      <p>
                        <b>Vitamin B: </b>
                        <span>
                          {
                            recommendation.nutritionRecommendation.vitamins
                              .vitaminB
                          }
                        </span>
                      </p>

                      <p>
                        <b>Vitamin C: </b>
                        <span>
                          {
                            recommendation.nutritionRecommendation.vitamins
                              .vitaminC
                          }
                        </span>
                      </p>

                      <p>
                        <b>Vitamin D: </b>
                        <span>
                          {
                            recommendation.nutritionRecommendation.vitamins
                              .vitaminD
                          }
                        </span>
                      </p>

                      <p>
                        <b>Vitamin E: </b>
                        <span>
                          {
                            recommendation.nutritionRecommendation.vitamins
                              .vitaminE
                          }
                        </span>
                      </p>

                      <p>
                        <b>Vitamin K: </b>
                        <span>
                          {
                            recommendation.nutritionRecommendation.vitamins
                              .vitaminK
                          }
                        </span>
                      </p>
                    </div>

                    <div className="w-1/3">
                      <h1 className="font-bold text-md text-red-900 mt-5">
                        Minerals
                      </h1>

                      <p>
                        <b>Calsium: </b>
                        <span>
                          {
                            recommendation.nutritionRecommendation.minerals
                              .calcium
                          }
                        </span>
                      </p>
                      <p>
                        <b>Potasium: </b>
                        <span>
                          {
                            recommendation.nutritionRecommendation.minerals
                              .potacium
                          }
                        </span>
                      </p>

                      <p>
                        <b>Iron: </b>
                        <span>
                          {recommendation.nutritionRecommendation.minerals.iron}
                        </span>
                      </p>

                      <p>
                        <b>Magnezium: </b>
                        <span>
                          {
                            recommendation.nutritionRecommendation.minerals
                              .magnezium
                          }
                        </span>
                      </p>

                      <p>
                        <b>Zinc: </b>
                        <span>
                          {recommendation.nutritionRecommendation.minerals.zinc}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex flex-wrap">
                    <h1 className="font-bold text-xl text-red-900 mt-5 w-full text-left">
                      Physical fitness recommendation
                    </h1>
                    <div className="w-1/3">
                      <h1 className="font-bold text-md text-red-900 mt-5">
                        Gym
                      </h1>
                      <p>
                        <b>Recommended: </b>
                        <span>
                          {recommendation.fitnessRecommendation.gym.gymOption}
                        </span>
                      </p>
                      <p>
                        <b>Number of times: </b>
                        <span>
                          {
                            recommendation.fitnessRecommendation.gym
                              .gymNumberOfTimes
                          }
                        </span>
                      </p>

                      <p>
                        <b>Intervals: </b>
                        <span>
                          {
                            recommendation.fitnessRecommendation.gym
                              .gymIntervals
                          }
                        </span>
                      </p>
                    </div>

                    <div className="w-1/3">
                      <h1 className="font-bold text-md text-red-900 mt-5">
                        Yoga
                      </h1>
                      <p>
                        <b>Recommended: </b>
                        <span>
                          {recommendation.fitnessRecommendation.yoga.yogaOption}
                        </span>
                      </p>
                      <p>
                        <b>Number of times: </b>
                        <span>
                          {
                            recommendation.fitnessRecommendation.yoga
                              .yogaNumberOfTimes
                          }
                        </span>
                      </p>

                      <p>
                        <b>Intervals: </b>
                        <span>
                          {
                            recommendation.fitnessRecommendation.yoga
                              .yogaIntervals
                          }
                        </span>
                      </p>
                    </div>

                    <div className="w-1/3">
                      <h1 className="font-bold text-md text-red-900 mt-5">
                        Road word
                      </h1>
                      <p>
                        <b>Recommended: </b>
                        <span>
                          {
                            recommendation.fitnessRecommendation.roadWork
                              .roadWorkOption
                          }
                        </span>
                      </p>
                      <p>
                        <b>Number of times: </b>
                        <span>
                          {
                            recommendation.fitnessRecommendation.roadWork
                              .roadWorkNumberOfTimes
                          }
                        </span>
                      </p>

                      <p>
                        <b>Intervals: </b>
                        <span>
                          {
                            recommendation.fitnessRecommendation.roadWork
                              .roadWorkIntervals
                          }
                        </span>
                      </p>
                    </div>

                    <div className="w-full">
                      <h1 className="font-bold text-xl text-red-900 mt-5 w-full">
                        General instructions
                      </h1>
                      <p className="text-justify p-5">
                        {recommendation.generalComment}
                      </p>
                    </div>
                    <div className="w-full flex flex-wrap justify-end">
                      <button
                        className="p-2 rounded-sm bg-blue-700 text-white mx-2 w-16"
                        onClick={() => {
                          navigate(
                            `/recommendations/${recommendation.recommendationId}`
                          );
                          setEditableRecom([recommendation]);
                        }}
                      >
                        Edit
                      </button>
                      <button className="p-2 rounded-sm bg-red-500 text-white mx-2 w-16">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        // RECOMMENDATION FORM
        <RecommendationForm
          editableRecom={editableRecom}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default Recommendations;
