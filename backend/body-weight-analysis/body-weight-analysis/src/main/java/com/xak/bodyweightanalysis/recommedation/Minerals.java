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
public class Minerals {
	
	@Enumerated(EnumType.STRING)
	private NutritionValues calcium;
	
	@Enumerated(EnumType.STRING)
	private NutritionValues potacium;
	
	@Enumerated(EnumType.STRING)
	private NutritionValues iron;
	
	@Enumerated(EnumType.STRING)
	private NutritionValues magnezium;
	
	@Enumerated(EnumType.STRING)
	private NutritionValues zinc;

}
