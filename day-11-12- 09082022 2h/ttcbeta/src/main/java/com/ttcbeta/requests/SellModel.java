package com.ttcbeta.requests;

public class SellModel {

	private long client;
	private long product;
	private int quantity;
	
	
	public long getClient() {
		return client;
	}
	public void setClient(long client) {
		this.client = client;
	}
	public long getProduct() {
		return product;
	}
	public void setProduct(long product) {
		this.product = product;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public SellModel() {
		super();
	}
	
	
}
