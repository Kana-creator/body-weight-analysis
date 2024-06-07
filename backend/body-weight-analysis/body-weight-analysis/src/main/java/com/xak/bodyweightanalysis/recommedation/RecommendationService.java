package com.xak.bodyweightanalysis.recommedation;

import java.util.List;

import com.xak.bodyweightanalysis.exception.AlreadyExistsException;
import com.xak.bodyweightanalysis.exception.BlankFieldException;
import com.xak.bodyweightanalysis.exception.NotFoundException;
import com.xak.bodyweightanalysis.exception.SuccessMessageException;

public interface RecommendationService {

	void saveRecommendation(Recommendation recommendation) 
			throws BlankFieldException, SuccessMessageException, AlreadyExistsException;

	List<Recommendation> fetchRecommendations() throws NotFoundException;

	Recommendation fetchSingleRecommendation(
			Integer age,
			Integer weight,
			Integer height)  throws NotFoundException ;

	void deleteRecommendation(Long recommendationId) 
			throws NotFoundException, SuccessMessageException;

	void updateRecommendation(Recommendation recommendation, Long recommendationId)
			throws NotFoundException, AlreadyExistsException, SuccessMessageException;

}
