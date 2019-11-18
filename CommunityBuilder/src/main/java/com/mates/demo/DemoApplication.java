package com.mates.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

/*
	@Bean
	CommandLineRunner init(UserRepository userRepository) {

		return args -> {

			User user = new User();
			user.setName("Mert");
			user.setSurname("Karayol");
			user.setUsername("mkarayol567");

			userRepository.save(user);

			User currentUser = userRepository.findAll().get(1);

			System.out.println(currentUser.getName() + " " + currentUser.getSurname());


		};
	}


 */
}
