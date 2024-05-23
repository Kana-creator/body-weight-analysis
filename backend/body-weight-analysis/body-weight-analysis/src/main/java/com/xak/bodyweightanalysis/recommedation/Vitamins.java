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
public class Vitamins {
	
	@Column(nullable=false)
	private String vitaminA;
	
	@Column(nullable=false)
    private String vitaminB;
	
	@Column(nullable=false)
    private String vitaminC;
	
	@Column(nullable=false)
    private String vitaminD;
	
	@Column(nullable=false)
    private String vitaminE;
	
	@Column(nullable=false)
    private String vitaminK;

}
