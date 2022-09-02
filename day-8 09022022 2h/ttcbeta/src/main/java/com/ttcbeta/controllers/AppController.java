package com.ttcbeta.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ttcbeta.requests.ProductModel;
import com.ttcbeta.responses.JsonResponse;

@RestController
@RequestMapping("/main")
public class AppController {

	
	// GET POST PUT DELETE
	
	
	
	@GetMapping("/hello")
	public String helloMessage() {
		return "hello world";
	}
	
	// params !!!!
	
	
	
	
	@GetMapping("/somme")
	public int somme( @RequestParam( name="x", required=true ) int x, @RequestParam( name="y", required=true )  int y   ) {
		return ( x+y );
	}
	
	
	// {  success:true , message:"user inserted successfully"  } 
	
	//demo custom response type
	
	@GetMapping("/demo")
	public ResponseEntity<?> demo(){
		
		
		// ...
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("user inserted successfully");
		
								// 200
		return ResponseEntity.ok( res );
		
		
	}
	
	
	
	
	// POST
	
	
	@PostMapping("/add-product")
	public ResponseEntity<?> addProduct(   @RequestBody ProductModel product   ){
		
		
		// coonect 
		
		
		// insert 
		
		
		// check
		
		
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("product "+ product.getTitle() +" inserted successfully");
		
								// 200
		return ResponseEntity.ok( res );
	}
	
	
	
	
	
	
}
