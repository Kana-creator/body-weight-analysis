package com.xak.bodyweightanalysis.recommedation;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.xak.bodyweightanalysis.user.User;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Recommendation {	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long recommendationId;	
	
	@Column(nullable=false)
	private Integer ageLowerLimit;
	
	@Column(nullable=false)
	private Integer ageUpperLimit;
	
	@Column(nullable=false)
	private Integer weightLowerLimit;
	
	@Column(nullable=false)
	private Integer weightUpperLimit;
	
	@Column(nullable=false)
	private Integer heightLowerLimit;
	
	@Column(nullable=false)
	private Integer heightUpperLimit;
	
	@Embedded
	private NutritionRecommendation nutritionRecommendation;	
	
	@Embedded
	private FitnessRecommendation  fitnessRecommendation ;
	
	@Column(length=10000, nullable=true)
	private String generalComment;
	
	@CreationTimestamp
	@Column(updatable=false)
	private Timestamp dateCreated;
	
	@UpdateTimestamp
	private Timestamp lastUpdated;
	
	@ManyToOne
	@JoinColumn(name="user_id", referencedColumnName="userId", nullable=false)
	private User user;

}
