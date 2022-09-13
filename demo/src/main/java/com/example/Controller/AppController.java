package com.example.Controller;

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

import com.example.demo.requests.ProductModel;
import com.example.demo.responses.JsonResponses;

@RestController
@RequestMapping("/main")
public class AppController {

	@GetMapping("/hello")
	public String helloMessage() {
		return "hello world";
	}
	
	
	
	
@GetMapping("/somme")
public int somme( @RequestParam(name="x",required=true)int x,@RequestParam(name="y",required=true)int y) {
	return (x+y);
	
}

@GetMapping("/demo")
public ResponseEntity<?> demo(){
	JsonResponses  res= new JsonResponses ();
	res.setMessage("product inserted successfully");
	res.setSuccess(true);
	return ResponseEntity.ok(res);
	
}
	
	
@PostMapping("/add-product")
public ResponseEntity<?> addProduct( @RequestBody ProductModel Product){
	JsonResponses  res= new JsonResponses ();
	res.setMessage("product"+Product.getTitle()+" inserted successfully");
	res.setSuccess(true);
	return ResponseEntity.ok(res);
	}


@DeleteMapping("/product/delete/{id}")
public ResponseEntity<?> deleteProduct (@PathVariable(name="id")long id){
	System.out.println(id);
	JsonResponses  res= new JsonResponses ();
	res.setMessage("product deleted successfully");
	res.setSuccess(true);
	return ResponseEntity.ok(res);
	
} 
@PutMapping("/update/product/{id}")
public ResponseEntity<?> updateProduct (@PathVariable(name="id")long id){
	JsonResponses  res= new JsonResponses ();
	res.setMessage("product updated successfully");
	res.setSuccess(true);
	return ResponseEntity.ok(res);}

	


}
