package com.mates.demo.service;

import com.mates.demo.domain.Post;
import com.mates.demo.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {


	@Autowired
	PostRepository postRepository;

	@Override
	public Post getPost(String postName){

		return postRepository.findByName(postName);

	}


	@Override
	public List<Post> getAllPosts(){

		return postRepository.findAll();
	}


	@Override
	public Post savePost(Post post){

		return postRepository.save(post);
	}

	@Override
	public List<Post> searchPost(String keyword){
		return postRepository.findByQuery(keyword);
	}


}
