package com.xak.bodyweightanalysis.recommedation;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Embeddable
public class FitnessRecommendation {
	
	@Embedded
	private Gym gym;
	
	@Embedded
	private Yoga yoga;
	
	
	@Embedded
	private RoadWork roadWork;
	
	

}
