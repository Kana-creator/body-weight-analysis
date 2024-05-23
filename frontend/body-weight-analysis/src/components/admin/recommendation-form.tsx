import React, { useEffect, useState } from "react";
import { RecommendationModel } from "./recommendation-model";
import { useNavigate, useParams } from "react-router-dom";
import CheckEmptySelect from "../globleActions/check-empty-select";
import CheckEmptyField from "../globleActions/check-empty-fields";
import AddRecommendation from "./add-recommendation";

interface Props {
  editableRecom: RecommendationModel[];
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const RecommendationForm: React.FC<Props> = ({
  editableRecom,
  setShowForm,
}) => {
  const [update, setUpdate] = useState<boolean>(false);
  const [recommendation, setRecommendation] = useState<RecommendationModel>({
    id: "",
    ageLowerLimit: 0,
    ageUpperLimit: 0,
    weight: 0,
    height: 0,

    nutritionRecommendation: {
      water: "",
      carbohydrates: "",
      Proteins: "",
      Fats: "",

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
        option: "",
        numberOfTimes: 0,
        intervals: "",
      },

      yoga: {
        option: "",
        numberOfTimes: 0,
        intervals: "",
      },

      roadWork: {
        option: "",
        numberOfTimes: 0,
        intervals: "",
      },
    },

    generalComment: "",
  });

  const [empty, setEmpty] = useState<boolean>(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log(editableRecom);
      setRecommendation(editableRecom[0]);
      const lower_limit: HTMLInputElement = document.getElementById(
        "lower_limit"
      ) as HTMLInputElement;
      lower_limit.focus();
    } else {
    }
  }, [id]);

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
                  defaultValue={id ? `${editableRecom[0].ageLowerLimit}` : ""}
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
                  defaultValue={id ? editableRecom[0].ageUpperLimit : ""}
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
                <b>Weight*</b>
              </label>
              <input
                type="number"
                className="w-full"
                placeholder="Weight in kg"
                id="weight"
                defaultValue={id ? editableRecom[0].weight : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  CheckEmptyField(e.target, setEmpty);
                  setRecommendation({
                    ...recommendation,
                    weight: Number(e.target.value),
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
                defaultValue={id ? editableRecom[0].height : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  CheckEmptyField(e.target, setEmpty);
                  setRecommendation({
                    ...recommendation,
                    height: Number(e.target.value),
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={recommendation.nutritionRecommendation.water}
                    >
                      {recommendation.nutritionRecommendation.water}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.nutritionRecommendation.carbohydrates
                      }
                    >
                      {recommendation.nutritionRecommendation.carbohydrates}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                        Proteins: e.target.value,
                      },
                    });
                  }}
                >
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={recommendation.nutritionRecommendation.Proteins}
                    >
                      {recommendation.nutritionRecommendation.Proteins}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                        Fats: e.target.value,
                      },
                    });
                  }}
                >
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option value={recommendation.nutritionRecommendation.Fats}>
                      {recommendation.nutritionRecommendation.Fats}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.nutritionRecommendation.vitamins.vitaminA
                      }
                    >
                      {recommendation.nutritionRecommendation.vitamins.vitaminA}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.nutritionRecommendation.vitamins.vitaminB
                      }
                    >
                      {recommendation.nutritionRecommendation.vitamins.vitaminB}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.nutritionRecommendation.vitamins.vitaminC
                      }
                    >
                      {recommendation.nutritionRecommendation.vitamins.vitaminC}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.nutritionRecommendation.vitamins.vitaminD
                      }
                    >
                      {recommendation.nutritionRecommendation.vitamins.vitaminD}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.nutritionRecommendation.vitamins.vitaminE
                      }
                    >
                      {recommendation.nutritionRecommendation.vitamins.vitaminE}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.nutritionRecommendation.vitamins.vitaminK
                      }
                    >
                      {recommendation.nutritionRecommendation.vitamins.vitaminK}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.nutritionRecommendation.minerals.calcium
                      }
                    >
                      {recommendation.nutritionRecommendation.minerals.calcium}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
                </select>
                <small className="w-full text-red-500 text-sm">.</small>
              </div>

              <div className="w-full flex flex-wrap items-center py-2">
                <label htmlFor="" className="w-full">
                  <b>Potesium*</b>
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.nutritionRecommendation.minerals.potacium
                      }
                    >
                      {recommendation.nutritionRecommendation.minerals.potacium}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.nutritionRecommendation.minerals.iron
                      }
                    >
                      {recommendation.nutritionRecommendation.minerals.iron}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.nutritionRecommendation.minerals
                          .magnezium
                      }
                    >
                      {
                        recommendation.nutritionRecommendation.minerals
                          .magnezium
                      }
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.nutritionRecommendation.minerals.zinc
                      }
                    >
                      {recommendation.nutritionRecommendation.minerals.zinc}
                    </option>
                  )}
                  <option value="no">No</option>
                  <option value="very less">Very less</option>
                  <option value="less">Less</option>
                  <option value="moderate">Moderate</option>
                  <option value="much">Much</option>
                  <option value="very much">Very much</option>
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
                          option: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={recommendation.fitnessRecommendation.gym.option}
                    >
                      {recommendation.fitnessRecommendation.gym.option}
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
                    !id
                      ? ""
                      : editableRecom[0].fitnessRecommendation.gym.numberOfTimes
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRecommendation({
                      ...recommendation,
                      fitnessRecommendation: {
                        ...recommendation.fitnessRecommendation,
                        gym: {
                          ...recommendation.fitnessRecommendation.gym,
                          numberOfTimes: Number(e.target.value),
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
                          intervals: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={recommendation.fitnessRecommendation.gym.intervals}
                    >
                      {recommendation.fitnessRecommendation.gym.intervals}
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
                          option: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={recommendation.fitnessRecommendation.yoga.option}
                    >
                      {recommendation.fitnessRecommendation.yoga.option}
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
                  value={
                    !id
                      ? ""
                      : editableRecom[0].fitnessRecommendation.yoga
                          .numberOfTimes
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRecommendation({
                      ...recommendation,
                      fitnessRecommendation: {
                        ...recommendation.fitnessRecommendation,
                        yoga: {
                          ...recommendation.fitnessRecommendation.yoga,
                          numberOfTimes: Number(e.target.value),
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
                          intervals: e.target.value,
                        },
                      },
                    })
                  }
                >
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.fitnessRecommendation.yoga.intervals
                      }
                    >
                      {recommendation.fitnessRecommendation.yoga.intervals}
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
                          option: e.target.value,
                        },
                      },
                    });
                  }}
                >
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.fitnessRecommendation.roadWork.option
                      }
                    >
                      {recommendation.fitnessRecommendation.roadWork.option}
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
                  value={
                    !id
                      ? ""
                      : editableRecom[0].fitnessRecommendation.roadWork
                          .numberOfTimes
                  }
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRecommendation({
                      ...recommendation,
                      fitnessRecommendation: {
                        ...recommendation.fitnessRecommendation,
                        roadWork: {
                          ...recommendation.fitnessRecommendation.roadWork,
                          numberOfTimes: Number(e.target.value),
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
                          intervals: e.target.value,
                        },
                      },
                    })
                  }
                >
                  {!id ? (
                    <option value="">SELECT OPTION</option>
                  ) : (
                    <option
                      value={
                        recommendation.fitnessRecommendation.roadWork.intervals
                      }
                    >
                      {recommendation.fitnessRecommendation.roadWork.intervals}
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
                defaultValue={!id ? "" : editableRecom[0].generalComment}
              ></textarea>
            </div>
            <div className="w-full flex flex-wrap justify-center py-10">
              {!id && !update ? (
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
                      empty
                    )
                  }
                >
                  Save
                </button>
              ) : (
                <button className="p-2 rounded-sm bg-blue-700 text-white mx-2 w-32 text-xl">
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
