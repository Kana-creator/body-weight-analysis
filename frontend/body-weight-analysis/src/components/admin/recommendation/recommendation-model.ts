export interface RecommendationModel {
  recommendationId?: string;
  user: { userId: number };
  ageLowerLimit: number;
  ageUpperLimit: number;
  weight: number;
  height: number;

  nutritionRecommendation: {
    water: string;
    carbohydrates: string;
    proteins: string;
    fats: string;

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
      gymOption: string;
      gymNumberOfTimes: number;
      gymIntervals: string;
    };

    yoga: {
      yogaOption: string;
      yogaNumberOfTimes: number;
      yogaIntervals: string;
    };

    roadWork: {
      roadWorkOption: string;
      roadWorkNumberOfTimes: number;
      roadWorkIntervals: string;
    };
  };

  generalComment?: string;
}
