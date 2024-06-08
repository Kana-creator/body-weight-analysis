package com.xak.bodyweightanalysis.recommedation;

import com.xak.bodyweightanalysis.enums.NutritionValues;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
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
public class NutritionRecommendation {
	
	@Enumerated(EnumType.STRING)
	private NutritionValues water;
	
	@Enumerated(EnumType.STRING)
	private NutritionValues carbohydrates;
	
	@Enumerated(EnumType.STRING)
	private NutritionValues proteins;
	
	@Enumerated(EnumType.STRING)
	private NutritionValues fats;	
	
	@Embedded
	private Vitamins vitamins;	
	
	@Embedded
	private Minerals minerals;
	
	

}
