import React, { useEffect, useState } from "react";
import { RecommendationModel } from "./recommendation-model";
import RecommendationForm from "./recommendation-form";
import { useNavigate, useParams } from "react-router-dom";

interface Props {}
const Recommendations: React.FC<Props> = () => {
  const [recommendations, setRecommendations] = useState<RecommendationModel[]>(
    []
  );

  const [editableRecom, setEditableRecom] = useState<RecommendationModel[]>([]);
  const [recomendation, setRecommendation] = useState<RecommendationModel[]>(
    []
  );

  const [showForm, setShowForm] = useState<boolean>(false);
  // const [update, setUpdate] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    id
      ? setEditableRecom(recommendations.filter((rec) => rec.id == id))
      : setEditableRecom([]);
  }, [id]);

  useEffect(() => {
    setRecommendations([
      {
        id: "1",
        userId: 1,
        ageLowerLimit: 1,
        ageUpperLimit: 3,
        weight: 23,
        height: 130,

        nutritionRecommendation: {
          water: "moderate",
          carbohydrates: "very low",
          Proteins: "high",
          Fats: "Low",

          vitamins: {
            vitaminA: "Moderate",
            vitaminB: "very high",
            vitaminC: "low",
            vitaminD: "very low",
            vitaminE: "high",
            vitaminK: "very high",
          },

          minerals: {
            calcium: "moderate",
            potacium: "low",
            iron: "modorate",
            magnezium: "very low",
            zinc: "No",
          },
        },

        fitnessRecommendation: {
          gym: {
            gymOption: "No",
            gymNumberOfTimes: 2,
            gymIntervals: "NA",
          },

          yoga: {
            yogaOption: "No",
            yogaNumberOfTimes: 0,
            yogaIntervals: "NA",
          },

          roadWork: {
            roadWorkOption: "No",
            roadWorkNumberOfTimes: 0,
            roadWorkIntervals: "NA",
          },
        },

        generalComment:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel veritatis expedita rem possimus autem? Facere, corporis praesentium! Inventore sit quidem neque deleniti dignissimos, facere culpa porro tempore asperiores corporis. Beatae deserunt non error repudiandae officia nulla exercitationem ipsum, inventore corporis quaerat molestiae quibusdam dolores. Exercitationem est asperiores nostrum deserunt. Voluptas eveniet doloremque autem excepturi nostrum delectus atque, amet deleniti provident pariatur nesciunt. Itaque perferendis, aliquid voluptates illum rerum, ex sit aspernatur est quas sunt iure corrupti exercitationem deserunt dolore voluptate labore unde? Nobis, nesciunt harum voluptatem quaerat odio doloribus impedit dolor ducimus ipsum neque velit, nihil ipsam reiciendis molestiae sit ea! Ipsa tempora pariatur libero facere porro ducimus expedita voluptatum nostrum repudiandae optio exercitationem veritatis aliquam et debitis, cum vitae culpa animi eum quia ipsum! Odio doloribus voluptatibus alias at enim quam omnis rerum quis consequatur, impedit mollitia quo fugit nihil tempore. Delectus modi laudantium, ducimus reiciendis dolorum fuga voluptatibus ex alias beatae voluptate odit illo ab totam, voluptatem fugit earum exercitationem iusto perspiciatis velit omnis voluptatum nam porro corrupti. Aperiam totam nobis velit omnis asperiores? Dolores ratione ipsum, veritatis dignissimos, soluta asperiores adipisci maxime maiores quasi atque laudantium pariatur explicabo praesentium ipsa ea omnis voluptate unde voluptates vitae cumque perferendis est eos quis alias. Eveniet veritatis perferendis fuga ipsum itaque dolores ratione reprehenderit odio, repellat blanditiis alias in! Recusandae fuga tenetur libero mollitia a, temporibus fugit officiis maiores quo quas itaque praesentium modi dolore excepturi ea aut sapiente optio non alias deserunt animi perspiciatis provident cum repellendus? Dignissimos, saepe aut voluptate sit molestiae molestias quibusdam. Ea, maxime eius. Totam officia et eum aperiam reiciendis fuga consequatur ipsum iusto voluptate culpa nobis repellendus exercitationem, tempora maiores deserunt animi ipsa! Temporibus mollitia ratione neque velit dignissimos beatae repellat unde, dolorum enim architecto aspernatur aut incidunt, commodi corrupti illo. Commodi, officia ipsa.",
      },
      {
        id: "2",
        userId: 1,
        ageLowerLimit: 1,
        ageUpperLimit: 3,
        weight: 23,
        height: 130,

        nutritionRecommendation: {
          water: "moderate",
          carbohydrates: "very low",
          Proteins: "high",
          Fats: "Low",

          vitamins: {
            vitaminA: "Moderate",
            vitaminB: "very high",
            vitaminC: "low",
            vitaminD: "very low",
            vitaminE: "high",
            vitaminK: "very high",
          },

          minerals: {
            calcium: "moderate",
            potacium: "low",
            iron: "modorate",
            magnezium: "very low",
            zinc: "No",
          },
        },

        fitnessRecommendation: {
          gym: {
            gymOption: "No",
            gymNumberOfTimes: 0,
            gymIntervals: "NA",
          },

          yoga: {
            yogaOption: "No",
            yogaNumberOfTimes: 0,
            yogaIntervals: "NA",
          },

          roadWork: {
            roadWorkOption: "No",
            roadWorkNumberOfTimes: 0,
            roadWorkIntervals: "NA",
          },
        },

        generalComment:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel veritatis expedita rem possimus autem? Facere, corporis praesentium! Inventore sit quidem neque deleniti dignissimos, facere culpa porro tempore asperiores corporis. Beatae deserunt non error repudiandae officia nulla exercitationem ipsum, inventore corporis quaerat molestiae quibusdam dolores. Exercitationem est asperiores nostrum deserunt. Voluptas eveniet doloremque autem excepturi nostrum delectus atque, amet deleniti provident pariatur nesciunt. Itaque perferendis, aliquid voluptates illum rerum, ex sit aspernatur est quas sunt iure corrupti exercitationem deserunt dolore voluptate labore unde? Nobis, nesciunt harum voluptatem quaerat odio doloribus impedit dolor ducimus ipsum neque velit, nihil ipsam reiciendis molestiae sit ea! Ipsa tempora pariatur libero facere porro ducimus expedita voluptatum nostrum repudiandae optio exercitationem veritatis aliquam et debitis, cum vitae culpa animi eum quia ipsum! Odio doloribus voluptatibus alias at enim quam omnis rerum quis consequatur, impedit mollitia quo fugit nihil tempore. Delectus modi laudantium, ducimus reiciendis dolorum fuga voluptatibus ex alias beatae voluptate odit illo ab totam, voluptatem fugit earum exercitationem iusto perspiciatis velit omnis voluptatum nam porro corrupti. Aperiam totam nobis velit omnis asperiores? Dolores ratione ipsum, veritatis dignissimos, soluta asperiores adipisci maxime maiores quasi atque laudantium pariatur explicabo praesentium ipsa ea omnis voluptate unde voluptates vitae cumque perferendis est eos quis alias. Eveniet veritatis perferendis fuga ipsum itaque dolores ratione reprehenderit odio, repellat blanditiis alias in! Recusandae fuga tenetur libero mollitia a, temporibus fugit officiis maiores quo quas itaque praesentium modi dolore excepturi ea aut sapiente optio non alias deserunt animi perspiciatis provident cum repellendus? Dignissimos, saepe aut voluptate sit molestiae molestias quibusdam. Ea, maxime eius. Totam officia et eum aperiam reiciendis fuga consequatur ipsum iusto voluptate culpa nobis repellendus exercitationem, tempora maiores deserunt animi ipsa! Temporibus mollitia ratione neque velit dignissimos beatae repellat unde, dolorum enim architecto aspernatur aut incidunt, commodi corrupti illo. Commodi, officia ipsa.",
      },
    ]);
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
      {!id && !showForm ? (
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
                  <h1 className="font-bold text-xl text-red-900 mt-5 w-full text-center">
                    Nutrition recommendation
                  </h1>
                  <div className="w-1/3">
                    <h1 className="font-bold text-lg text-red-900 mt-5">
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
                        {recommendation.nutritionRecommendation.Proteins}
                      </span>
                    </p>

                    <p>
                      <b>Fats: </b>
                      <span>{recommendation.nutritionRecommendation.Fats}</span>
                    </p>
                  </div>

                  <div className="w-1/3">
                    <h1 className="font-bold text-lg text-red-900 mt-5 w-full">
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
                    <h1 className="font-bold text-lg text-red-900 mt-5">
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
                  <h1 className="font-bold text-xl text-red-900 mt-5 w-full text-center">
                    Physical fitness recommendation
                  </h1>
                  <div className="w-1/3">
                    <h1 className="font-bold text-lg text-red-900 mt-5">Gym</h1>
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
                        {recommendation.fitnessRecommendation.gym.gymIntervals}
                      </span>
                    </p>
                  </div>

                  <div className="w-1/3">
                    <h1 className="font-bold text-lg text-red-900 mt-5">
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
                    <h1 className="font-bold text-lg text-red-900 mt-5">
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
                        navigate(`/recommendations/${recommendation.id}`);
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
