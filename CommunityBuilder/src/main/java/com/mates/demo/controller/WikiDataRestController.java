package com.mates.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.wikidata.wdtk.wikibaseapi.apierrors.MediaWikiApiErrorException;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class WikiDataRestController {


	@GetMapping("/getWikiDataByTitle")
	@ResponseBody
	public String getWikiDataByTitle(@RequestParam String wikiKeyword) throws MediaWikiApiErrorException, IOException {


		final String uri = "https://www.wikidata.org/w/api.php?action={action}&limit={limit}&language={language}&format={format}&search={search}&origin={origin}";

		Map<String, String> params = new HashMap<String, String>();
		params.put("action", "wbsearchentities");
		params.put("limit", "100");
		params.put("language", "en");
		params.put("format", "json");
		params.put("search", wikiKeyword);
		params.put("origin", "*");


		RestTemplate restTemplate = new RestTemplate();
		String result = restTemplate.getForObject(uri, String.class, params);

		return result;


	}


}
