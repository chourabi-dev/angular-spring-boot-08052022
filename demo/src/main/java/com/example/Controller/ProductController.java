package com.example.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Product;
import com.example.demo.repository.ProductRepository;
import com.example.demo.requests.ProductModel;
import com.example.demo.responses.JsonResponses;



@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	
	@Autowired
	ProductRepository pr;
	
@PostMapping("/add")
public 	ResponseEntity<?> addproduct(@RequestBody ProductModel model){
	Product p = new Product();
	p.setTitle(model.getTitle());
	p.setPrice(model.getPrice());
	p.setQuantity(model.getQuantity());
	this.pr.save(p);
	JsonResponses  res= new JsonResponses ();
	res.setMessage("product updated successfully");
	res.setSuccess(true);
	return ResponseEntity.ok(res);
	
}

}

	


