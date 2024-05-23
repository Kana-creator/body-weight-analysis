package com.xak.bodyweightanalysis.recommedation;

import com.xak.bodyweightanalysis.exception.AlreadyExistsException;
import com.xak.bodyweightanalysis.exception.BlankFieldException;
import com.xak.bodyweightanalysis.exception.SuccessMessageException;

public interface RecommendationService {

	void saveRecommendation(Recommendation recommendation) throws BlankFieldException, SuccessMessageException, AlreadyExistsException;

}
