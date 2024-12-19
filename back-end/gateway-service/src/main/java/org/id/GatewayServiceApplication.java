package org.id;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GatewayServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayServiceApplication.class, args);
	}
	@Bean
	RouteLocator gatewayRoutes(RouteLocatorBuilder builder){
	return builder.routes()


             .route(r->r.path("/api/exercices/**").uri("http://localhost:8081/"))

             .route(r->r.path("/api/groups/**").uri("http://localhost:8084/"))

        
			 // Route for CUSTOMER-SERVICE
            .route(r -> r.path("/customers/**")
                    .uri("lb://CUSTOMER-SERVICE")) // Load-balanced URI for the customer service
            // Route for INVENTORY-SERVICE
            .route(r -> r.path("/products/**")
                    .uri("lb://INVENTORY-SERVICE")) // Load-balanced URI for the inventory service
            // Route for Express application
            .route("express_route", r -> r.path("/api/**")
                    .uri("http://localhost:3000")) // Direct URI for the Express app
            .build();
	}

}
