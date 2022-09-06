package com.ttcbeta.repositrories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ttcbeta.entities.Clients;

public interface ClientsRepository  extends JpaRepository<Clients,Long>{

}
