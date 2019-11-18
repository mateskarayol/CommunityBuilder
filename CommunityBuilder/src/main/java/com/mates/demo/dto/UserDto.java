package com.mates.demo.dto;

import com.mates.demo.domain.User;
import lombok.Getter;
import lombok.Setter;

public class UserDto {

	@Getter
	@Setter
	private String name;

	@Getter
	@Setter
	private String surname;

	@Getter
	@Setter
	private String username;

	public static UserDto fromUser(User user){
		UserDto userDto =  new UserDto();
		userDto.setName(user.getName());
		userDto.setSurname(user.getSurname());
		userDto.setUsername(user.getUsername());

		return userDto;
	}
}
