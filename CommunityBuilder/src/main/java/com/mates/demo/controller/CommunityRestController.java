package com.mates.demo.controller;

import com.mates.demo.data.CommunityServiceRequest;
import com.mates.demo.data.CommunityServiceResponse;
import com.mates.demo.domain.Community;
import com.mates.demo.service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommunityRestController {

	@Autowired
	private CommunityService communityService;

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

	@PostMapping("/saveCommunity")
	@ResponseBody
	public CommunityServiceResponse saveCommunity(@RequestBody CommunityServiceRequest request) {

		Community community =  communityService.saveCommunity(request.getCommunity());

		CommunityServiceResponse response = new CommunityServiceResponse();
		response.getResponse().put("community", community);

		return response;
	}


}
