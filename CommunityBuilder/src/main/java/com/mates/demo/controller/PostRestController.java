package com.mates.demo.controller;

import com.mates.demo.data.PostServiceRequest;
import com.mates.demo.data.PostServiceResponse;
import com.mates.demo.domain.Post;
import com.mates.demo.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostRestController {

	@Autowired
	private PostService postService;
/*
	@GetMapping("/getCommunityList")
	@ResponseBody
	public CommunityServiceResponse getCommunityList() {
		CommunityServiceResponse response = new CommunityServiceResponse();
		response.getResponse().put("communityList", communityService.getAllCommunities());

		return response;
	}

	@GetMapping("/searchCommunity")
	@ResponseBody
	public CommunityServiceResponse getCommunityByName(@RequestParam String keyword) {

		CommunityServiceResponse response = new CommunityServiceResponse();
		response.getResponse().put("communityList", communityService.searchCommunity(keyword));

		return response;
	}
*/
	@PostMapping("/savePost")
	@ResponseBody
	public PostServiceResponse savePost(@RequestBody PostServiceRequest request) {

		Post post =  postService.savePost(request.getPost());

		PostServiceResponse response = new PostServiceResponse();
		response.getResponse().put("post", post);

		return response;
	}


}
