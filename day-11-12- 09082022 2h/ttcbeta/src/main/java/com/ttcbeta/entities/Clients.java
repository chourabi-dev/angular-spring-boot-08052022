package com.ttcbeta.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table( name="clients" )
public class Clients {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	
	@Column( name="client_firstname" , nullable=false )
	private String firstname;
	
	@Column( name="client_lastname" , nullable=false )
	private String lastname;
	
	@Column( name="client_email" , nullable=false )
	private String email;
	
	
	@Column( name="client_phone" , nullable=false )
	private String phone;
	
	
	@Column( name="client_address" , nullable=false )
	private String address;


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public Clients() {
		super();
	}
	
	
	
}
