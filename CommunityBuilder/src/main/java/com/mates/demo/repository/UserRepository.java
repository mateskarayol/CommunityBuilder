package com.mates.demo.repository;

import com.mates.demo.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface UserRepository extends MongoRepository<User, Long> {

	@Query("{username:'?0'}")
	User findByUsername(String username);

}
