package com.mates.demo.service;

import com.mates.demo.domain.Community;

import java.util.List;

public interface CommunityService {

	public Community getCommunity(String name);

	public List<Community> getAllCommunities();

	public Community saveCommunity(Community community);

	public List<Community> searchCommunity(String keyword);

	}
