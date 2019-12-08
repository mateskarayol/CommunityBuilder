package com.mates.demo.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document(collection = "Post")
public class Post {

	@Transient
	public static final String SEQUENCE_NAME = "post_sequence";

	@Id
	@Getter
	@Setter
	private Long id;

	@Getter
	@Setter
	private Long postTypeId;

	@Getter
	@Setter
	private Map<Long, String> fieldValueMap;

}
