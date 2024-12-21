package com.christislord.service;

import com.christislord.model.VerseOfTheDay;
import com.christislord.repository.VerseOfTheDayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.jsoup.Jsoup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class VerseOfTheDayService {
    private static final Logger logger = LoggerFactory.getLogger(VerseOfTheDayService.class);

    @Autowired
    private VerseOfTheDayRepository verseOfTheDayRepository;

    @Autowired
    private BibleService bibleService;

    public String getVerseOfTheDay() {
        LocalDate today = LocalDate.now();
        logger.info("Fetching verse for date: {}", today);
        Optional<VerseOfTheDay> verseOfTheDay = verseOfTheDayRepository.findById(today);
        if (verseOfTheDay.isPresent()) {
            logger.info("Found verse for today: {}", verseOfTheDay.get().getContent());
        } else {
            logger.info("No verse found for today.");
        }
        return verseOfTheDay.map(VerseOfTheDay::getContent).orElse("No verse found for today.");
    }

    public void updateVerseOfTheDay() {
        LocalDate today = LocalDate.now();
        String randomVerse = bibleService.getRandomVerse();
        String cleanedVerse = Jsoup.parse(randomVerse).text(); // Clean HTML content
        VerseOfTheDay verseOfTheDay = new VerseOfTheDay(today, cleanedVerse);
        verseOfTheDayRepository.save(verseOfTheDay);
        logger.info("Updated verse of the day: {}", cleanedVerse);
    }
}