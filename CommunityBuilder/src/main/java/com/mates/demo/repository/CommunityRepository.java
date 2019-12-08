package com.mates.demo.repository;

import com.mates.demo.domain.Community;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CommunityRepository extends MongoRepository<Community, Long>  {

	@Query("{name:'?0'}")
	public Community findByName(String name);

	@Query("{'name': {$regex: ?0, $options:'i' }})")
	public List<Community> findByQuery(String keyword);


}
