package com.christislord.repository;

import com.christislord.model.VerseOfTheDay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface VerseOfTheDayRepository extends JpaRepository<VerseOfTheDay, LocalDate> {
    Optional<VerseOfTheDay> findByDate(LocalDate date);
}
