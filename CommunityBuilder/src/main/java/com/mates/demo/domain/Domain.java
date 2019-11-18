package com.mates.demo.domain;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "domain")
public class Domain {

	@Id
	@Getter
	@Setter
	private long id;

	@Indexed(unique = true)
	@Getter
	@Setter
	private String domain;

	@Getter
	@Setter
	private boolean displayAds;

}
