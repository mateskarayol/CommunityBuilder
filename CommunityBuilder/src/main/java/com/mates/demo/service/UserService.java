package com.mates.demo.service;

import com.mates.demo.domain.User;

public interface UserService {

	public User getUser(String username);

	public String saveUser(User user);
}
