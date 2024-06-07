package com.xak.bodyweightanalysis.recommedation;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xak.bodyweightanalysis.exception.AlreadyExistsException;
import com.xak.bodyweightanalysis.exception.BlankFieldException;
import com.xak.bodyweightanalysis.exception.NotFoundException;
import com.xak.bodyweightanalysis.exception.SuccessMessageException;

import jakarta.transaction.Transactional;

@Service
public class RecommendationServiceImplementation implements RecommendationService {
	
	@Autowired
	RecommendationRepository recommendationRepository;
	
	
	/*
	 * SAVING A NEW RECOMMENDATION
	 */
	@Override
	@Transactional
	public void saveRecommendation(Recommendation recommendation)
			throws BlankFieldException, SuccessMessageException, AlreadyExistsException {
		
		//CHECKNG FOR EMPTY REQUIRED FIELDS
		if(Objects.isNull(recommendation.getAgeLowerLimit()) ||
				"".equals(recommendation.getAgeLowerLimit())) {
			throw new BlankFieldException("Please fill all the required fields.");
		}
		
		if(Objects.isNull(recommendation.getAgeUpperLimit()) ||
				"".equals(recommendation.getAgeUpperLimit())) {
			throw new BlankFieldException("Please fill all the required fields.");
		}
		
		if(Objects.isNull(recommendation.getWeight()) ||
				"".equals(recommendation.getWeight())) {
			throw new BlankFieldException("Please fill all the required fields.");
		}
		
		if(Objects.isNull(recommendation.getHeight()) ||
				"".equals(recommendation.getHeight())) {
			throw new BlankFieldException("Please fill all the required fields.");
		}	
		
		
		//CHECK IF THE RECOMMENDATION IS ALREADY ADDED
		Optional<Recommendation> duplicateRecommendation = 
				recommendationRepository.findDuplicateRecommendation(
						recommendation.getAgeLowerLimit(), 
						recommendation.getAgeUpperLimit(),
						recommendation.getWeight(),
						recommendation.getHeight());
		
		if(duplicateRecommendation.isPresent()) {
			throw new AlreadyExistsException(
					"Recommendation with similar details already added (Age, weight and height)."
					);	}
		
		
		recommendationRepository.save(recommendation);
		throw new SuccessMessageException("Recommendation saved successfully.");
		
	}


	
	/*
	 * FETCH A LIST OF RECOMMENDATIONS
	 */
	@Override
	public List<Recommendation> fetchRecommendations() throws NotFoundException {
		List<Recommendation> recommendations = recommendationRepository.findAll();
		
		if(recommendations.isEmpty()) {
			throw new NotFoundException("No recommendation available at the moment.");
		}
		
		return recommendations;
	}


	
	/*
	 * FETCHING A SINGLE RECOMMENDATION BASING ON AGE, WEIGHT AND HEIGHT
	 */
	@Override
	public Recommendation fetchSingleRecommendation(
			Integer age, 
			Integer weight,
			Integer height) throws NotFoundException {
		
		Optional<Recommendation> recommendation = 
				recommendationRepository.findRecommendation(
						age, 
						weight, 
						height);
		
		if(recommendation.isEmpty()) {
			throw new NotFoundException("No recommendation found");
		}
		
		return recommendation.get();
	}



	/*
	 * DELETE A RECOMMENDATION
	 */
	@Override
	public void deleteRecommendation(Long recommendationId) 
			throws NotFoundException, SuccessMessageException {
		//CHECK IF THE RECOMMENDATION EXISTS
		Optional<Recommendation> recommendation = 
				recommendationRepository.findById(recommendationId);
		
		if(recommendation.isEmpty()) {
			throw new NotFoundException("Recommendation not found.");
		}
		
		recommendationRepository.delete(recommendation.get());
		throw new SuccessMessageException("Recommendation deleted successfully.");
		
	}



	/*
	 * UPDATING A RECOMMENDATION
	 */
	@Override
	public void updateRecommendation(Recommendation recommendation, Long recommendationId)
			throws NotFoundException, AlreadyExistsException, SuccessMessageException {
		
		// CHECK IF THE RECOMMENDATION EXISTS
		Optional<Recommendation> recommendationDB = 
				recommendationRepository.findById(recommendationId);
		
		if(recommendationDB.isEmpty()) {
			throw new NotFoundException("Recommendation not found.");
		}
		
		//SAVE RECOMMENDATION IF ALL CONDITIONS ARE FULLFILLED
		recommendationRepository.save(recommendationDB.get());
		throw new SuccessMessageException("Recommendation updated successfully.");
		
	}
	
	

}
