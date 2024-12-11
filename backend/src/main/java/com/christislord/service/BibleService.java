package com.christislord.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.json.JSONObject;

@Service
public class BibleService {
    private final String API_KEY = "534a09359416517d7d89a87382c73db4";
    private final String BASE_URL = "https://api.scripture.api.bible/v1";

    public String getChapterContent(String version, String bookId, String chapter) {
        String url = String.format("%s/bibles/%s/chapters/%s.%s", BASE_URL, version, bookId, chapter);
        RestTemplate restTemplate = new RestTemplate();
        
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.set("api-key", API_KEY);
            HttpEntity<String> entity = new HttpEntity<>(headers);

            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
            JSONObject jsonResponse = new JSONObject(response.getBody());
            return jsonResponse.getJSONObject("data").getString("content"); // Extract content from JSON
        } catch (Exception e) {
            return "Error fetching Bible content: " + e.getMessage();
        }
    }
}