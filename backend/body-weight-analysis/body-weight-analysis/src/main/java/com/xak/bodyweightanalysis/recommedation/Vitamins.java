package com.xak.bodyweightanalysis.recommedation;

import com.xak.bodyweightanalysis.enums.NutritionValues;

import jakarta.persistence.Embeddable;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Embeddable
public class Vitamins {	
	
	@Enumerated(EnumType.STRING)
	private NutritionValues vitaminA;
	
	@Enumerated(EnumType.STRING)
	private NutritionValues vitaminB;
	
	@Enumerated(EnumType.STRING)
	private NutritionValues vitaminC;
	
	@Enumerated(EnumType.STRING)
	private NutritionValues vitaminD;
	
	@Enumerated(EnumType.STRING)
	private NutritionValues vitaminE;
	
	@Enumerated(EnumType.STRING)
	private NutritionValues vitaminK;

}
