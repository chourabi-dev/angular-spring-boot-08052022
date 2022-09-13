package com.ttcbeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ttcbeta.entities.Category;
import com.ttcbeta.entities.Clients;
import com.ttcbeta.entities.Products;
import com.ttcbeta.entities.Sells;
import com.ttcbeta.repositrories.ClientsRepository;
import com.ttcbeta.repositrories.ProductRepository;
import com.ttcbeta.repositrories.SellsRepository;
import com.ttcbeta.requests.CategoryModel;
import com.ttcbeta.requests.ClientModel;
import com.ttcbeta.requests.SellModel;
import com.ttcbeta.responses.JsonResponse;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ClientsController {

	
	@Autowired
	ClientsRepository clientsRepository;
	
	@Autowired
	ProductRepository pr;
	
	
	@Autowired
	SellsRepository sr;
	
	
	@PostMapping("/add")
	public ResponseEntity<?> add( @RequestBody ClientModel model ){
		
		
		Clients c = new Clients();
		
		c.setFirstname(model.getFirstname());
		c.setLastname(model.getLastname());
		c.setEmail(model.getEmail());
		c.setAddress(model.getAddress());
		c.setPhone(model.getPhone());
		
		this.clientsRepository.save(c);
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("Client inserted successfully");
		
								// 200
		return ResponseEntity.ok( res );
		
	}
	
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getList(){
		return ResponseEntity.ok( this.clientsRepository.findAll() );
		
	}
	
	
	
	@GetMapping("/sells/{id}")
	public ResponseEntity<?> check_sells(  @PathVariable( name="id" )  long id  ){
		
		Clients c = this.clientsRepository.findById( id ).get();
		
		return ResponseEntity.ok( this.sr.findByClient(c) );
		
	}
	
	
	
	
	
	
	@PostMapping("/buy")
	public ResponseEntity<?> buy( @RequestBody SellModel model ){
		
		
		Sells s = new Sells();
		
		
		Products p =this.pr.findById( model.getProduct() ).get();
		
		s.setClient( this.clientsRepository.findById(  model.getClient() ).get()  );
		s.setProduct( p );
		s.setQuantity( model.getQuantity() );
		
		
		// check if stock quantity is enough
		
		if( model.getQuantity() <= p.getQuantity() ) {
			
			this.sr.save(s);
			
			p.setQuantity(    (   p.getQuantity() - model.getQuantity()  )   );
			
			this.pr.save(p);
			
			
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(true);
			res.setMessage("Order created successfully.");
			
									// 200
			return ResponseEntity.ok( res );
			
		}else {
			
			
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(false);
			res.setMessage("not enough stock");
			
									// 200
			return ResponseEntity.ok( res );
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
