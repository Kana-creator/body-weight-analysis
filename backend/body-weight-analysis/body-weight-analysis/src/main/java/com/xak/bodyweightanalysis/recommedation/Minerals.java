package com.xak.bodyweightanalysis.recommedation;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
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
	
	@Column(nullable=false)
	private String calcium;
	
	@Column(nullable=false)
    private String potacium;
	
	@Column(nullable=false)
    private String iron;
	
	@Column(nullable=false)
    private String magnezium;
	
	@Column(nullable=false)
    private String zinc;

}
