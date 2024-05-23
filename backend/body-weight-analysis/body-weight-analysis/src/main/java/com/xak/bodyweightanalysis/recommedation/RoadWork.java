package com.xak.bodyweightanalysis.recommedation;

import com.fasterxml.jackson.annotation.JsonBackReference;

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
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RoadWork {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long Id;
	
	@Column(nullable=false)
	private String options;
	
	@Column
    private Integer numberOfTimes;
	
	@Column
    private String intervals;
	
	@OneToOne
	@JoinColumn(name="fitness_id", referencedColumnName="Id", nullable=false)
//	@JsonBackReference
	private FitnessRecommendation fitnessRecommendation;
}
