package com.xak.bodyweightanalysis.recommedation;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Recommendation {	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long recommendationId;	
	
	@Column(nullable=false)
	private Integer ageLowerLimit;
	
	@Column(nullable=false)
	private Integer ageUpperLimit;
	
	@Column(nullable=false)
	private Integer weight;
	
	@Column(nullable=false)
	private Integer height;
	
	
	@OneToOne(cascade=CascadeType.REMOVE)
	@JoinColumn(name="nutrition_id", referencedColumnName="id")
	@JsonManagedReference
	private NutritionRecommendation nutritionRecomendation;
	
	
	@OneToOne(cascade=CascadeType.REMOVE)
	@JoinColumn(name="recommendation_id", referencedColumnName="id")
	@JsonManagedReference
	private FitnessRecommendation  fitnessRecommendation ;

}
