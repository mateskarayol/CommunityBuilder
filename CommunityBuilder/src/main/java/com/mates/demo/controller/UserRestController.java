package com.mates.demo.controller;

import com.mates.demo.data.UserServiceRequest;
import com.mates.demo.data.UserServiceResponse;
import com.mates.demo.domain.User;
import com.mates.demo.dto.UserDto;
import com.mates.demo.repository.UserRepository;
import com.mates.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserRestController {

	@Autowired
	private UserService userService;

	@Autowired
	private UserRepository userRepository;



	@GetMapping("/testUserRest")
	@ResponseBody
	public String testUser(@RequestParam(name = "username") String username) {

		return  "{ 'username' : '" + username + "}";
	}


	@GetMapping("/getUser")
	@ResponseBody
	public List<User> getUser() {

		return userRepository.findAll();
	}

	@GetMapping("/getUserByUsername")
	@ResponseBody
	public User getUser(@RequestParam(name = "username") String username) {

		return userRepository.findByUsername(username);
	}


	@RequestMapping(value = "/getUserWithResponseBody", method = RequestMethod.POST)
	@ResponseBody
	public UserServiceResponse getUser(@RequestBody UserServiceRequest request) {

		User user = userService.getUser(request.getUser().getUsername());

		UserServiceResponse response = new UserServiceResponse();
		response.getResponse().put("user", UserDto.fromUser(user));

		return response;
	}



}
