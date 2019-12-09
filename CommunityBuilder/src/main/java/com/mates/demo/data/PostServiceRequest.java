package com.mates.demo.data;

import com.mates.demo.domain.Post;
import lombok.Getter;
import lombok.Setter;

public class PostServiceRequest {

	@Getter
	@Setter
	private Post post;

	@Getter
	@Setter
	private String keyword;
}
