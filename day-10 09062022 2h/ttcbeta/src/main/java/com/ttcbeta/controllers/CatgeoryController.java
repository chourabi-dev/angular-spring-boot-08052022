package com.ttcbeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ttcbeta.entities.Category;
import com.ttcbeta.repositrories.CategoryRepository;
import com.ttcbeta.requests.CategoryModel;
import com.ttcbeta.responses.JsonResponse;

@RestController()
@RequestMapping("/api/categories")
public class CatgeoryController {

	
	@Autowired
	CategoryRepository categoryRepository;
	
	// INSERT !!
	
	@PostMapping("/add")
	public ResponseEntity<?> add( @RequestBody CategoryModel model ){
		
		
		Category c = new Category();
		
		c.setName( model.getName() );
		
		this.categoryRepository.save(c);
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("Category inserted successfully");
		
								// 200
		return ResponseEntity.ok( res );
		
	}
	
	
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getList(){
		return ResponseEntity.ok( this.categoryRepository.findAll() );
		
	}
}
