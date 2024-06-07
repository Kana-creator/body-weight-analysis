package com.xak.bodyweightanalysis.recommedation;

import com.xak.bodyweightanalysis.enums.FitnessIntervals;
import com.xak.bodyweightanalysis.enums.FitnessOptions;

import jakarta.persistence.Column;
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
public class Yoga {
	
	@Enumerated(EnumType.STRING)
	private FitnessOptions yogaOption;
	
	@Column
    private Integer yogaNumberOfTimes;
	
	@Enumerated(EnumType.STRING)
	private FitnessIntervals yogaIntervals;
}
