package com.ttcbeta.entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table( name="sells" )
public class Sells {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private int quantity;
	
	
	@ManyToOne
	@JoinColumn( name="clients_id" )
	private Clients client;

	
	@ManyToOne
	@JoinColumn( name="products_id" )
	private Products product;
	
	
	
	private LocalDateTime date = LocalDateTime.now();



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public int getQuantity() {
		return quantity;
	}



	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}



	public Clients getClient() {
		return client;
	}



	public void setClient(Clients client) {
		this.client = client;
	}



	public Products getProduct() {
		return product;
	}



	public void setProduct(Products product) {
		this.product = product;
	}



	public LocalDateTime getDate() {
		return date;
	}



	public void setDate(LocalDateTime date) {
		this.date = date;
	}



	public Sells() {
		super();
	}
	
	
	
}
