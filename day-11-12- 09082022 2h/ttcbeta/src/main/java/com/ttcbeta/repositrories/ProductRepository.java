package com.ttcbeta.repositrories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ttcbeta.entities.Products;

public interface ProductRepository extends JpaRepository<Products,Long> {
	
	
	// WHERE price < ?
	
	List<Products> findByPriceLessThan(float price);
	

	
	

}
