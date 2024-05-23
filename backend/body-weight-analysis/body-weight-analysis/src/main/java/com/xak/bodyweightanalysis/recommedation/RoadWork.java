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
public class RoadWork {
	
	@Enumerated(EnumType.STRING)
	private FitnessOptions roadWorkOptions;
	
	@Column
    private Integer roadWorkNumberOfTimes;
	
	@Enumerated(EnumType.STRING)
	private FitnessIntervals roadWorkIntervals;
}
