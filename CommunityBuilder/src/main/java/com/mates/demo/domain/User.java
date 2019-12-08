package com.mates.demo.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {

	@Transient
	public static final String SEQUENCE_NAME = "user_sequence";


	@Id
	@Getter
	@Setter
	private Object id;

	@Getter
	@Setter
	private String name;

	@Getter
	@Setter
	private String surname;

	@Getter
	@Setter
	private String username;

	@Getter
	@Setter
	private String password;

}