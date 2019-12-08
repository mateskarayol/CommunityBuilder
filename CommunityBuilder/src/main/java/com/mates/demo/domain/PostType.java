package com.mates.demo.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@Document(collection = "PostType")
public class PostType {

	@Transient
	public static final String SEQUENCE_NAME = "post_type_sequence";

	@Id
	@Getter
	@Setter
	private Long id;

	@Getter
	@Setter
	private Long comId;

	@Getter
	@Setter
	private String name;

	@Getter
	@Setter
	private String explanation;

	@Getter
	@Setter
	private Set<PostField> postFieldSet;
}
