package com.mates.demo.listener;

import com.mates.demo.domain.PostType;
import com.mates.demo.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

@Component
public class PostTypeModelListener extends AbstractMongoEventListener<PostType>{

	private SequenceGeneratorService sequenceGenerator;

	@Autowired
	public PostTypeModelListener(SequenceGeneratorService sequenceGenerator) {
		this.sequenceGenerator = sequenceGenerator;
	}

	@Override
	public void onBeforeConvert(BeforeConvertEvent<PostType> event) {
		if (event.getSource().getId() < 1) {
			event.getSource().setId(sequenceGenerator.generateSequence(PostType.SEQUENCE_NAME));
		}
	}



}
