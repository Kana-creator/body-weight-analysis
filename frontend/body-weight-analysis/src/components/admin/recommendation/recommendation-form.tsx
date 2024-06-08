import React, { useEffect, useState } from "react";
import { RecommendationModel } from "./recommendation-model";
import { useNavigate, useParams } from "react-router-dom";
import CheckEmptySelect from "../../globleActions/check-empty-select";
import CheckEmptyField from "../../globleActions/check-empty-fields";
import AddRecommendation from "./add-recommendation";
import { UserModel } from "../user-model";
import UpdateRecommendation from "./update-recommendation";

interface Props {
  editableRecom: RecommendationModel[];
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const RecommendationForm: React.FC<Props> = ({
  editableRecom,
  setShowForm,
}) => {
  const [message, setMessage] = useState<string>("");
  const [update, setUpdate] = useState<boolean>(false);
  const [recommendation, setRecommendation] = useState<RecommendationModel>({
    recommendationId: "",
    user: { userId: 1 },
    ageLowerLimit: 0,
    ageUpperLimit: 0,
    weightLowerLimit: 0,
    weightUpperLimit: 0,
    heightLowerLimit: 0,
    heightUpperLimit: 0,

    nutritionRecommendation: {
      water: "",
      carbohydrates: "",
      proteins: "",
      fats: "",

      vitamins: {
        vitaminA: "",
        vitaminB: "",
        vitaminC: "",
        vitaminD: "",
        vitaminE: "",
        vitaminK: "",
      },

      minerals: {
        calcium: "",
        potacium: "",
        iron: "",
        magnezium: "",
        zinc: "",
      },
    },

    fitnessRecommendation: {
      gym: {
        gymOption: "",
        gymNumberOfTimes: 0,
        gymIntervals: "NA",
      },

      yoga: {
        yogaOption: "",
        yogaNumberOfTimes: 0,
        yogaIntervals: "NA",
      },

      roadWork: {
        roadWorkOption: "",
        roadWorkNumberOfTimes: 0,
        roadWorkIntervals: "NA",
      },
    },

    generalComment: "",
  });

  const [empty, setEmpty] = useState<boolean>(true);
  const navigate = useNavigate();
  const { recommendationId } = useParams();

  useEffect(() => {
    if (recommendationId) {
      setRecommendation(editableRecom[0]);
      const lower_limit: HTMLInputElement = document.getElementById(
        "lower_limit"
      ) as HTMLInputElement;
      lower_limit.focus();
    } else {
    }
  }, [recommendationId]);

  useEffect(() => {
    const user: UserModel = JSON.parse(localStorage.getItem("user") as string);
    setRecommendation({
      ...recommendation,
      user: { ...user, userId: Number(user.userId) },
    });
  }, []);

  return (
    <div className="w-full py-5 bg-white p-2 hover:shadow-red-900 shadow-2xl text-xs">
      <div className="w-full flex justify-end">
        <button
          className="bg-black text-white p-2 rounded-sm"
          onClick={() => {
            navigate("/recommendations");
            setShowForm(false);
          }}
        >
          X
        </button>
      </div>
      <div className="w-full min-h-screen p-5">
        <div className="w-full h-full ">
          <div className="w-1/2 flex flex-wrap justify-between items-center">
            <h1 className="font-bold text-xl text-red-900">REC</h1>

            <div className="form-group flex flex-wrap justify-between items-center py-1 w-full">
              <label className="w-full p-2">
                <b>Age Limit *</b>
              </label>
              <div className="w-1/3">
                <input
                  type="number"
                  placeholder="Age in yrs"
                  className="p-2 w-full"
                  id="lower_limit"
                  defaultValue={
                    recommendationId ? `${editableRecom[0].ageLowerLimit}` : ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    CheckEmptyField(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      ageLowerLimit: Number(e.target.value),
                    });
                  }}
                />
                <small className="text-red-500 text-sm w-full ">.</small>
              </div>
              <h1 className="w-1/5 text-center">
                <b> To </b>
              </h1>
              <div className="w-1/3">
                <input
                  type="number"
                  placeholder="Ange in yrs"
                  className="p-2 w-full"
                  id="upper_limit"
                  defaultValue={
                    recommendationId ? editableRecom[0].ageUpperLimit : ""
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    CheckEmptyField(e.target, setEmpty);

                    setRecommendation({
                      ...recommendation,
                      ageUpperLimit: Number(e.target.value),
                    });
                  }}
                />
                <small className="text-red-500 text-sm w-full">.</small>
              </div>
            </div>

            <div className="w-1/3 flex flex-wrap  items-center py-1">
              <label className="w-full p-2">
                <b>Weight limit*</b>
              </label>
              <input
                type="number"
                className="w-full"
                placeholder="Weight in kg"
                id="weight"
                defaultValue={
                  recommendationId ? editableRecom[0].weightLowerLimit : ""
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  CheckEmptyField(e.target, setEmpty);
                  setRecommendation({
                    ...recommendation,
                    weightLowerLimit: Number(e.target.value),
                  });
                }}
              />
              <small className="w-full text-red-500 text-sm">.</small>
            </div>
            <h1 className="w-1/5 text-center">
              <b> To </b>
            </h1>
            <div className="w-1/3">
              <input
                type="number"
                className="w-full"
                placeholder="Weight in kg"
                id="weight"
                defaultValue={
                  recommendationId ? editableRecom[0].weightUpperLimit : ""
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  CheckEmptyField(e.target, setEmpty);
                  setRecommendation({
                    ...recommendation,
                    weightUpperLimit: Number(e.target.value),
                  });
                }}
              />
              <small className="w-full text-red-500 text-sm">.</small>
            </div>

            <div className="w-1/3 flex flex-wrap items-center py-1">
              <label className="w-full p-2">
                <b>Height*</b>
              </label>
              <input
                type="Number"
                className="w-full"
                placeholder="Height in cm"
                id="height"
                defaultValue={
                  recommendationId ? editableRecom[0].heightLowerLimit : ""
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  CheckEmptyField(e.target, setEmpty);
                  setRecommendation({
                    ...recommendation,
                    heightLowerLimit: Number(e.target.value),
                  });
                }}
              />
              <small className="w-full text-red-500 text-sm">.</small>
            </div>
            <h1 className="w-1/5 text-center">
              <b> To </b>
            </h1>
            <div className="w-1/3">
              <input
                type="Number"
                className="w-full"
                placeholder="Height in cm"
                id="height"
                defaultValue={
                  recommendationId ? editableRecom[0].heightUpperLimit : ""
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  CheckEmptyField(e.target, setEmpty);
                  setRecommendation({
                    ...recommendation,
                    heightUpperLimit: Number(e.target.value),
                  });
                }}
              />
              <small className="w-full text-red-500 text-sm">.</small>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-around py-20">
            <h1 className="font-bold text-xl text-red-900 mt-5 w-full text-center">
              Nutrition recommendation
            </h1>
            <div className="w-1/3">
              <h1 className="font-bold text-lg text-red-900 mt-5">General</h1>
              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Water*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="water"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        water: e.target.value,
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={editableRecom[0].nutritionRecommendation.water}
                    >
                      {editableRecom[0].nutritionRecommendation.water}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Carbohydraes*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="carbohydrates"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        carbohydrates: e.target.value,
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].nutritionRecommendation.carbohydrates
                      }
                    >
                      {editableRecom[0].nutritionRecommendation.carbohydrates}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Proteins*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="proteins"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        proteins: e.target.value,
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={editableRecom[0].nutritionRecommendation.proteins}
                    >
                      {editableRecom[0].nutritionRecommendation.proteins}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Fats*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="fats"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        fats: e.target.value,
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={editableRecom[0].nutritionRecommendation.fats}
                    >
                      {editableRecom[0].nutritionRecommendation.fats}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>
            </div>

            <div className="w-1/3">
              <h1 className="font-bold text-lg text-red-900 mt-5 w-full">
                Vitamins
              </h1>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Vitamin A*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="vitaminA"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        vitamins: {
                          ...recommendation.nutritionRecommendation.vitamins,
                          vitaminA: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].nutritionRecommendation.vitamins
                          .vitaminA
                      }
                    >
                      {
                        editableRecom[0].nutritionRecommendation.vitamins
                          .vitaminA
                      }
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Vitamin B*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="vitaminB"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        vitamins: {
                          ...recommendation.nutritionRecommendation.vitamins,
                          vitaminB: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].nutritionRecommendation.vitamins
                          .vitaminB
                      }
                    >
                      {
                        editableRecom[0].nutritionRecommendation.vitamins
                          .vitaminB
                      }
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Vitamin C*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="vitaminC"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        vitamins: {
                          ...recommendation.nutritionRecommendation.vitamins,
                          vitaminC: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].nutritionRecommendation.vitamins
                          .vitaminC
                      }
                    >
                      {
                        editableRecom[0].nutritionRecommendation.vitamins
                          .vitaminC
                      }
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Vitamin D*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="vitaminD"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        vitamins: {
                          ...recommendation.nutritionRecommendation.vitamins,
                          vitaminD: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].nutritionRecommendation.vitamins
                          .vitaminD
                      }
                    >
                      {
                        editableRecom[0].nutritionRecommendation.vitamins
                          .vitaminD
                      }
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Vitamin E*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="vitaminE"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        vitamins: {
                          ...recommendation.nutritionRecommendation.vitamins,
                          vitaminE: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].nutritionRecommendation.vitamins
                          .vitaminE
                      }
                    >
                      {
                        editableRecom[0].nutritionRecommendation.vitamins
                          .vitaminE
                      }
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Vitamin K*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="vitaminK"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        vitamins: {
                          ...recommendation.nutritionRecommendation.vitamins,
                          vitaminK: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].nutritionRecommendation.vitamins
                          .vitaminK
                      }
                    >
                      {
                        editableRecom[0].nutritionRecommendation.vitamins
                          .vitaminK
                      }
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>
            </div>

            <div className="w-1/3">
              <h1 className="font-bold text-lg text-red-900 mt-5">Minerals</h1>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Calcium*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="calcium"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        minerals: {
                          ...recommendation.nutritionRecommendation.minerals,
                          calcium: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].nutritionRecommendation.minerals
                          .calcium
                      }
                    >
                      {
                        editableRecom[0].nutritionRecommendation.minerals
                          .calcium
                      }
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Pottasium*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="potesium"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        minerals: {
                          ...recommendation.nutritionRecommendation.minerals,
                          potacium: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].nutritionRecommendation.minerals
                          .potacium
                      }
                    >
                      {
                        editableRecom[0].nutritionRecommendation.minerals
                          .potacium
                      }
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Iron*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="iron"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        minerals: {
                          ...recommendation.nutritionRecommendation.minerals,
                          iron: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].nutritionRecommendation.minerals.iron
                      }
                    >
                      {editableRecom[0].nutritionRecommendation.minerals.iron}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Magnesium*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="magnesium"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        minerals: {
                          ...recommendation.nutritionRecommendation.minerals,
                          magnezium: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].nutritionRecommendation.minerals
                          .magnezium
                      }
                    >
                      {
                        editableRecom[0].nutritionRecommendation.minerals
                          .magnezium
                      }
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Zinc*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="zinc"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      nutritionRecommendation: {
                        ...recommendation.nutritionRecommendation,
                        minerals: {
                          ...recommendation.nutritionRecommendation.minerals,
                          zinc: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].nutritionRecommendation.minerals.zinc
                      }
                    >
                      {editableRecom[0].nutritionRecommendation.minerals.zinc}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="veryLess">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="veryMuch">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap">
            <h1 className="font-bold text-xl text-red-900 mt-5 w-full text-center">
              Physical fitness recommendation
            </h1>
            <div className="w-1/3">
              <h1 className="font-bold text-lg text-red-900 mt-5">Gym</h1>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Recommended*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="gym"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      fitnessRecommendation: {
                        ...recommendation.fitnessRecommendation,
                        gym: {
                          ...recommendation.fitnessRecommendation.gym,
                          gymOption: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].fitnessRecommendation.gym.gymOption
                      }
                    >
                      {editableRecom[0].fitnessRecommendation.gym.gymOption}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Number of times</b>
                </label>
                <input
                  type="number"
                  className="w-3/4 p-2 border-2 border-black"
                  id="gym_NOT"
                  defaultValue={
                    !recommendationId
                      ? ""
                      : editableRecom[0].fitnessRecommendation.gym
                          .gymNumberOfTimes
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRecommendation({
                      ...recommendation,
                      fitnessRecommendation: {
                        ...recommendation.fitnessRecommendation,
                        gym: {
                          ...recommendation.fitnessRecommendation.gym,
                          gymNumberOfTimes: Number(e.target.value),
                        },
                      },
                    })
                  }
                />
                <small className="w-full">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Intervals</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="gym_interval"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setRecommendation({
                      ...recommendation,
                      fitnessRecommendation: {
                        ...recommendation.fitnessRecommendation,
                        gym: {
                          ...recommendation.fitnessRecommendation.gym,
                          gymIntervals: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="NA">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].fitnessRecommendation.gym.gymIntervals
                      }
                    >
                      {editableRecom[0].fitnessRecommendation.gym.gymIntervals}
                    </option>
                  )}
                  <option value="annually">Annually</option>
                  <option value="quatery">Quatery</option>
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                  <option value="daily">Daily</option>
                </select>
                <small className="w-full">.</small>
              </div>
            </div>

            <div className="w-1/3">
              <h1 className="font-bold text-lg text-red-900 mt-5">Yoga</h1>
              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Recommended*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="yoga"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      fitnessRecommendation: {
                        ...recommendation.fitnessRecommendation,
                        yoga: {
                          ...recommendation.fitnessRecommendation.yoga,
                          yogaOption: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].fitnessRecommendation.yoga.yogaOption
                      }
                    >
                      {editableRecom[0].fitnessRecommendation.yoga.yogaOption}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Number of times</b>
                </label>
                <input
                  type="number"
                  className="w-3/4 p-2 border-2 border-black"
                  id="yoga_NOT"
                  defaultValue={
                    !recommendationId
                      ? ""
                      : editableRecom[0].fitnessRecommendation.yoga
                          .yogaNumberOfTimes
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRecommendation({
                      ...recommendation,
                      fitnessRecommendation: {
                        ...recommendation.fitnessRecommendation,
                        yoga: {
                          ...recommendation.fitnessRecommendation.yoga,
                          yogaNumberOfTimes: Number(e.target.value),
                        },
                      },
                    })
                  }
                />
                <small className="w-full">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Intervals</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="yog_interval"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setRecommendation({
                      ...recommendation,
                      fitnessRecommendation: {
                        ...recommendation.fitnessRecommendation,
                        yoga: {
                          ...recommendation.fitnessRecommendation.yoga,
                          yogaIntervals: e.target.value,
                        },
                      },
                    })
                  }
                >
                  {!recommendationId ? (
                    <option value="NA">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].fitnessRecommendation.yoga
                          .yogaIntervals
                      }
                    >
                      {
                        editableRecom[0].fitnessRecommendation.yoga
                          .yogaIntervals
                      }
                    </option>
                  )}
                  <option value="annually">Annually</option>
                  <option value="quatery">Quatery</option>
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                  <option value="daily">Daily</option>
                </select>
                <small className="w-full">.</small>
              </div>
            </div>

            <div className="w-1/3">
              <h1 className="font-bold text-lg text-red-900 mt-5">Road word</h1>
              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Recommended*</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="roadwork"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    CheckEmptySelect(e.target, setEmpty);
                    setRecommendation({
                      ...recommendation,
                      fitnessRecommendation: {
                        ...recommendation.fitnessRecommendation,
                        roadWork: {
                          ...recommendation.fitnessRecommendation.roadWork,
                          roadWorkOption: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!recommendationId ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].fitnessRecommendation.roadWork
                          .roadWorkOption
                      }
                    >
                      {
                        editableRecom[0].fitnessRecommendation.roadWork
                          .roadWorkOption
                      }
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Number of times</b>
                </label>
                <input
                  type="number"
                  className="w-3/4 p-2 border-2 border-black"
                  id="roadwork_NOT"
                  defaultValue={
                    !recommendationId
                      ? ""
                      : editableRecom[0].fitnessRecommendation.roadWork
                          .roadWorkNumberOfTimes
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRecommendation({
                      ...recommendation,
                      fitnessRecommendation: {
                        ...recommendation.fitnessRecommendation,
                        roadWork: {
                          ...recommendation.fitnessRecommendation.roadWork,
                          roadWorkNumberOfTimes: Number(e.target.value),
                        },
                      },
                    })
                  }
                />
                <small className="w-full">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Intervals</b>
                </label>
                <select
                  className="w-3/4 p-2 border-2 border-black"
                  id="roadwork_interval"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setRecommendation({
                      ...recommendation,
                      fitnessRecommendation: {
                        ...recommendation.fitnessRecommendation,
                        roadWork: {
                          ...recommendation.fitnessRecommendation.roadWork,
                          roadWorkIntervals: e.target.value,
                        },
                      },
                    })
                  }
                >
                  {!recommendationId ? (
                    <option value="NA">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        editableRecom[0].fitnessRecommendation.roadWork
                          .roadWorkIntervals
                      }
                    >
                      {
                        editableRecom[0].fitnessRecommendation.roadWork
                          .roadWorkIntervals
                      }
                    </option>
                  )}
                  <option value="annually">Annually</option>
                  <option value="quatery">Quatery</option>
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                  <option value="daily">Daily</option>
                </select>
                <small className="w-full">.</small>
              </div>
            </div>

            <div className="w-full">
              <h1 className="font-bold text-xl text-red-900 mt-5 w-full">
                Meal instructions
              </h1>
              <textarea
                name=""
                id="meal_instructions"
                className="w-full border-2 border-black p-5"
                rows={15}
                defaultValue={
                  !recommendationId ? "" : editableRecom[0].generalComment
                }
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setRecommendation({
                    ...recommendation,
                    generalComment: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="w-full flex flex-wrap justify-center py-10">
              {!recommendationId && !update ? (
                <button
                  className="p-2 rounded-sm bg-blue-700 text-white mx-2 w-32 text-xl"
                  onClick={() =>
                    AddRecommendation(
                      [
                        document.getElementById(
                          "lower_limit"
                        ) as HTMLInputElement,
                        document.getElementById(
                          "upper_limit"
                        ) as HTMLInputElement,
                        document.getElementById("weight") as HTMLInputElement,
                        document.getElementById("height") as HTMLInputElement,
                      ],
                      [
                        document.getElementById("water") as HTMLSelectElement,
                        document.getElementById(
                          "carbohydrates"
                        ) as HTMLSelectElement,
                        document.getElementById(
                          "proteins"
                        ) as HTMLSelectElement,
                        document.getElementById("fats") as HTMLSelectElement,
                        document.getElementById(
                          "vitaminA"
                        ) as HTMLSelectElement,
                        document.getElementById(
                          "vitaminB"
                        ) as HTMLSelectElement,
                        document.getElementById(
                          "vitaminC"
                        ) as HTMLSelectElement,
                        document.getElementById(
                          "vitaminD"
                        ) as HTMLSelectElement,
                        document.getElementById(
                          "vitaminE"
                        ) as HTMLSelectElement,
                        document.getElementById(
                          "vitaminK"
                        ) as HTMLSelectElement,
                        document.getElementById("calcium") as HTMLSelectElement,
                        document.getElementById(
                          "potesium"
                        ) as HTMLSelectElement,
                        document.getElementById("iron") as HTMLSelectElement,
                        document.getElementById(
                          "magnesium"
                        ) as HTMLSelectElement,
                        document.getElementById("zinc") as HTMLSelectElement,
                        document.getElementById("gym") as HTMLSelectElement,
                        document.getElementById("yoga") as HTMLSelectElement,
                        document.getElementById(
                          "roadwork"
                        ) as HTMLSelectElement,
                      ],
                      setEmpty,
                      recommendation,
                      empty,
                      setMessage,
                      setShowForm
                    )
                  }
                >
                  Save
                </button>
              ) : (
                <button
                  className="p-2 rounded-sm bg-blue-700 text-white mx-2 w-32 text-xl"
                  onClick={() =>
                    UpdateRecommendation(
                      recommendationId,
                      recommendation,
                      setMessage,
                      setShowForm
                    )
                  }
                >
                  Update
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationForm;
