package com.christislord.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "verse_of_the_day")
public class VerseOfTheDay {

    @Id
    @Column(name = "date")
    private LocalDate date;

    @Column(name = "content")
    private String content;

    public VerseOfTheDay() {
    }

    public VerseOfTheDay(LocalDate date, String content) {
        this.date = date;
        this.content = content;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
