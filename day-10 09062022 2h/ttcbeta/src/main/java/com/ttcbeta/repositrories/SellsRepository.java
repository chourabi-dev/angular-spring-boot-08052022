package com.ttcbeta.repositrories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ttcbeta.entities.Clients;
import com.ttcbeta.entities.Sells;

public interface SellsRepository extends JpaRepository<Sells,Long> {
	
	
	List<Sells> findByClient( Clients client );

}
