package com.mates.demo.service;

import com.mates.demo.domain.Post;

import java.util.List;

public interface PostService {

	public Post getPost(String name);

	public List<Post> getAllPosts();

	public Post savePost(Post post);

	public List<Post> searchPost(String keyword);

	}
