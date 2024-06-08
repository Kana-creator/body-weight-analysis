package com.xak.bodyweightanalysis.recommedation;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {

	
	
	/*
	 * CHECKING FOR DUPLICATE RECOMMENDATIONS
	 */
	@Query(value=""
			+ "SELECT * FROM recommendation "
			+ "WHERE age_lower_limit=:ageLowerLimit "
			+ "AND age_upper_limit=:ageUpperLimit "
			+ "AND weight_lower_limit=:weightLowerLimit "
			+ "AND weight_upper_limit=:weightUpperLimit "
			+ "AND height_lower_limit=:heightLowerLimit "
			+ "AND height_upper_limit=:heightUpperLimit", nativeQuery=true)	
	Optional<Recommendation> findDuplicateRecommendation(
			Integer ageLowerLimit, Integer ageUpperLimit, Integer weightLowerLimit,
			Integer weightUpperLimit, Integer heightLowerLimit, Integer heightUpperLimit);
	
	
	/*
	 * FETCHING A SINGLE RECOMMENDATION BASING ON AGE, WEIGHT AND HEIGHT
	 */
	@Query(value="SELECT * FROM recommendation WHERE "
			+ "age_lower_limit<=:age "
			+ "AND age_upper_limit>=:age "
			+ "AND height_lower_limit<=:height "
			+ "AND height_upper_limit>=:height "
			+ "AND weight_lower_limit<=:weight "
			+ "AND weight_upper_limit>=:weight ", nativeQuery=true)
	Optional<Recommendation> findRecommendation(
			Integer age, 
			Integer weight,
			Integer height);

}
