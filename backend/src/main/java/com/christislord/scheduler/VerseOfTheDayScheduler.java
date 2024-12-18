package com.christislord.scheduler;

import com.christislord.service.VerseOfTheDayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class VerseOfTheDayScheduler {

    @Autowired
    private VerseOfTheDayService verseOfTheDayService;

    @Scheduled(cron = "0 0 0 * * ?")
    public void updateVerseOfTheDay() {
        verseOfTheDayService.updateVerseOfTheDay();
    }
}
