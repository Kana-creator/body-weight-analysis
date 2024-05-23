export interface RecommendationModel {
  id?: string;
  ageLowerLimit: number;
  ageUpperLimit: number;
  weight: number;
  height: number;

  nutritionRecommendation: {
    water: string;
    carbohydrates: string;
    Proteins: string;
    Fats: string;

    vitamins: {
      vitaminA: string;
      vitaminB: string;
      vitaminC: string;
      vitaminD: string;
      vitaminE: string;
      vitaminK: string;
    };

    minerals: {
      calcium: string;
      potacium: string;
      iron: string;
      magnezium: string;
      zinc: string;
    };
  };

  fitnessRecommendation: {
    gym: {
      option: string;
      numberOfTimes: number;
      intervals: string;
    };

    yoga: {
      option: string;
      numberOfTimes: number;
      intervals: string;
    };

    roadWork: {
      option: string;
      numberOfTimes: number;
      intervals: string;
    };
  };

  generalComment?: string;
}
