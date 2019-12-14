package com.mates.demo.repository;

import com.mates.demo.domain.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface PostRepository extends MongoRepository<Post, Long>  {

	@Query("{name:'?0'}")
	public Post findByName(String name);

	@Query("{'name': {$regex: ?0, $options:'i' }})")
	public List<Post> findByQuery(String keyword);

	public List<Post> findByCommunityId(Long communityId);

}
