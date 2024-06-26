package com.xak.bodyweightanalysis.mailing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MailController {

    @Autowired
    private MailService emailService;

    @PostMapping("/api/send-email/{to}/{subject}/{msg}")
    public String sendEmail(
            @PathVariable("to") String to,
            @PathVariable("subject") String subject,
            @PathVariable("msg") String msg) {
        emailService.sendSimpleEmail(to, subject, msg);
        return "Email sent successfully";
    }
}
