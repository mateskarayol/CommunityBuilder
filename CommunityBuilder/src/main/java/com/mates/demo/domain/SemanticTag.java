package com.mates.demo.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "SemanticTag")
public class SemanticTag {

	@Getter
	@Setter
	private String code;

	@Getter
	@Setter
	private String label;

	@Getter
	@Setter
	private String description;
}
