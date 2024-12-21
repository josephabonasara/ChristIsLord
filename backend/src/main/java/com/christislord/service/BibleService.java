package com.christislord.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Random;

@Service
public class BibleService {
    private static final Logger logger = LoggerFactory.getLogger(BibleService.class);
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
            logger.error("Error fetching Bible content", e);
            return "Error fetching Bible content: " + e.getMessage();
        }
    }

    public String getRandomVerse() {
    String bookId = "GEN"; // Example book ID (Genesis)
    String chapter = "1"; // Example chapter
    String baseUrl = "https://api.scripture.api.bible/v1";
    String bibleId = "de4e12af7f28f599-02"; // Example Bible ID
    RestTemplate restTemplate = new RestTemplate();

    try {
        // Step 1: Fetch the list of verses
        String url = String.format("%s/bibles/%s/chapters/%s.%s/verses", baseUrl, bibleId, bookId, chapter);
        HttpHeaders headers = new HttpHeaders();
        headers.set("api-key", API_KEY);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        JSONObject jsonResponse = new JSONObject(response.getBody());
        JSONArray verses = jsonResponse.getJSONArray("data");

        if (verses.isEmpty()) {
            return "No verses found for the specified chapter.";
        }

        // Step 2: Select a random verse from the list
        Random random = new Random();
        int randomIndex = random.nextInt(verses.length());
        JSONObject randomVerse = verses.getJSONObject(randomIndex);

        // Step 3: Fetch the content of the selected random verse
        String verseId = randomVerse.getString("id");
        String verseUrl = String.format("%s/bibles/%s/verses/%s", baseUrl, bibleId, verseId);
        ResponseEntity<String> verseResponse = restTemplate.exchange(verseUrl, HttpMethod.GET, entity, String.class);
        JSONObject verseJsonResponse = new JSONObject(verseResponse.getBody());

        return verseJsonResponse.getJSONObject("data").getString("content"); // Extract content
    } catch (Exception e) {
        logger.error("Error fetching random verse", e);
        return "Error fetching random verse: " + e.getMessage();
    }
}

}