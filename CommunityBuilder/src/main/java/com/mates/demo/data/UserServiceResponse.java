package com.mates.demo.data;

import lombok.Setter;

import java.util.HashMap;

public class UserServiceResponse {

	@Setter
	HashMap<String, Object> response;


	public HashMap<String, Object> getResponse(){
		if(response == null){
			response = new HashMap<String, Object>();
		}
		return response;
	}
}
