package com.example.Muscle_Auth.dto;

import lombok.Data;

@Data
public class AppUserDto {
    private Long id;
    private String firstName;
    private String username;
    private String lastName;
    private String email;
}
