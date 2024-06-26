package com.xak.bodyweightanalysis.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		final String origins = "http://localhost:3000, http://localhost:2024";
		
		registry.addMapping("/**")
			.allowedOrigins(origins)
			.allowedMethods("GET", "POST", "PUT", "DELETE")
			.allowedHeaders("*");
	}

}
