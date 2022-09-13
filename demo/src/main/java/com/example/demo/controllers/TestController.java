package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/test")
@RestController()

public class TestController {

	
	@GetMapping("/demo")
	public String hi() {
		return "hi";
		
	}
}
