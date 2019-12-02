package com.mates.demo.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

public class PostField {

	@Id
	@Getter
	@Setter
	private Long id;

	@Getter
	@Setter
	private Long postTypeId;

	@Getter
	@Setter
	private Boolean required;

	@Getter
	@Setter
	private String fieldLabel;

	@Getter
	@Setter
	private String fieldType;

	@Getter
	@Setter
	private String explanation;

}
