package com.xak.bodyweightanalysis.recommedation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.xak.bodyweightanalysis.exception.AlreadyExistsException;
import com.xak.bodyweightanalysis.exception.BlankFieldException;
import com.xak.bodyweightanalysis.exception.NotFoundException;
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
		System.out.println(recommendation);
		recommendationService.saveRecommendation(recommendation);
	}
	
	
	
	/*
	 * FETCH LIST OF RECOMMENDATIONS
	 */
	@GetMapping("/api/fetch-recommendations")
	public List<Recommendation> fetchRecommednations() throws NotFoundException{
		return recommendationService.fetchRecommendations();
	}
	
	
	
	/*
	 * FETCH SINGLE RECOMMENDATION
	 */
	@GetMapping("/api/fetch-recommendation/{age}/{weight}/{height}")
	public Recommendation fetchRecommendation(
			@PathVariable("age") Integer age,
			@PathVariable("weight") Integer weight,
			@PathVariable("height") Integer height
			) throws NotFoundException {
		
		return recommendationService.fetchSingleRecommendation(
				age,
				weight, 
				height
				);
	}
	
	
	
	/*
	 * DELETING A RECOMMENDATION
	 */
	@DeleteMapping("/api/delete-recommedation/{redommendation_id}")
	public void deleteRecommendation(@PathVariable("recommendation_id") Long recommendationId)
			throws NotFoundException, SuccessMessageException {
		recommendationService.deleteRecommendation(recommendationId);
	}
	
	
	
	/*
	 * UPDATING A RECOMENDATION
	 */
	@PutMapping("/api/update-recommendation/{recommendation_id}")
	public void updateRecommendation(
			@RequestBody Recommendation recommendation, 
			@PathVariable("recommendation_id") Long recommendationId) 
					throws NotFoundException, AlreadyExistsException, SuccessMessageException {
		recommendationService.updateRecommendation(recommendation, recommendationId);
	}

}
