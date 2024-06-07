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
			+ "AND weight=:weight "
			+ "AND height=:height", nativeQuery=true)	
	Optional<Recommendation> findDuplicateRecommendation(
			Integer ageLowerLimit, Integer ageUpperLimit, Integer weight,
			Integer height);
	
	
	/*
	 * FETCHING A SINGLE RECOMMENDATION BASING ON AGE, WEIGHT AND HEIGHT
	 */
	@Query(value="SELECT * FROM recommendation WHERE "
			+ "age_lower_limit<=:age "
			+ "AND age_upper_limit>=:age "
			+ "AND height=:height "
			+ "AND weight=:weight", nativeQuery=true)
	Optional<Recommendation> findRecommendation(
			Integer age, 
			Integer weight,
			Integer height);

}
