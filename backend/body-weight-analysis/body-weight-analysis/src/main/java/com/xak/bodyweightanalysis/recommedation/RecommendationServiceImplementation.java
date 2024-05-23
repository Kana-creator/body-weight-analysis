package com.xak.bodyweightanalysis.recommedation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xak.bodyweightanalysis.exception.AlreadyExistsException;
import com.xak.bodyweightanalysis.exception.BlankFieldException;
import com.xak.bodyweightanalysis.exception.SuccessMessageException;

@Service
public class RecommendationServiceImplementation implements RecommendationService {
	
	@Autowired
	RecommendationRepository recommendationRepository;

	@Override
	public void saveRecommendation(Recommendation recommendation)
			throws BlankFieldException, SuccessMessageException, AlreadyExistsException {
		
		recommendationRepository.save(recommendation);
		
	}

}
