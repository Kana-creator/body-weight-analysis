package com.xak.bodyweightanalysis.recommedation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.xak.bodyweightanalysis.exception.AlreadyExistsException;
import com.xak.bodyweightanalysis.exception.BlankFieldException;
import com.xak.bodyweightanalysis.exception.SuccessMessageException;

@RestController
public class RecommendationController {
	
	@Autowired
	RecommendationService recommendationService;
	
	/*
	 * SAVE A NEW RECOMMENDATION
	 */
	@PostMapping("/api/save-recommendation")
	public void saveRecommendation(@RequestBody Recommendation recommendation) 
			throws BlankFieldException, SuccessMessageException, AlreadyExistsException {
		recommendationService.saveRecommendation(recommendation);
	}

}
