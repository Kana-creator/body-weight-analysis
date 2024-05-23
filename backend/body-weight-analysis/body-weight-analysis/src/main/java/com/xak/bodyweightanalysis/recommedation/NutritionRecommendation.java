package com.xak.bodyweightanalysis.recommedation;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NutritionRecommendation {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long Id;
	
	@Column(nullable=false)
	private String water;
	
	@Column(nullable=false)
    private String carbohydrates;
	
	@Column(nullable=false)
    private String Proteins;
	
	@Column(nullable=false)
    private String Fats;	
	
	@Embedded
	private Vitamins vitamins;	
	
	@Embedded
	private Minerals minerals;

}
