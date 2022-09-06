package com.ttcbeta.controllers;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ttcbeta.entities.Products;
import com.ttcbeta.repositrories.CategoryRepository;
import com.ttcbeta.repositrories.ProductRepository;
import com.ttcbeta.requests.ProductModel;
import com.ttcbeta.responses.JsonResponse;

@RestController
@RequestMapping("/api/products")
public class ProductController {

	
	@Autowired
	ProductRepository pr;
	
	
	@Autowired
	CategoryRepository categoryRepository;
	
	
	// INSERT
	@PostMapping("/add")
	public ResponseEntity<?> addProduct( @RequestBody ProductModel model ){

		
		Products p = new Products();
		
		p.setTitle( model.getTitle() );
		p.setPrice( model.getPrice() );
		p.setQuantity( model.getQuantity() );
		p.setCategory(   this.categoryRepository.findById( model.getCategory()  ).get()   );
		
		
		
		this.pr.save( p ); // p has no id !! INSERT
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("product  inserted successfully");
		
								// 200
		return ResponseEntity.ok( res );
		
	}
	
	
	
	
	
	// GET
	@GetMapping("/list")
	public ResponseEntity<?> getProducts() {
		List<Products> list = this.pr.findAll();
		
		return ResponseEntity.ok(list);
	}
	
	
	// FIND BY ID
	
	@GetMapping("/find/{id}")
	public ResponseEntity<?> find(  @PathVariable(name="id") long id  ) {
		
		
		try {
			Products p = this.pr.findById(id).get();
		 
		
		
			return ResponseEntity.ok(p);
		}catch(NoSuchElementException e) {
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(false);
			res.setMessage("product not found");
			
									// 200
			return ResponseEntity.status(404).body(res);
		}
		
	}
	
	
	
	
	
	// update
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateProduct( @RequestBody ProductModel model, @PathVariable(name="id") long id ){
		
		try {
			// OLD !!!
			Products p = this.pr.findById(id).get();  
			
			p.setTitle( model.getTitle() );
			p.setPrice( model.getPrice() );
			p.setQuantity( model.getQuantity() );
			p.setCategory(   this.categoryRepository.findById( model.getCategory()  ).get()   );
			
			
			
			this.pr.save( p ); // p has  id !! UPDATE
			
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(true);
			res.setMessage("product updated successfully");
			
									// 200
			return ResponseEntity.ok( res );
			 
		}catch(NoSuchElementException e) {
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(false);
			res.setMessage("product not found");
			
									// 200
			return ResponseEntity.status(404).body(res);
		}
	}
	
	
	
	
	// delete
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(  @PathVariable(name="id") long id  ) {
		
		
		try {
			Products p = this.pr.findById(id).get();
		 
		
			this.pr.delete(p);
			
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(true);
			res.setMessage("product deleted successfully");
			
		
			return ResponseEntity.ok(res);
			
			
			
		}catch(NoSuchElementException e) {
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(false);
			res.setMessage("product not found");
			
									// 200
			return ResponseEntity.status(404).body(res);
		}
		
	}
	
	
	
	
	
	// search by "WHERE"
	
	
	// search product price < 300
	@GetMapping("/search")
	public ResponseEntity<?> search( @RequestParam( required=true ) float price ){ 
		
		return ResponseEntity.ok(  this.pr.findByPriceLessThan( price )  );
	}
	
	
	
	
}
