package com.mates.demo.dto;

import com.mates.demo.domain.Community;
import com.mates.demo.domain.PostType;
import com.mates.demo.domain.User;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.Set;

public class CommunityDto {

	@Id
	@Getter
	@Setter
	private Long id;

	@Getter
	@Setter
	private String name;

	@Getter
	@Setter
	private String explanation;

	@Getter
	@Setter
	private User builder;

	@Getter
	@Setter
	private Set<User> attenderSet;

	@Getter
	@Setter
	private Set<PostType> postTypeSet;

	public static CommunityDto fromCommunity(Community community){
		CommunityDto dto =  new CommunityDto();
		dto.setName(community.getName());
		dto.setExplanation(community.getExplanation());
		/*dto.setBuilder(community.getBuilder());
		dto.setAttenderSet(community.getAttenderSet());
		dto.setPostTypeSet(community.getPostTypeSet());
*/
		return dto;
	}
}
