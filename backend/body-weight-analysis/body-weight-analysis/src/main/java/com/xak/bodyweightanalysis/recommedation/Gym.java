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
public class Gym {
	
	@Enumerated(EnumType.STRING)
	private FitnessOptions gymOptions;
	
	@Column
    private Integer gymNumberOfTimes;
	
	@Enumerated(EnumType.STRING)
	private FitnessIntervals gymIntervals;
}
