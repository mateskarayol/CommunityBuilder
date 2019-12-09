package com.mates.demo.listener;

import com.mates.demo.domain.Post;
import com.mates.demo.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

@Component
public class PostModelListener extends AbstractMongoEventListener<Post>{

	private SequenceGeneratorService sequenceGenerator;

	@Autowired
	public PostModelListener(SequenceGeneratorService sequenceGenerator) {
		this.sequenceGenerator = sequenceGenerator;
	}

	@Override
	public void onBeforeConvert(BeforeConvertEvent<Post> event) {
		if (event.getSource().getId() == null) {
			event.getSource().setId(sequenceGenerator.generateSequence(Post.SEQUENCE_NAME));
		}
	}



}
