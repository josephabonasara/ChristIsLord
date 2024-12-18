package com.christislord.service;

import com.christislord.model.VerseOfTheDay;
import com.christislord.repository.VerseOfTheDayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class VerseOfTheDayService {

    @Autowired
    private VerseOfTheDayRepository verseOfTheDayRepository;

    @Autowired
    private BibleService bibleService;

    public String getVerseOfTheDay() {
        LocalDate today = LocalDate.now();
        Optional<VerseOfTheDay> verseOfTheDay = verseOfTheDayRepository.findByDate(today);
        return verseOfTheDay.map(VerseOfTheDay::getContent).orElse("No verse found for today.");
    }

    public void updateVerseOfTheDay() {
        LocalDate today = LocalDate.now();
        String randomVerse = bibleService.getRandomVerse();
        VerseOfTheDay verseOfTheDay = new VerseOfTheDay(today, randomVerse);
        verseOfTheDayRepository.save(verseOfTheDay);
    }
}
