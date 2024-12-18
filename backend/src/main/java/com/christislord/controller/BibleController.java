package com.christislord.controller;

import com.christislord.service.BibleService;
import com.christislord.service.VerseOfTheDayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BibleController {

    @Autowired
    private BibleService bibleService;

    @Autowired
    private VerseOfTheDayService verseOfTheDayService;

    @GetMapping("/api/bible")
    public String getBibleChapter(@RequestParam String version,
                                  @RequestParam String bookId,
                                  @RequestParam String chapter) {
        return bibleService.getChapterContent(version, bookId, chapter);
    }

    @GetMapping("/api/verse-of-the-day")
    public String getVerseOfTheDay() {
        return verseOfTheDayService.getVerseOfTheDay();
    }
}
