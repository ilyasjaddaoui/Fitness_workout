package com.example.Muscle_Auth.exceptions;

import org.springframework.http.HttpStatus;

public class AuthApiException extends Throwable {
    private HttpStatus status;
    private String message;

    public AuthApiException(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

    @Override
    public String getMessage() {
        return message;
    }

}
