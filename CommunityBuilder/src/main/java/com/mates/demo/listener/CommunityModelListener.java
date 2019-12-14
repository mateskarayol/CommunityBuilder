package com.mates.demo.listener;

import com.mates.demo.domain.Community;
import com.mates.demo.domain.PostType;
import com.mates.demo.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.mapping.event.AbstractMongoEventListener;
import org.springframework.data.mongodb.core.mapping.event.BeforeConvertEvent;
import org.springframework.stereotype.Component;

@Component
public class CommunityModelListener extends AbstractMongoEventListener<Community> {

	private SequenceGeneratorService sequenceGenerator;

	@Autowired
	public CommunityModelListener(SequenceGeneratorService sequenceGenerator) {
		this.sequenceGenerator = sequenceGenerator;
	}

	@Override
	public void onBeforeConvert(BeforeConvertEvent<Community> event) {
		if (event.getSource().getId() == null ) {
			event.getSource().setId(sequenceGenerator.generateSequence(Community.SEQUENCE_NAME));
		}

		for (PostType postType : event.getSource().getPostTypeSet()) {
			if (postType.getId() == null) {
				postType.setId((sequenceGenerator.generateSequence(PostType.SEQUENCE_NAME)));
			}
		}
	}



}
