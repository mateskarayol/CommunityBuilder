package com.mates.demo.service;

import com.mates.demo.domain.Community;
import com.mates.demo.repository.CommunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class CommunityServiceImpl implements CommunityService {


	@Autowired
	CommunityRepository communityRepository;

	@Override
	public Community getCommunity(String communityName){

		return communityRepository.findByName(communityName);

	}


	@Override
	public List<Community> getAllCommunities(){

		return communityRepository.findAll();
	}


	@Override
	public String saveCommunity(Community community){
		Random rand = new Random();
		community.setId(rand.nextLong());
		return communityRepository.save(community).getName();
	}

	@Override
	public List<Community> searchCommunity(String keyword){
		return communityRepository.findByQuery(keyword);
	}


}
