package com.mates.demo.controller;

import com.mates.demo.data.CommunityServiceRequest;
import com.mates.demo.data.CommunityServiceResponse;
import com.mates.demo.domain.Community;
import com.mates.demo.dto.CommunityDto;
import com.mates.demo.service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CommunityRestController {

	@Autowired
	private CommunityService communityService;

	@GetMapping("/getCommunityList")
	@ResponseBody
	public List<Community> getCommunityList() {

		return communityService.getAllCommunities();
	}

	@GetMapping("/getCommunityByName")
	@ResponseBody
	public CommunityServiceResponse getCommunityByName(@RequestBody CommunityServiceRequest request) {

		Community community=  communityService.getCommunity(request.getCommunity().getName());

		CommunityServiceResponse response = new CommunityServiceResponse();
		response.getResponse().put("community", CommunityDto.fromCommunity(community));

		return response;
	}

	@PostMapping("/saveCommunity")
	@ResponseBody
	public CommunityServiceResponse saveCommunity(@RequestBody CommunityServiceRequest request) {

		String name =  communityService.saveCommunity(request.getCommunity());

		CommunityServiceResponse response = new CommunityServiceResponse();
		response.getResponse().put("communityName", name);

		return response;
	}
}
