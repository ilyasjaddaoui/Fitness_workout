package com.example.Muscle_Auth.dto;

import lombok.*;

@Data
public class RegisterDto {
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String password;
}
