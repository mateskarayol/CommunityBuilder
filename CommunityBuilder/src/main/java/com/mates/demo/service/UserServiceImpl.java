package com.mates.demo.service;

import com.mates.demo.domain.User;
import com.mates.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserRepository userRepository;

	@Override
	public User getUser(String username){

		return userRepository.findByUsername(username);

	}

	@Override
	public String saveUser(User user){

		return userRepository.save(user).getUsername();
	}
}
