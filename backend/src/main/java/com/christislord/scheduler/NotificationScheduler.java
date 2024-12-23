package com.christislord.scheduler;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class NotificationScheduler {

    @Scheduled(cron = "0 0 9 * * ?")
    public void sendDailyQuizReminder() {
        // Logic to send daily quiz reminder notification
        System.out.println("Time for your daily quiz!");
    }

    @Scheduled(cron = "0 0 18 * * ?")
    public void sendLoginReminder() {
        // Logic to send login reminder notification
        System.out.println("Don't forget to log in!");
    }
}
