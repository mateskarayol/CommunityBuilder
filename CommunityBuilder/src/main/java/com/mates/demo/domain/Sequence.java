package com.mates.demo.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Sequence")
public class Sequence {

	@Id
	@Getter
	@Setter
	String id;

	@Getter
	@Setter
	Long sequence;
}
