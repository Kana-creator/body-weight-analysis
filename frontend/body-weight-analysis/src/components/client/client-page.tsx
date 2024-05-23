import React, { useState } from "react";
import InputField from "../formFields/input-field";
import CheckEmptyField from "../globleActions/check-empty-fields";
import ClientQueryModel from "./query-model";
import CheckRecommendation from "./check-recomentation";
import Header from "../admin/header";
import { RecommendationModel } from "../admin/recommendation-model";
import Footer from "./footer";
// import { UserModel } from "../admin/user-model";

interface Props {}

const ClientPage: React.FC<Props> = () => {
  const [empty, setEmpty] = useState<boolean>(true);
  const [clientQuery, setClientQuery] = useState<ClientQueryModel>({
    age: 0,
    weight: 0,
    height: 0,
  });

  const [recommendations, setRecommendations] = useState<RecommendationModel[]>(
    []
  );

  const handleFetchRecommendation = () => {
    setRecommendations([
      {
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
            option: "No",
            numberOfTimes: 0,
            intervals: "NA",
          },

          yoga: {
            option: "No",
            numberOfTimes: 0,
            intervals: "NA",
          },

          roadWork: {
            option: "No",
            numberOfTimes: 0,
            intervals: "NA",
          },
        },

        generalComment:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel veritatis expedita rem possimus autem? Facere, corporis praesentium! Inventore sit quidem neque deleniti dignissimos, facere culpa porro tempore asperiores corporis. Beatae deserunt non error repudiandae officia nulla exercitationem ipsum, inventore corporis quaerat molestiae quibusdam dolores. Exercitationem est asperiores nostrum deserunt. Voluptas eveniet doloremque autem excepturi nostrum delectus atque, amet deleniti provident pariatur nesciunt. Itaque perferendis, aliquid voluptates illum rerum, ex sit aspernatur est quas sunt iure corrupti exercitationem deserunt dolore voluptate labore unde? Nobis, nesciunt harum voluptatem quaerat odio doloribus impedit dolor ducimus ipsum neque velit, nihil ipsam reiciendis molestiae sit ea! Ipsa tempora pariatur libero facere porro ducimus expedita voluptatum nostrum repudiandae optio exercitationem veritatis aliquam et debitis, cum vitae culpa animi eum quia ipsum! Odio doloribus voluptatibus alias at enim quam omnis rerum quis consequatur, impedit mollitia quo fugit nihil tempore. Delectus modi laudantium, ducimus reiciendis dolorum fuga voluptatibus ex alias beatae voluptate odit illo ab totam, voluptatem fugit earum exercitationem iusto perspiciatis velit omnis voluptatum nam porro corrupti. Aperiam totam nobis velit omnis asperiores? Dolores ratione ipsum, veritatis dignissimos, soluta asperiores adipisci maxime maiores quasi atque laudantium pariatur explicabo praesentium ipsa ea omnis voluptate unde voluptates vitae cumque perferendis est eos quis alias. Eveniet veritatis perferendis fuga ipsum itaque dolores ratione reprehenderit odio, repellat blanditiis alias in! Recusandae fuga tenetur libero mollitia a, temporibus fugit officiis maiores quo quas itaque praesentium modi dolore excepturi ea aut sapiente optio non alias deserunt animi perspiciatis provident cum repellendus? Dignissimos, saepe aut voluptate sit molestiae molestias quibusdam. Ea, maxime eius. Totam officia et eum aperiam reiciendis fuga consequatur ipsum iusto voluptate culpa nobis repellendus exercitationem, tempora maiores deserunt animi ipsa! Temporibus mollitia ratione neque velit dignissimos beatae repellat unde, dolorum enim architecto aspernatur aut incidunt, commodi corrupti illo. Commodi, officia ipsa.",
      },
    ]);
  };

  // const [currentUser, setCurrentUser] = useState<UserModel[]>([]);

  // useEffect(() => {
  //   const user: UserModel = JSON.parse(localStorage.getItem("user") as string);
  //   setCurrentUser([user]);
  // }, []);

  return (
    <div className="h-screen w-full flex flex-wrap justify-center">
      <Header />
      <div className="lg:w-2/3 sm:w-full md:w-full p-5 h-fit flex flex-wrap justify-center">
        <div className="form-area  w-full h-fit bg-black mt-20">
          <form
            onSubmit={(e: React.FormEvent) => e.preventDefault()}
            action=""
            className="lg:flex md:flex  flex-wrap bg-red-100 items-center justify-center p-3 w-full"
          >
            <InputField
              className={"form-group px-5 sm:w-full md:w-1/4 lg:w-1/4"}
              label={"Age (years)"}
              type={"number"}
              id={"age"}
              labelSpan={"*"}
              labelClass="text-black"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                CheckEmptyField(e.target, setEmpty);
                setClientQuery({ ...clientQuery, age: Number(e.target.value) });
              }}
            />

            <InputField
              className={"form-group px-5 sm:w-full md:w-1/4 lg:w-1/4"}
              label={"Weight (kg)"}
              type={"number"}
              id={"weight"}
              labelSpan={"*"}
              labelClass="text-black"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                CheckEmptyField(e.target, setEmpty);
                setClientQuery({
                  ...clientQuery,
                  weight: Number(e.target.value),
                });
              }}
            />

            <InputField
              className={"form-group px-5 sm:w-full md:w-1/4 lg:w-1/4"}
              label={"Height (cm)"}
              type={"number"}
              id={"height"}
              labelSpan={"*"}
              labelClass="text-black"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                CheckEmptyField(e.target, setEmpty);
                setClientQuery({
                  ...clientQuery,
                  height: Number(e.target.value),
                });
              }}
            />
            <div className={"px-5 sm:w-full md:w-1/4 lg:w-1/4"}>
              <button
                className="bg-blue-200 p-2 rounded-md w-full"
                onClick={() =>
                  CheckRecommendation(
                    [
                      document.getElementById("age") as HTMLInputElement,
                      document.getElementById("weight") as HTMLInputElement,
                      document.getElementById("height") as HTMLInputElement,
                    ],
                    setEmpty,
                    clientQuery,
                    empty,
                    handleFetchRecommendation
                  )
                }
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="results-area min-h-screen w-full relative flex flex-wrap">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="w-full min-h-60 mb-32">
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
                  <h1 className="font-bold text-xl text-red-900 mt-5 pt-5 w-full">
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
                        {recommendation.nutritionRecommendation.Proteins}
                      </span>
                    </p>

                    <p>
                      <b>Fats: </b>
                      <span>{recommendation.nutritionRecommendation.Fats}</span>
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
                  <h1 className="font-bold text-xl text-red-900 mt-5 pt-5 w-full">
                    Physical fitness recommendation
                  </h1>
                  <div className="w-1/3">
                    <h1 className="font-bold text-md text-red-900 mt-5">Gym</h1>
                    <p>
                      <b>Recommended: </b>
                      <span>
                        {recommendation.fitnessRecommendation.gym.option}
                      </span>
                    </p>
                    <p>
                      <b>Number of times: </b>
                      <span>
                        {recommendation.fitnessRecommendation.gym.numberOfTimes}
                      </span>
                    </p>

                    <p>
                      <b>Intervals: </b>
                      <span>
                        {recommendation.fitnessRecommendation.gym.intervals}
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
                        {recommendation.fitnessRecommendation.yoga.option}
                      </span>
                    </p>
                    <p>
                      <b>Number of times: </b>
                      <span>
                        {
                          recommendation.fitnessRecommendation.yoga
                            .numberOfTimes
                        }
                      </span>
                    </p>

                    <p>
                      <b>Intervals: </b>
                      <span>
                        {recommendation.fitnessRecommendation.yoga.intervals}
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
                        {recommendation.fitnessRecommendation.roadWork.option}
                      </span>
                    </p>
                    <p>
                      <b>Number of times: </b>
                      <span>
                        {
                          recommendation.fitnessRecommendation.roadWork
                            .numberOfTimes
                        }
                      </span>
                    </p>

                    <p>
                      <b>Intervals: </b>
                      <span>
                        {
                          recommendation.fitnessRecommendation.roadWork
                            .intervals
                        }
                      </span>
                    </p>
                  </div>

                  <div className="w-full">
                    <h1 className="font-bold text-xl text-red-900 mt-5 pm-5 w-full">
                      General instructions
                    </h1>
                    <p className="text-justify p-5">
                      {recommendation.generalComment}
                    </p>
                  </div>
                  <div className="w-full flex flex-wrap justify-end">
                    <button className="p-2 rounded-sm bg-blue-700 text-white mx-2 w-16">
                      Print
                    </button>
                    {/* <button className="p-2 rounded-sm bg-red-500 text-white mx-2 w-16">
                      Delete
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
