package com.mates.demo.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@Document(collection = "Community")
public class Community {

	@Transient
	public static final String SEQUENCE_NAME = "community_sequence";

	@Id
	@Getter
	@Setter
	private Long id;

	@Getter
	@Setter
	private String name;

	@Getter
	@Setter
	private String explanation;
/*
	@Getter
	@Setter
	private User builder;

	@Getter
	@Setter
	private Set<User> attenderSet;
*/
	@Getter
	@Setter
	private Set<PostType> postTypeSet;

	@Getter
	@Setter
	private Set<Post> postContentSet;

	@Getter
	@Setter
	private String bannerPic;



}
